import React from 'react';
import { withRouter } from 'react-router-dom';
import { queryParamsParser } from '../../utils/url';

interface Props {
    location: any
}

const Login = ({ location }: Props) => {
    const parsedUrl = queryParamsParser(location.search);
    return (
        <div>
            token: {parsedUrl?.code}
        </div>
    );
};

export default withRouter(Login);