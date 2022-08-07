const request = async (method, url, data) => {
    try {
        let buildRequest;

        if (method === 'GET') {
            buildRequest = fetch(url);
        } else {
            buildRequest = fetch(url, {
                method,
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            });
        }
        const response = await buildRequest;

       // console.log(response.status);

        if (response.status === 200) {
            
            const result = await response.json();
            return result;
            
        } else if (response.status=== 403) {
           let error = ''
            throw new Error(error.message);
           
        };

    } catch (err) {
        throw err
    };
};

export const get = request.bind({}, 'GET');
export const post = request.bind({}, 'POST');
export const patch = request.bind({}, 'PATCH');
export const put = request.bind({}, 'PUT');
export const del = request.bind({}, 'DELETE');