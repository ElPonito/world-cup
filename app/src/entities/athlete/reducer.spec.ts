import reducer from './reducer';
import { Athlete } from './modele';

describe('athlete/reducer', () => {
    it('Should return default state', () => {
        const action = { type: '', payload: {} as Athlete };

        const result = reducer(undefined, action);

        expect(result).toEqual({
            athlete_type: 0,
            badge_type_id: 0,
            city: '',
            date_preference: '',
            firstname: '',
            follower_count: 0,
            friend_count: 0,
            id: 0,
            lastname: '',
            measurement_preference: '',
            mutual_friend_count: 0,
            premium: false,
            profile: '',
            profile_medium: '',
            resource_state: 0,
            sex: '',
            state: '',
            summit: false,
            username: '',
            weight: 0,
        });
    });

    it('Should store athlete', () => {
        const athlete: Athlete = {
            athlete_type: 0,
            badge_type_id: 1,
            city: 'Grenoble',
            date_preference: 'YYYY-MM-DD',
            firstname: 'Cédric',
            follower_count: 12,
            friend_count: 10,
            id: 12345,
            lastname: 'Guérin',
            measurement_preference: 'meters',
            mutual_friend_count: 0,
            premium: true,
            profile: 'http://fake.com/profile-picture',
            profile_medium: 'http://fake.com/profile-picture',
            resource_state: 0,
            sex: 'M',
            state: '',
            summit: true,
            username: 'CG',
            weight: 80,
        };
        const action = { type: 'athlete/STORE_ATHLETE', payload: athlete };

        const result = reducer(undefined, action);

        expect(result).toEqual({
            athlete_type: 0,
            badge_type_id: 1,
            city: 'Grenoble',
            date_preference: 'YYYY-MM-DD',
            firstname: 'Cédric',
            follower_count: 12,
            friend_count: 10,
            id: 12345,
            lastname: 'Guérin',
            measurement_preference: 'meters',
            mutual_friend_count: 0,
            premium: true,
            profile: 'http://fake.com/profile-picture',
            profile_medium: 'http://fake.com/profile-picture',
            resource_state: 0,
            sex: 'M',
            state: '',
            summit: true,
            username: 'CG',
            weight: 80,
        });
    });
});