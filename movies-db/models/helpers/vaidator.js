const STRING_CONSTANTS = {
    MIN_STRING_LENGTH: 2,
    MAX_STRING_LENGTH: 30
};

const PATTERNS = {
    NAME_PATTERN: /[^a-zA-Z]/,
    PASSWORD_PATTERN: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}/,
    USER_NAME_PATTERN: /\S[_a-zA-Z0-9]{6,15}/,
    EMAIL_PATTERN: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
    RESTRICTED_SYMBOLS_PATTERN: /[<>$@#&]/gm
}

const MESSAGES = {
    INVALID_EMPTY_MESSAGE: 'must not be empty!',
    INVALID_VALUE_MESSAGE: 'must be filled and in valid format!',
    INVALID_SYMBOLS_MESSAGE: 'must not contain special characters as [<,>,$] or be empty!',
    INVALID_PASSWORD_MESSAGE: 'must contain at least one uppercase, lowcase and number and be 8-20 symbols long!',
    INVALID_USERNAME_MESSAGE: 'must contain only letters, numbers and underscores and be 6-15 symbols!'
};