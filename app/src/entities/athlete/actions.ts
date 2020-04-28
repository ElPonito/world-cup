import { createAction } from '@reduxjs/toolkit';
import { Athlete } from './modele';

export const storeAthlete = createAction<Athlete>('athlete/STORE_ATHLETE');