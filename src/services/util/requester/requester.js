import { Navigate } from "react-router-dom";
import * as notifier from '../../../services/util/notifier';

const request = async (method, url, data) => {
    
    try {
        const user = localStorage.getItem('auth');
        const auth = JSON.parse(user || '{}');

        let headers = {}

        if (auth.accessToken) {
            headers['X-Authorization'] = auth.accessToken;
        }

        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url, { headers });
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    ...headers,
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

        console.log(response.status);
        if (response.status === 200) {
            
            const result = await response.json();
            return result;
            
        }   else if (response?.status === 409) {
            
            Navigate('/register')
            
    }
        
        else if (response.status=== 403) {
           let error = ''
            throw new Error(error.message);
           
        }

    } catch (err) {
        notifier.notifyError(err.message)
        throw err
    }
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');