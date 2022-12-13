import axios from 'axios';

export async function executeDBRequest(method, endpoint, token = "", body = {}) {
    console.log(process.env.API_DB_HOST + endpoint)
    return axios({
        method: method,
        url: process.env.API_DB_HOST + endpoint,
        headers: {
            "Authorization": "Bearer " + token,
            "Content-Type": "application/json"
        },
        data: body
    });
}
