import React from 'react';
import conf from '../../conf';

export default () => {
    const login = () => {
        window.location.href = conf.loginUrl;
    };
    return (
        <button onClick={login}>LOG-IN</button>
    );
}