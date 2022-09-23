import * as request from "./util/requester/requester";

const baseUrl = 'https://api-kindness.herokuapp.com/data/eventDonations';


export const create = (eventId, donation) => request.post(baseUrl, { eventId, donation: donation });

export const getByEventId = (eventId) => {

    const relations = encodeURIComponent(`user=_ownerId:users`);
    const search = encodeURIComponent(`eventId="${eventId}"`);

    return request.get(`${baseUrl}?where=${search}&load=${relations}`);
};

export const searchByEventId = (eventId) => {

    const search = encodeURIComponent(`eventId="${eventId}"`);
    return request.get(`${baseUrl}?where=${search}`);

};