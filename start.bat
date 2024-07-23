@echo off

:: Navigate to the backend directory and start the backend server
cd backend
echo Starting backend server...
start "" cmd /c "nodemon"

:: Navigate to the frontend directory and start the frontend server
cd ../frontend
echo Starting frontend server...
start "" cmd /c "npm start"

pause
