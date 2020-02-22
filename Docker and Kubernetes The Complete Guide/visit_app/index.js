const express = require('express');
const redis = require('redis');
const process = require('process');

const app = express();
const client = redis.createClient({
    host: 'redis-server', // defined in docker,
    port: 6379 // default port for redis
});
client.set('visit', 0);

app.get('/', (req, res) => {
    process.exit(0); // purposely crash it
    client.get('visit', (err, visitCount) => {
        res.send(`Number of visit is ${visitCount}`);
        client.set('visit', Number(visitCount)+1);
    });
});

app.listen(8081, () => {
    console.log('Listening on port 8081');
});