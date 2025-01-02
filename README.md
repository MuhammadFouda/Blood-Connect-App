# Blood Connect Platform

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [Technologies](#technologies)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [API Documentation](#api-documentation)
8. [Contributing](#contributing)
9. [License](#license)

## Introduction
The Blood Connect Platform is a MERN stack application designed to facilitate blood donation management. It provides features for user registration, medical information collection, and profile management.

## Features
- User authentication (Login/Signup)
- Medical form submission
- User profile management
- Responsive UI with Tailwind CSS
- RESTful API backend

## Technologies
- **Frontend**: React, Tailwind CSS, React Router
- **Backend**: Node.js, Express, MongoDB
- **Authentication**: JWT
- **Database**: MongoDB

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MuhammadFouda/Blood-Connect-App.git
   cd Blood-Connect-App
   ```

2. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

3. Install frontend dependencies:
   ```bash
   cd ../frontend
   npm install
   ```

## Configuration
1. Create a `.env` file in the backend directory with the following variables:
   ```
   DB_URI=mongodb://localhost:27017/bloodconnect
   PORT=5000
   JWT_SECRET=your_jwt_secret
   ```

2. Start the development servers:
   ```bash
   cd backend
   npm start
   cd ../frontend
   npm start
   ```

## Usage
1. Access the application at http://localhost:3000
2. Register as a new user or login with existing credentials
3. Complete the medical form (for new users)
4. Access your profile and manage your information

## API Documentation
### Authentication
- **POST /api/auth/register** - Register a new user
- **POST /api/auth/login** - Authenticate user

### User Profile
- **GET /api/users/profile** - Get user profile
- **PUT /api/users/profile** - Update user profile

### Medical Information
- **POST /api/medical** - Submit medical form
- **GET /api/medical** - Get medical information

## Contributing
1. Fork the repository
2. Create a new branch (`git checkout -b feature/YourFeatureName`)
3. Commit your changes (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/YourFeatureName`)
5. Create a new Pull Request

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
