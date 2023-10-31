class AuthenticationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'AuthenticationError';
    }
}

class BadRequest extends Error {
    constructor(message) {
        super(message);
        this.name = 'BadRequest';
    }
}

class NotFoundError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotFoundError';
    }
}

class InsufficientCreditError extends Error {
    constructor(message) {
        super(message);
        this.name = 'InsufficientCreditError';
    }
}

class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ValidationError';
    }
}

class ClientError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ClientError';
    }
}

class ServerError extends Error {
    constructor(message) {
        super(message);
        this.name = 'ServerError';
    }
}