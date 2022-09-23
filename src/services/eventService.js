import * as request from "./util/requester/requester";

const baseUrl = 'https://api-kindness.herokuapp.com/data/events';

export const getAll = () => request.get(baseUrl);

export const getOne = (eventId) => request.get(`${baseUrl}/${eventId}`);

export const create = (eventData) => request.post(baseUrl, eventData);

export const edit = (eventId, eventData) => request.put(`${baseUrl}/${eventId}`, eventData);

export const remove = (eventId) => request.del(`${baseUrl}/${eventId}`);
