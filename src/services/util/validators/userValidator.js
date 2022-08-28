import {USER_VALIDATIONS } from "../constants/validations"; 


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

export const validateFirstName = (value) => {

    if (value< USER_VALIDATIONS.FIRST_NAME_MIN_LENGTH || value > USER_VALIDATIONS.FIRST_NAME_MAX_LENGTH) {
        return USER_VALIDATIONS.FIRST_NAME_ERROR_MSG;
    }

    return '';
};

export const validateLastName = (value) => {

    if (value< USER_VALIDATIONS.LAST_NAME_MIN_LENGTH || value > USER_VALIDATIONS.LAST_NAME_MAX_LENGTH) {
        return USER_VALIDATIONS.LAST_NAME_ERROR_MSG;
    }

    return '';
};

export const validateMessage = (value) => {

    if (value< USER_VALIDATIONS.MESSAGE_MIN_LENGTH || value > USER_VALIDATIONS.MESSAGE_MAX_LENGTH) {
        return USER_VALIDATIONS.MESSAGE_ERROR_MSG;
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
    const isValid = USER_VALIDATIONS.TYPEACCOUNT_REGEX.test(typeAccount);

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
    if(password !== repeatPassword){
        return USER_VALIDATIONS.REPEAT_PASSWORD_ERROR_MSG;
    }
    return;
}
  

export const validateDonaion = (donation, balance ) =>
{
    if(donation <= 0 ){
        return USER_VALIDATIONS.DONATION_ERROR_MSG;
    } else if (donation > balance ) {
        return USER_VALIDATIONS.NEGATIVE_BALANCE_ERROR_MSG
    }
    return '';
}

export const validateBalance = (addFunds) =>
{
    if(addFunds <= 0 ){
        return USER_VALIDATIONS.BALANCE_ERROR_MSG;
    }

    return '';
}

export const validateAge = (age) => 
{
    const isValid = USER_VALIDATIONS.AGE_REGEX.test(age);

    if(!isValid)
    {
        return USER_VALIDATIONS.AGE_ERROR_MSG;
    }

    return '';
};

export const validateNegativeBalance = (donation, balance) =>
{
    if( donation > balance){
        
        return USER_VALIDATIONS.NEGATIVE_BALANCE_ERROR_MSG;
    }
   
    return '';
}
  