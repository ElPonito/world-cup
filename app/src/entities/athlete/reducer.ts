import { Athlete } from './modele';
import { storeAthlete } from './actions';

interface Action {
    type: string,
    payload: Athlete
}

const defaultState: Athlete = {
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
};

export default (state = defaultState, action: Action): Athlete => {
    switch (action.type) {
        case storeAthlete.type: {
            return {
                ...state,
                ...action.payload
            };
        }
        default: {
            return state;
        }
    }
}