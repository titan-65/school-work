// TODO: Create Error Class to handle errors globally
class AppError extends Error {
    constructor(message, statusCode) {
        super(message)

        this.statusCode = statusCode
        this.status
    }
}