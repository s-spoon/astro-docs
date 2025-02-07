@echo off
REM ============================================
REM Batch Script with Enhanced Argument Options
REM Actions: pull, build, index, zip
REM Options:
REM   --no-all          Disable all actions
REM   --pull            Enable pull action
REM   --no-pull         Disable pull action
REM   --build           Enable build action
REM   --no-build        Disable build action
REM   --index           Enable index action
REM   --no-index        Disable index action
REM   --zip             Enable zip action
REM   --no-zip          Disable zip action
REM ============================================

REM Enable Delayed Variable Expansion
setlocal enabledelayedexpansion

REM Default action flags
set PULL=0
set BUILD=1
set INDEX=1
set ZIP=1

REM Parse arguments
:parseArgs
if "%~1"=="" goto continue

REM Disable all actions
if /I "%~1"=="--no-all" (
    set PULL=0
    set BUILD=0
    set INDEX=0
    set ZIP=0
    shift
    goto parseArgs
)

REM Disable specific actions
if /I "%~1"=="--no-pull" set PULL=0
if /I "%~1"=="--no-build" set BUILD=0
if /I "%~1"=="--no-index" set INDEX=0
if /I "%~1"=="--no-zip" set ZIP=0

REM Enable specific actions
if /I "%~1"=="--pull" set PULL=1
if /I "%~1"=="--build" set BUILD=1
if /I "%~1"=="--index" set INDEX=1
if /I "%~1"=="--zip" set ZIP=1

shift
goto parseArgs

:continue
echo ============================================
echo Starting Batch Script with the Following Actions:
if "%PULL%"=="1" (
    echo [X] Pull
) else (
    echo [ ] Pull
)

if "%BUILD%"=="1" (
    echo [X] Build
) else (
    echo [ ] Build
)

if "%INDEX%"=="1" (
    echo [X] Index
) else (
    echo [ ] Index
)

if "%ZIP%"=="1" (
    echo [X] Zip
) else (
    echo [ ] Zip
)
echo ============================================

REM Only pull if PULL is enabled
if "%PULL%"=="1" (
    echo Performing git pull...
    pfs -c "git checkout main & git pull origin" -j 16

    REM Stage and commit the updated docs in main site
    git add .
    git commit -am "Updated docs."
) else (
    echo Skipping git pull due to --no-pull or --no-all argument
)

REM Only build if BUILD is enabled
if "%BUILD%"=="1" (
    echo Building the project...
    set ASTRO_DATABASE_FILE=../databases/appcentral.db
    call npm run build
) else (
    echo Skipping npm build due to --no-build or --no-all argument
)

REM Only index if INDEX is enabled
if "%INDEX%"=="1" (
    echo Running indexing script...
    REM Go to the "search-engine" directory and run the node script
    pushd search-engine
    call node index-files.js
    popd
) else (
    echo Skipping indexing due to --no-index or --no-all argument
)

REM Only zip if ZIP is enabled
if "%ZIP%"=="1" (
    echo Creating zip archive...

    REM Get the short SHA of the current HEAD
    for /f %%i in ('git rev-parse --short HEAD') do set GIT_SHA=%%i

    REM Check if GIT_SHA is set
    if "!GIT_SHA!"=="" (
        echo ERROR: Unable to retrieve Git SHA. Ensure you are in a Git repository.
        exit /b 1
    ) else (
        echo Git SHA: !GIT_SHA!
    )

    REM Create a temporary directory to store indexes folder as "indexes/"
    xcopy search-engine\indexes temp_indexes /E /I /Y >nul

    REM Create a 7zip archive with "dist" and "temp_indexes" directories
    7z a appcentral-SSR-!GIT_SHA!.7z dist\ temp_indexes\

    REM Rename "temp_indexes" to "indexes" inside the archive
    7z rn appcentral-SSR-!GIT_SHA!.7z temp_indexes indexes

    REM Clean up the temporary folder
    rmdir /S /Q temp_indexes
) else (
    echo Skipping zip archive creation due to --no-zip or --no-all argument
)

echo.
echo All specified actions have been processed.
echo.

REM End Delayed Variable Expansion
endlocal

REM Exit script
exit /b 0
