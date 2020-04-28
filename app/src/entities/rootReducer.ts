import { combineReducers } from 'redux';
import { Athlete } from './athlete/modele';
import athlete from './athlete/reducer';

export interface ApplicationState {
    athlete: Athlete
}

const rootReducer = combineReducers<ApplicationState>({
    athlete
});

export default rootReducer;