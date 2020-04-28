import { GET } from '../../utils/requester';

export const getToken = async (code: string) => {
    const res = await GET(`token/${code}`);
    return res.access_token;
};