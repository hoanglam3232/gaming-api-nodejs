## USAGE

### Running the Application

To run the application without Nodemon, you can use the following command:

```
node server.js
```

This command will start the server using the Node.js runtime and execute the `server.js` file. Note that without Nodemon, the server will not automatically restart when changes are made to the source code.

### Testing API

You can use [Insomnia](https://insomnia.rest/) or similar tools to test your API. If you haven't installed Insomnia, you can download it from [here](https://insomnia.rest/download).

## DEPENDENCIES

- [express](https://www.npmjs.com/package/express): Node.js framework for building web applications and APIs.
- [dotenv](https://www.npmjs.com/package/dotenv): Module to load environment variables from a `.env` file.

**Optional**:

- [mongoose](https://www.npmjs.com/package/mongoose): Object Data Modeling (ODM) for MongoDB and Node.js.
- [bcryptjs](https://www.npmjs.com/package/bcryptjs): Module for hashing and comparing passwords.
- [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken): Module for creating and verifying JSON Web Tokens.
- [express-validator](https://www.npmjs.com/package/express-validator): Middleware for validating and sanitizing data in Express.js.

## INSTALLATION

1. Clone this repository to your machine:

   ```
   git clone https://github.com/hoanglam3232/gaming-api-nodejs.git
   ```

2. Navigate to the project directory:

   ```
   cd gaming-api-nodejs
   ```

3. Install the required packages using npm:

   ```
   npm install
   ```