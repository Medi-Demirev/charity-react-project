
export const USER_VALIDATIONS = {
    NAME_MAX_LENGTH: 20,
    NAME_MIN_LENGTH: 2, 
    NAME_ERROR_MSG: "Name must be between 2 and 20 symbols.",

    FIRST_NAME_MAX_LENGTH: 20,
    FIRST_NAME_MIN_LENGTH: 2, 
    FIRST_NAME_ERROR_MSG: "First name must be between 2 and 20 symbols.",

    LAST_NAME_MAX_LENGTH: 20,
    LAST_NAME_MIN_LENGTH: 2, 
    LAST_NAME_ERROR_MSG: "Last name must be between 2 and 20 symbols.",

    COUNTRY_MAX_LENGTH: 20,
    COUNTRY_MIN_LENGTH: 2, 
    COUNTRY_ERROR_MSG: "Country must be between 2 and 20 symbols.",

    CITY_MAX_LENGTH: 20,
    CITY_MIN_LENGTH: 2, 
    CITY_ERROR_MSG: "City must be between 2 and 20 symbols.",

    PASSWORD_REGEX: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{6,}$/,
    PASSWORD_ERROR_MSG: "Password must be at least 6 symbols and should contain capital letter, digit and a special symbol.",
    REPEAT_PASSWORD_ERROR_MSG: "Confirm password does not match password.",

    EMAIL_REGEX:  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    EMAIL_ERROR_MSG: "Valid email is required.",

    PHONE_REGEX: /(\+\d{1,3}\s?)?((\(\d{3}\)\s?)|(\d{3})(\s|-?))(\d{3}(\s|-?))(\d{4})(\s?(([E|e]xt[:|.|]?)|x|X)(\s?\d+))?/,
    PHONE_ERROR_MSG: "The phone number must be up to 10 digits in the following formats: +359812345678 / 0891234567 ",

    ADRESS_REGEX: /^([\w\s\W]+[\w\W]?)\s([\d\-\\\/\w]*)?/,
    ADRESS_ERROR_MSG: "The address must be in one of these formats: Bulgaria Blvd., 1463 Ndk, Sofia or 13 Democracy Street",

    TYPEACCOUNT_REGEX: /(\w+)/,
    TYPEACCOUNT_ERROR_MSG:"Please select an account type",

    FUNDS_REGEX: /\d+/,
    FUNDS_ERROR_MSG:"Please enter only positive integers",

    IMAGEURL_REGEX: /(https:\/\/)([^\s(["<,>/]*)(\/)[^\s[",><]*(.png|.jpg)(\?[^\s[",><]*)?/g,
    IMAGEURL_ERROR_MSG: "Please enter one of the following formats: https://... or  http://....",

    DONATION_ERROR_MSG:"Please choose numbers greater than 0!",
    BALANCE_ERROR_MSG:" Please choose numbers greater than 0!",

    MESSAGE_MAX_LENGTH: 100,
    MESSAGE_MIN_LENGTH: 1, 
    MESSAGE_ERROR_MSG: "Message must be between 1 and 100 symbols.",

    AGE_REGEX:/^(?:1[01][0-9]|120|1[7-9]|[2-9][0-9])$/,
    AGE_ERROR_MSG: "You must be 17 years of age or older.",

    NEGATIVE_BALANCE_ERROR_MSG: "You don't have enough funds. Please add funds to your balance!",
}
