# XAI Project

This project is a web-based system for presenting AI predictions together with XAI explanations, including SHAP, LIME, and DiCE.

## How to Start the System

### Option 1: Start Automatically

Double-click the following file: start_app.bat

This option automatically installs the required dependencies and starts both the backend and the frontend.

## Option 2: Start Manually

### Step 1: Start the Backend

Open a terminal and run:

cd XAI_Project
cd api
npm install
node index.js

### Step 2: Start the Frontend

Open another terminal and run:

cd XAI_Project
cd Frontend
npm install
npm run dev

After the frontend starts, open the local URL shown in the terminal:

http://localhost:5173


## Notes

* Option 1 is recommended for simple startup.
* When using Option 1, there is no need to run `npm install` manually.
* When using Option 2, keep both terminals open while using the system.
* The backend should be running before using the frontend.
