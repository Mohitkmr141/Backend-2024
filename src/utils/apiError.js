class ApiError extends Error {
  constructor(
    statusCode,
    message = "Something went Wrong",
    errors = [],
    stack = ""
  ) {
    super(message)
    this.statusCode = statusCode,
    this.message = message
    this.success = false
    this.errors = errors






 
    
  }
}
