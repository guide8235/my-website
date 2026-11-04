@echo off
title Disable GUIDE AI Auto-Start
del "%APPDATA%\Microsoft\Windows\Start Menu\Programs\Startup\GUIDE-AI.lnk" 2>nul
echo Auto-start on Windows boot has been disabled.
pause
