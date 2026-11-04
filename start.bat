@echo off
title GUIDE AI - Development Server
cd /d "%~dp0"
echo ========================================================
echo   Starting GUIDE AI Platform (http://localhost:5173)
echo ========================================================
cmd /c "npm run dev -- --host --port 5173"
pause
