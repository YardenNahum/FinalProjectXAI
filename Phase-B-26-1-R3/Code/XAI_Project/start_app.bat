@echo off
echo Starting XAI Project...

:: Start the API
echo Launching API...
cd api
start cmd /k "npm install && node index.js"
cd ..

:: Start the Frontend
echo Launching Frontend...
cd Frontend
start cmd /k "npm install && npm run dev"
cd ..

echo Both services are starting. Please wait for the servers to initialize.
pause