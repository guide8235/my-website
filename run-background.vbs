Set WshShell = CreateObject("WScript.Shell")
WshShell.Run "cmd /c ""cd /d C:\Users\Acer\Desktop\Active Workspace && npm run dev -- --host --port 5173""", 0, False
