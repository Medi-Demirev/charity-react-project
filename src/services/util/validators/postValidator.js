import {POST_VALIDATIONS } from "../constants/validations"; 

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

export const validateImageUrl = (imageUrl) => 
{
    const isValid = POST_VALIDATIONS.IMAGEURL_REGEX.test(imageUrl);

    if(!isValid)
    {
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

export const validateFunds = (funds) => 
{
    const isValid = POST_VALIDATIONS.FUNDS_REGEX.test(funds);

    if(!isValid)
    {
        return POST_VALIDATIONS.FUNDS_ERROR_MSG;
    }

    return '';
};