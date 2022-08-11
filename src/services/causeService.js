import * as request from "./util/requester";

const baseUrl = 'http://localhost:3030/data/causes';

export const getAll = () => request.get(baseUrl);

export const getOne = (causeId) => request.get(`${baseUrl}/${causeId}`);

export const create = (causeData) => request.post(baseUrl, causeData);

export const edit = (causeId, causeData) => request.put(`${baseUrl}/${causeId}`, causeData);