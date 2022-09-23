import * as request from "./util/requester/requester";

const baseUrl = 'https://api-kindness.herokuapp.com/data/volunteers';

export const getAll = () => request.get(baseUrl);

export const getOne = (volunteerId) => request.get(`${baseUrl}/${volunteerId}`);

export const create = (volunteertData) => request.post(baseUrl, volunteertData);

export const edit = (volunteerId, volunteertData) => request.put(`${baseUrl}/${volunteerId}`, volunteertData);

export const remove = (volunteerId) => request.del(`${baseUrl}/${volunteerId}`);