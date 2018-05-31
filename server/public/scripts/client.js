$(document).ready(onReady);

function onReady(){
    console.log('client side');
    getAllRecords();
    $('#submitButton').on('click', function(event){
        event.preventDefault();
        let record = getNewRecord();
        addRecord(record);
    })
    getAllRecords();
}

function getNewRecord() {
    let record = {
        artist: $('#in-artist').val(),
        album: $('#in-album').val(),
        year: $('#in-year').val(),
        genre: $('#in-genre').val()
    }
    return record;
}

function getAllRecords() {
    $.ajax({
        method: 'GET',
        url: '/record'
    }).then(function(response){
        displayAllRecords(response);
    })
    
}

function addRecord(record){
    console.log(record);
    
    $.ajax({
        method: 'POST',
        url: '/record',
        data: record
    }).then(function(response){
        getAllRecords();
    }).catch(function(response){
        console.log('Something bad happened', status);
        
    })
}

function displayAllRecords(record) {
    let $recordsTarget = $('#records')
    $recordsTarget.empty();
    for (let r of record){
        $recordsTarget.append( makeRowFor (r));
    }
}

function makeRowFor(record){
    let rowHtml = `<tr>
    <td>${record.artist}</td>
    <td>${record.album}</td>
    <td>${record.year}</td>
    <td>${record.genre.join(', ')}</td>
    </tr>`;
    console.log(rowHtml);
    return rowHtml;
}