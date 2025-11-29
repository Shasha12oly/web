<<<<<<< HEAD
# Download Hostzy Assets

Write-Host "Downloading Hostzy assets..." -ForegroundColor Green

# Create directories
New-Item -ItemType Directory -Path "public/meta" -Force | Out-Null
New-Item -ItemType Directory -Path "public/images" -Force | Out-Null

# Download Logo
Write-Host "Downloading Logo.png..." -ForegroundColor Cyan
try {
    Invoke-WebRequest -Uri "https://www.hostzy.in/Logo.png" -OutFile "public/Logo.png" -ErrorAction Stop
    Write-Host "Logo.png downloaded successfully" -ForegroundColor Green
} catch {
    Write-Host "Failed to download Logo.png: $_" -ForegroundColor Red
}

# Download Favicon
Write-Host "Downloading favicon.ico..." -ForegroundColor Cyan
try {
    Invoke-WebRequest -Uri "https://www.hostzy.in/favicon.ico" -OutFile "public/favicon.ico" -ErrorAction Stop
    Write-Host "favicon.ico downloaded successfully" -ForegroundColor Green
} catch {
    Write-Host "Failed to download favicon.ico: $_" -ForegroundColor Red
}

# Download Banner
Write-Host "Downloading Banner.png..." -ForegroundColor Cyan
try {
    Invoke-WebRequest -Uri "https://www.hostzy.in/meta/Banner.png" -OutFile "public/meta/Banner.png" -ErrorAction Stop
    Write-Host "Banner.png downloaded successfully" -ForegroundColor Green
} catch {
    Write-Host "Failed to download Banner.png: $_" -ForegroundColor Red
}

Write-Host "Asset download complete!" -ForegroundColor Green
=======
# Download Hostzy Assets

Write-Host "Downloading Hostzy assets..." -ForegroundColor Green

# Create directories
New-Item -ItemType Directory -Path "public/meta" -Force | Out-Null
New-Item -ItemType Directory -Path "public/images" -Force | Out-Null

# Download Logo
Write-Host "Downloading Logo.png..." -ForegroundColor Cyan
try {
    Invoke-WebRequest -Uri "https://www.hostzy.in/Logo.png" -OutFile "public/Logo.png" -ErrorAction Stop
    Write-Host "Logo.png downloaded successfully" -ForegroundColor Green
} catch {
    Write-Host "Failed to download Logo.png: $_" -ForegroundColor Red
}

# Download Favicon
Write-Host "Downloading favicon.ico..." -ForegroundColor Cyan
try {
    Invoke-WebRequest -Uri "https://www.hostzy.in/favicon.ico" -OutFile "public/favicon.ico" -ErrorAction Stop
    Write-Host "favicon.ico downloaded successfully" -ForegroundColor Green
} catch {
    Write-Host "Failed to download favicon.ico: $_" -ForegroundColor Red
}

# Download Banner
Write-Host "Downloading Banner.png..." -ForegroundColor Cyan
try {
    Invoke-WebRequest -Uri "https://www.hostzy.in/meta/Banner.png" -OutFile "public/meta/Banner.png" -ErrorAction Stop
    Write-Host "Banner.png downloaded successfully" -ForegroundColor Green
} catch {
    Write-Host "Failed to download Banner.png: $_" -ForegroundColor Red
}

Write-Host "Asset download complete!" -ForegroundColor Green
>>>>>>> be68540ff7356c948a321cb7291609bb51f9f819
