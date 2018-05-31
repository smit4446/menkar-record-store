const express = require('express');

const router = express.Router();

//require in our Mongoose Model
const Record = require('../modules/models/record.schema');


// const recordData = [
//     new Record('Beatles', 1969, 'Abbey Road', ['Rock']),
//     new Record('Michael jackson',1979,'Off the Wall',['Pop']),
//     new Record('Prince',1984,'Purple Rain',['Pop'])
// ];

router.get('/',(req,res) => {
    Record.find()
    .then((data) => {
        console.log('got stuff back from mongo', data);
        res.send(data);  
    }).catch((error) =>{
        console.log('error from mongo', error);
        res.send(500);  
    })
});

router.post('/', (req,res) =>{
    let recordData = req.body;
    console.log('got the record data from request', recordData);
    let newRecord = new Record(recordData);
    console.log('new record is', newRecord);
    newRecord.save()
        .then(()=> {
            res.sendStatus(201);
    }).catch((error) => {
        console.log('error adding record', error);
        res.sendStatus(501);
    })
})

router.delete('/', (req,res) => {
    // delete doesn't use data so we are going to use parameters instead
    // data is req.body
    // parameter is req.query
    Record.findByIdAndRemove(req.query._id)
    .then(()=> {
        res.sendStatus(200);
    })
    .catch((error) => {
        console.log(`Error removing record: ${error}`);
        res.sentStatus(500);   
    })
});

router.put('/', (req,res) => {
    let recordData = req.body;
    //put can sent data, so getting id from req.body
    //findByID and ._id are mongoose methosd
    Record.findByIdAndUpdate(req.body._id, recordData)
    .then( () => {
        console.log('Updated record with id', recordData._id);
        res.sendStatus(200); 
    })
    .catch( () => {
        console.log('Error updating record with id', recordData._id, error);
        res.sendStatus(500);
    })
});

module.exports = router;