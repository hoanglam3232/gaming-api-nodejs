# Gaming API NodeJS

This project is a backend development challenge designed to evaluate proficiency in Node.js, JavaScript, and Express.js. It focuses on API design, database integration, basic security measures, version control, and security and coding concepts.

## INSTALLATION

1. Clone the repository:
   git clone https://github.com/hoanglam3232/gaming-api-nodejs.git
   <br> cd gaming-api-nodejs

2. Install the required packages:
   npm install
   <br> npm audit fix (to enhance secure)

3. Set up environment variables in a `.env` file:
   <br> NODE_ENV=development
   <br> PORT=3000
   <br> MONGO_URI=your_mongo_uri
   <br> JWT_SECRET=your_jwt_secret

## USAGE

### Running the Application

To start the server
<br> node src/index.js

### Testing API

You can test your API using [Insomnia](https://insomnia.rest/download) or any similar API client tools.

## DEPENDENCIES

- **express**: Framework for building web applications and APIs.
- **dotenv**: Loads environment variables from a `.env` file.
- **mongoose**: ODM for MongoDB.
- **bcryptjs**: Hashes and compares passwords.
- **jsonwebtoken**: Creates and verifies JSON Web Tokens.
- **express-validator**: Validates and sanitizes user inputs.
- **helmet**: Secures apps by setting various HTTP headers.
- **express-rate-limit**: Limits repeated requests to public APIs.

## ENDPOINTS

- **POST /api/users/register**: Registers a new user.
- **POST /api/users/login**: Authenticates a user and returns a token.
- **GET /api/users/me**: Returns the user profile based on the provided token.
- **PUT /api/users/me**: Updates user details.
- **DELETE /api/users/me**: Deletes a user.

## SECURITY PRACTICES

Implemented security measures include:

- **Helmet** to set various HTTP headers for security.
- **Rate Limiting** to limit repeated requests.
- **Input Sanitization** using express-validator.
- **Stack Trace Limitation** to avoid revealing error details in production.
