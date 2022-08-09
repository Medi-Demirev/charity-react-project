import * as request from "./util/requester";

const baseUrl = 'http://localhost:3030/data/events';

export const getAll = () => request.get(baseUrl);