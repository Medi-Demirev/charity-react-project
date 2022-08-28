import * as request from "./util/requester/requester";

const baseUrl = 'http://localhost:3030/data/userProfiles';


export const getAll = () => request.get(baseUrl);

export const getOne = (profileId) => request.get(`${baseUrl}/${profileId}`);

export const create = (userProfilestData) => request.post(baseUrl, userProfilestData);

export const edit = (profileId, userProfilestData) => request.put(`${baseUrl}/${profileId}`, userProfilestData);

export const remove = (profileId) => request.del(`${baseUrl}/${profileId}`);