import * as express from 'express';
import * as strava from 'strava-v3';
import * as cors from 'cors';
import stravaConfig from './conf/stravaConfig';

strava.config(stravaConfig);

const app = express();
app.use(cors());

app.get('/token/:code', async (req, res) => {
    try {
        const result = await strava.oauth.getToken(req.params.code);
        res.send(result);
    } catch (e) {
        console.error('error occurs on /token request', e);
        res.status(500).send('Internal Server error');
    }
});

app.get('/athlete', async (req, res) => {
    try {
        const athlete = await strava.athlete.get({ 'access_token': req.headers.authorization });
        res.send(athlete);
    } catch (e) {
        console.error('error occurs on /token request', e);
        res.status(500).send('Internal Server error');
    }
});

app.listen(8000, () => {
    console.log('Server running on port 8000');
});