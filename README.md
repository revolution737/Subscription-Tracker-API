# Subscription Tracker API

A backend API for managing user subscriptions, authentication, and recurring billing or renewal tracking.

## Overview

This project is a subscription management backend built to handle core production-style API workflows such as user authentication, subscription storage, protected routes, validation, and error handling.

It is designed as a practical backend project that can be extended with reminders, scheduled jobs, analytics, admin features, and deployment to a VPS or cloud platform.

## Features

- User registration and login
- Token-based authentication
- Protected API routes
- Create, read, update, and delete subscriptions
- Track renewal dates and billing cycles
- Centralized error handling
- Input validation
- Scalable folder structure for production-style backend apps

## Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT for authentication
- dotenv for environment configuration
- Nodemon for development

## Project Structure

```bash
subscription-tracker/
├── src/
│   ├── controllers/
│   ├── database/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   └── server.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

Make sure you have installed:

- Node.js
- npm
- MongoDB Atlas account or local MongoDB instance
- Git

### Installation

Clone the repository:

```bash
git clone https://github.com/revolution737/subscription-tracker-api.git
cd subscription-tracker-api
```

Install dependencies:

```bash
npm install
```

## Environment Variables

Create a `.env` file in the root directory and add:

```env
PORT=5000
NODE_ENV=development
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_super_secret_key
JWT_EXPIRES_IN=1d
```

Add any extra variables your project uses, such as mail service credentials, rate-limiting keys, or scheduled job configuration.

## Running the App

Start the development server:

```bash
npm run dev
```

Start in production mode:

```bash
npm start
```

## API Base URL

```bash
http://localhost:5000/api/v1
```

## Example Endpoints

### Auth

- `POST /auth/register` - Register a new user
- `POST /auth/login` - Log in an existing user

### Users

- `GET /users/me` - Get the logged-in user profile

### Subscriptions

- `GET /subscriptions` - Get all subscriptions for the logged-in user
- `GET /subscriptions/:id` - Get a single subscription
- `POST /subscriptions` - Create a new subscription
- `PUT /subscriptions/:id` - Update a subscription
- `DELETE /subscriptions/:id` - Delete a subscription

## Sample Request Body

### Create Subscription

```json
{
  "name": "Netflix",
  "price": 499,
  "currency": "INR",
  "billingCycle": "monthly",
  "category": "Entertainment",
  "startDate": "2026-03-01",
  "renewalDate": "2026-04-01",
  "paymentMethod": "Credit Card"
}
```

## Scripts

```json
"scripts": {
  "dev": "nodemon src/server.js",
  "start": "node src/server.js"
}
```

## Error Handling

The API uses centralized error handling to return consistent error responses and improve maintainability across routes and controllers.

## Deployment

This project can be deployed to:

- VPS servers
- Render
- Railway
- DigitalOcean
- AWS EC2

For VPS deployment, you can use:

- Nginx as a reverse proxy
- PM2 for process management
- MongoDB Atlas for database hosting

## Future Improvements

- Email reminders before renewal dates
- Subscription analytics dashboard
- Admin panel
- Role-based access control
- Swagger API documentation
- Unit and integration testing
- Docker support
- CI/CD pipeline

## License

This project is for educational and portfolio purposes.

## Author

Your Name  
GitHub: https://github.com/revolution737
```
