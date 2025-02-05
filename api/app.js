require('dotenv').config();
const spotifyApi = require('./configs/spotify.config');
const express = require('express');
const cors = require('./middlewares/cors.middleware');

const app = express();

app.use(express.json());
app.use(cors)

app.use('/api', require('./configs/routes.config'));

spotifyApi
    .clientCredentialsGrant()
    .then((data) => spotifyApi.setAccessToken(data.body['access_token']))
    .catch((error) => console.log('Something went wrong when retrieving an access token', error));

const port = process.env.PORT || 3000;
app.listen(port, () => console.info(`Server running on port ${port}`));