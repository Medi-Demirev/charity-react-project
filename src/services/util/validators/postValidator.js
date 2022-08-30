import { POST_VALIDATIONS } from "../constants/validations";
import { postcodeValidator } from 'postcode-validator';
import * as validations from '../constants/validations'



export const validatePostTitle = (value) => {

    if (value < POST_VALIDATIONS.TITLE_MIN_LEGTH || value > POST_VALIDATIONS.TITLE_MAX_LEGTH) {
        return POST_VALIDATIONS.TITLE_ERROR_MSG;
    }

    return '';
};

export const validatePostSubTitle = (value) => {

    if (value < POST_VALIDATIONS.TITLE_MIN_LEGTH || value > POST_VALIDATIONS.TITLE_MAX_LEGTH) {
        return POST_VALIDATIONS.SUBTITLE_ERROR_MSG;
    }

    return '';
};

export const validateImageUrl = (imageUrl) => {
    const isValid = POST_VALIDATIONS.IMAGEURL_REGEX.test(imageUrl);

    if (!isValid) {
        return POST_VALIDATIONS.IMAGEURL_ERROR_MSG;
    }

    return '';
};

export const validateDescription = (value) => {

    if (value < POST_VALIDATIONS.DESCRIPTION_MIN_LEGTH || value > POST_VALIDATIONS.DESCRIPTION_MAX_LEGTH) {
        return POST_VALIDATIONS.DESCRIPTION_ERROR_MSG;
    }

    return '';
};

export const validateMission = (value) => {

    if (value < POST_VALIDATIONS.MISSION_MIN_LEGTH || value > POST_VALIDATIONS.MISSION_MAX_LEGTH) {
        return POST_VALIDATIONS.MISSION_ERROR_MSG;
    }

    return '';
};

export const validateBenefit = (value) => {

    if (value < POST_VALIDATIONS.BENEFIT_MIN_LEGTH || value > POST_VALIDATIONS.BENEFIT_MAX_LEGTH) {
        return POST_VALIDATIONS.BENEFIT_ERROR_MSG;
    }

    return '';
};

export const validateFunds = (funds) => {
    const isValid = POST_VALIDATIONS.FUNDS_REGEX.test(funds);

    if (!isValid) {
        return POST_VALIDATIONS.FUNDS_ERROR_MSG;
    }

    return '';
};

export const validateCountry = (value) => {

    if (value < POST_VALIDATIONS.COUNTRY_MIN_LENGTH || value > POST_VALIDATIONS.COUNTRY_MAX_LENGTH) {
        return POST_VALIDATIONS.COUNTRY_ERROR_MSG;
    }

    return '';
};

export const validateCity = (value) => {

    if (value < POST_VALIDATIONS.CITY_MIN_LENGTH || value > POST_VALIDATIONS.CITY_MAX_LENGTH) {
        return POST_VALIDATIONS.CITY_ERROR_MSG;
    }

    return '';
};

export const validateDate = (date) => {
    const isValid = POST_VALIDATIONS.DATE_REGEX.test(date);

    if (!isValid) {
        return POST_VALIDATIONS.DATE_ERROR_MSG;
    }

    return '';
};

export const validateMonth = (month) => {
    const isValid = POST_VALIDATIONS.MONTH_REGEX.test(month);

    if (!isValid) {
        return POST_VALIDATIONS.MONTH_ERROR_MSG;
    }

    return '';
};

export const validateHour = (hour) => {
    const isValid = POST_VALIDATIONS.HOUR_REGEX.test(hour);

    if (!isValid) {
        return POST_VALIDATIONS.HOUR_ERROR_MSG;
    }

    return '';
};


export const validatePostcode = (postcode, country) => {

    for (const [currentCountry, countryCode] of Object.entries(validations.countries)) {

        if (currentCountry === country) {
            const isValid = postcodeValidator(postcode, countryCode)

            if (!isValid) {
                return POST_VALIDATIONS.POST_CODE_ERROR_MSG;
            }

            return '';
        }

    }
};
