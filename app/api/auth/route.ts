import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory user store (replace with database in production)
const users: Map<string, { id: string; email: string; name: string; password?: string; provider?: string }> = new Map()

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { action, email, password, name, provider, googleId } = body

    if (action === 'signup') {
      // Check if user exists
      if (users.has(email)) {
        return NextResponse.json(
          { error: 'User already exists' },
          { status: 400 }
        )
      }

      // Create new user
      const userId = Math.random().toString(36).substr(2, 9)
      const user = {
        id: userId,
        email,
        name,
        password: password ? await hashPassword(password) : undefined,
        provider,
      }

      users.set(email, user)

      return NextResponse.json(
        {
          success: true,
          user: { id: userId, email, name },
          token: generateToken(userId),
        },
        { status: 201 }
      )
    }

    if (action === 'login') {
      const user = users.get(email)

      if (!user) {
        return NextResponse.json(
          { error: 'User not found' },
          { status: 404 }
        )
      }

      if (user.password && password) {
        const isValid = await verifyPassword(password, user.password)
        if (!isValid) {
          return NextResponse.json(
            { error: 'Invalid password' },
            { status: 401 }
          )
        }
      }

      return NextResponse.json(
        {
          success: true,
          user: { id: user.id, email: user.email, name: user.name },
          token: generateToken(user.id),
        },
        { status: 200 }
      )
    }

    if (action === 'google-login') {
      let user = Array.from(users.values()).find(u => u.provider === 'google' && u.email === email)

      if (!user) {
        // Create new user from Google
        const userId = Math.random().toString(36).substr(2, 9)
        user = {
          id: userId,
          email,
          name,
          provider: 'google',
        }
        users.set(email, user)
      }

      return NextResponse.json(
        {
          success: true,
          user: { id: user.id, email: user.email, name: user.name },
          token: generateToken(user.id),
        },
        { status: 200 }
      )
    }

    return NextResponse.json(
      { error: 'Invalid action' },
      { status: 400 }
    )
  } catch (error) {
    console.error('Auth error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

// Simple password hashing (use bcrypt in production)
async function hashPassword(password: string): Promise<string> {
  return Buffer.from(password).toString('base64')
}

async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return Buffer.from(password).toString('base64') === hash
}

function generateToken(userId: string): string {
  return Buffer.from(`${userId}:${Date.now()}`).toString('base64')
}
