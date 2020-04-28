import axios from 'axios';
import conf from '../conf';

export const GET = async (route: string, headers = {}) => {
    try {
        const res = await axios.get(`${conf.apiUrl}/${route}`, { headers });
        return res.data;
    } catch (e) {
        throw new Error(`Error occured on GET ${route} : ${e}`);
    }
};