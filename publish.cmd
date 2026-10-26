@echo off
rem Publish the site: commit, pull, push. Double-click this file, or run it in a terminal.
rem Optional: publish.cmd "what you changed"
powershell -NoProfile -ExecutionPolicy Bypass -File "%~dp0publish.ps1" %*
if errorlevel 1 pause
