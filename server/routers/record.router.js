const express = require('express');

const router = express.Router();

const Record = require('../modules/record.class');
const recordArray = [
    new Record('Beatles', 1969, 'Abbey Road', ['Rock']),
    new Record('Michael jackson',1979,'Off the Wall',['Pop']),
    new Record('Prince',1984,'Purple Rain',['Pop'])
];

router.get('/',(req,res) => {
    console.log('Handling my GET for /record');
    res.send(recordArray);
    
});

router.post('/', (req,res) =>{
    console.log('Handling my POST for /record');
    let sendRecord = req.body;
    let record = new Record(
        sendRecord.album,
        sendRecord.year,
        sendRecord.artist,
        [sendRecord.genre]
    );
    recordArray.push(record);
    res.sendStatus(201);
})

module.exports = router;