@echo off
title Stop GUIDE AI Server
echo ========================================================
echo   Stopping GUIDE AI Server (Port 5173)...
echo ========================================================
for /f "tokens=5" %%a in ('netstat -aon ^| findstr :5173 ^| findstr LISTENING') do (
    taskkill /f /pid %%a 2>nul
)
echo Server stopped.
pause
