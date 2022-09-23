import * as request from "./util/requester/requester";

const baseUrl = 'https://api-kindness.herokuapp.com/data/donations';



export const create = (causeId, donation) => request.post(baseUrl, { causeId, donation: donation });

export const getByCauseId = (causeId) => {
    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`causeId="${causeId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
};

export const searchById = (causeId) => {
    const search = encodeURIComponent(`causeId="${causeId}"`);
    return request.get(`${baseUrl}?where=${search}`);

};


