import * as request from "./util/requester/requester";

const baseUrl = 'https://api-kindness.herokuapp.com/data/causes';

export const getAll = () => request.get(baseUrl);

export const getOne = (causeId) => request.get(`${baseUrl}/${causeId}`);

export const create = (causeData) => request.post(baseUrl, causeData);

export const edit = (causeId, causeData) => request.put(`${baseUrl}/${causeId}`, causeData);

export const remove = (causeId) => request.del(`${baseUrl}/${causeId}`);