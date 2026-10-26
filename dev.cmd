@echo off
rem Local preview. Double-click this file, or run it in a terminal.
rem Stops with Ctrl+C.
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0dev.ps1" %*
