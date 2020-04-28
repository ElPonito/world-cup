import React from 'react';
import { withRouter } from 'react-router-dom';
import { queryParamsParser } from '../../utils/url';
import { getCurrentAthlete } from '../../entities/athlete/service';
import { getToken } from '../../entities/oAuth/service';
import { connect } from 'react-redux';
import { storeAthlete } from '../../entities/athlete/actions';
import { Athlete } from '../../entities/athlete/modele';

interface Props {
    location: {
        search: string
    }
    history: {
        push: (path: string) => void;
    }
    storeCurrentAthlete: (athlete: Athlete) => void
}

const Login = ({ location, history, storeCurrentAthlete }: Props) => {
    const parsedUrl = queryParamsParser(location.search);
    getToken(parsedUrl.code)
        .then(getCurrentAthlete)
        .then(athlete => {
            storeCurrentAthlete(athlete);
            history.push(AppUrl.HOME);
        })
        .catch(e => {
            console.error('error occurred on login', e);
            history.push(AppUrl.HOME);
        });
    return (
        <div>
            token: {parsedUrl?.code}
        </div>
    );
};

const mapDispatchToProps = (dispatch: (action: any) => void) => ({
    storeCurrentAthlete: (athlete: Athlete) => dispatch(storeAthlete(athlete))
});

export default withRouter(connect(undefined, mapDispatchToProps)(Login));