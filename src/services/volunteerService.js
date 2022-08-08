import * as request from "./util/requester";

const baseUrl = 'http://localhost:3030/data/volunteer';

export const getAll = () => request.get(baseUrl);