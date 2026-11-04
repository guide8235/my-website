@echo off
title Enable GUIDE AI Auto-Start
echo Setting up Auto-Start on Windows Boot...

powershell -Command "$s=(New-Object -COM WScript.Shell).CreateShortcut([System.IO.Path]::Combine($env:APPDATA, 'Microsoft\Windows\Start Menu\Programs\Startup', 'GUIDE-AI.lnk')); $s.TargetPath='wscript.exe'; $s.Arguments='\"C:\Users\Acer\Desktop\Active Workspace\run-background.vbs\"'; $s.Save()"

echo.
echo ========================================================
echo  SUCCESS: GUIDE AI will now automatically run
echo  in the background every time Windows starts up!
echo ========================================================
echo.
pause
