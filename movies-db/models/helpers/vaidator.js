const validator = (function () {
    const PATTERNS = {
        NAME_PATTERN: /[^a-zA-Z]/,
        PASSWORD_PATTERN: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
        USER_NAME_PATTERN: /\S[_a-zA-Z0-9]{5,10}/,
        EMAIL_PATTERN: /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i,
        RESTRICTED_SYMBOLS_PATTERN: /[<>$@#&]/gm
    }

    const MESSAGES = {
        INVALID_PASSWORD_MESSAGE: 'The password must be at least 6 symbols long and contain at least one uppercase, lowercase and a number.',
        INVALID_USERNAME_MESSAGE: 'The username must be between 6 and 10 symbols and include only letters, numbers and underscores.',
        INVALID_EMAIL_MESSAGES: 'The email is badly formatted.',
        INVALID_PASSWORD_CONFIRM_MESSAGE: 'Passwords does not match.'
    };

    function validateUsername(username) {
        if (!PATTERNS.USER_NAME_PATTERN.test(username)) {
            throw MESSAGES.INVALID_USERNAME_MESSAGE;
        }
    }

    function validateEmail(email) {
        if (!PATTERNS.EMAIL_PATTERN.test(email)) {
            throw MESSAGES.EMAIL.MESSAGES;
        }
    }

    function confirmPassword(password, passwordConfirm) {
        if (!PATTERNS.PASSWORD_PATTERN.test(password)) {
            throw MESSAGES.INVALID_PASSWORD_MESSAGE;
        }

        if (password !== passwordConfirm) {
            throw MESSAGES.INVALID_PASSWORD_CONFIRM_MESSAGE;
        }
    }

     function validateSignUpForm(email, password, username, passwordConfirm) {
        validateUsername(username);
        validateEmail(email);
        confirmPassword(password, passwordConfirm);
    }

    return {
        validateSignUpForm,
        validateUsername,
        validateEmail,
        confirmPassword
    }
} ());

export default validator;