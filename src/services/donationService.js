import * as request from "../services/util/requester";

const baseUrl = 'http://localhost:3030/data/donations';

export const create = (causeId, donation) =>
    request.post(baseUrl, { causeId, donation: donation });

export const getByCauseId = (causeId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`causeId="${causeId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
};

export const searchById = (causeId) => {
    const search = encodeURIComponent(`causeId="${causeId}"`);
    return request.get(`${baseUrl}?where=${search}`);

    
}
