# Login Form Application

A full-stack web application featuring user authentication with login and signup functionality. Built with React, Node.js, and MongoDB.

## Features

- User registration and authentication
- Secure login system
- Home page for authenticated users
- Responsive design
- MongoDB database integration

## Project Structure

```
├── client/            # Frontend React application
│   ├── src/
│   │   ├── App.jsx
│   │   ├── Login.jsx
│   │   ├── SignUp.jsx
│   │   └── Home.jsx
│   └── ...
└── server/           # Backend Node.js server
    ├── index.js
    └── models/
        └── Employee.js
```

## Tech Stack

- Frontend:

  - React
  - Vite (build tool)
  - React Router for navigation
  - Modern JavaScript (ES6+)

- Backend:
  - Node.js
  - Express.js
  - MongoDB
  - Mongoose ODM

## Getting Started

1. Clone the repository
2. Install dependencies:

   ```
   # Install frontend dependencies
   cd client
   npm install

   # Install backend dependencies
   cd ../server
   npm install
   ```

3. Start the development servers:

   ```
   # Start frontend (in client directory)
   npm run dev

   # Start backend (in server directory)
   npm start
   ```

4. Open your browser and navigate to `http://localhost:5173`

## Development

- The frontend runs on Vite's development server with HMR (Hot Module Replacement)
- The backend API serves at `http://localhost:3000`
- MongoDB should be running locally or configured via connection string

## Contributing

Feel free to submit issues and enhancement requests.
