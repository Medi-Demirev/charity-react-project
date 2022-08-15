import * as request from "./util/requester";

const baseUrl = 'http://localhost:3030/data/volunteers';

export const getAll = () => request.get(baseUrl);

export const getOne = (volunteerId) => request.get(`${baseUrl}/${volunteerId}`);