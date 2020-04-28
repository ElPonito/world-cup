import { GET } from '../../utils/requester';

export const getCurrentAthlete = async (token: string) => await GET('athlete', { Authorization: token });