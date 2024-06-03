// define class to handle error

class ApiError extends Error {
  constructor(statusCode, message, errors = []) {
    super(message); // Pass the message to the parent class (Error)
    this.statusCode = statusCode;
    this.errors = errors;
  }
}

module.exports = ApiError;
