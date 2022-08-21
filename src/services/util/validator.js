import {USER_VALIDATIONS } from "../util/constants/validations"; 


export const validateName = (value) => {

    if (value< USER_VALIDATIONS.NAME_MIN_LENGTH || value > USER_VALIDATIONS.NAME_MAX_LENGTH) {
        return USER_VALIDATIONS.NAME_ERROR_MSG;
    }

    return '';
};

export const validateCountry = (value) => {

    if (value< USER_VALIDATIONS.COUNTRY_MIN_LENGTH || value > USER_VALIDATIONS.COUNTRY_MAX_LENGTH) {
        return USER_VALIDATIONS.COUNTRY_ERROR_MSG;
    }

    return '';
};
export const validateCity = (value) => {

    if (value< USER_VALIDATIONS.CITY_MIN_LENGTH || value > USER_VALIDATIONS.CITY_MAX_LENGTH) {
        return USER_VALIDATIONS.CITY_ERROR_MSG;
    }

    return '';
};


export const validateEmail = (email) => 
{
    const isValid = USER_VALIDATIONS.EMAIL_REGEX.test(email);

    if(!isValid)
    {
        return USER_VALIDATIONS.EMAIL_ERROR_MSG;
    }

    return '';
};

export const validatePhone = (phone) => 
{
    const isValid = USER_VALIDATIONS.PHONE_REGEX.test(phone);

    if(!isValid)
    {
        return USER_VALIDATIONS.PHONE_ERROR_MSG;
    }

    return '';
};

export const validateAdress = (adress) => 
{
    const isValid = USER_VALIDATIONS.ADRESS_REGEX.test(adress);

    if(!isValid)
    {
        return USER_VALIDATIONS.ADRESS_ERROR_MSG;
    }

    return '';
};

export const validateFunds = (funds) => 
{
    const isValid = USER_VALIDATIONS.FUNDS_REGEX.test(funds);

    if(!isValid)
    {
        return USER_VALIDATIONS.FUNDS_ERROR_MSG;
    }

    return '';
};

export const validateTypeAccount = (typeAccount) => 
{
    const isValid = USER_VALIDATIONS.TYPEACCOUNT._REGEX.test(typeAccount);

    if(!isValid)
    {
        return USER_VALIDATIONS.TYPEACCOUNT_ERROR_MSG;
    }

    return '';
};

export const validateImageUrl = (imageUrl) => 
{
    const isValid = USER_VALIDATIONS.IMAGEURL_REGEX.test(imageUrl);

    if(!isValid)
    {
        return USER_VALIDATIONS.IMAGEURL_ERROR_MSG;
    }

    return '';
};

export const validatePassword = (password) =>
{
    const isValid = USER_VALIDATIONS.PASSWORD_REGEX.test(password);

    if(!isValid)
    {
        return USER_VALIDATIONS.PASSWORD_ERROR_MSG;
    }

    return '';
}

export const validateConfirmPassword = (password, repeatPassword) =>
{
    if(password!=repeatPassword){
        return USER_VALIDATIONS. REPEAT_PASSWORD_ERROR_MSG;
    }

    return '';
}
  

export const validateDonaion = (donation) =>
{
    if(donation <= 0 ){
        return USER_VALIDATIONS. DONATION_ERROR_MSG;
    }

    return '';
}

export const validateBalance = (balance) =>
{
    if(balance <= 0 ){
        return USER_VALIDATIONS. BALANCE_ERROR_MSG;
    }

    return '';
}