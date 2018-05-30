const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const router = require('./routers/record.router');

app.use(express.static('server/public'));
app.use(bodyParser.urlencoded ({extended:true}));
app.use('/record', router);

const port = 5000;

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});