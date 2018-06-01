let myApp = angular.module('myApp', []);

myApp.controller('RecordStoreController', ['$http', function($http) {
    console.log('NG');
    let vm = this;
    vm.records = [];
    
    vm.getNewRecord = function() {
        let newRecord = {
            artist: vm.artist,
            album: vm.album,
            year: vm.year,
            genre: vm.genre
        } 
        console.log('newRecord', newRecord);
        $http({
            method: 'POST',
            url: '/record',
            data: newRecord
        }).then(function(response) {
            vm.requestRecords();
            vm.artist = '';
            vm.album = '';
            vm.year = '';
            vm.genre = '';
        }).catch(function(error) {
            console.log('Error posting movie', error); 
        }) 
        console.log('Your records', vm.records);
    }

    vm.requestRecords = function() {
        $http({
            method: 'GET',
            url: '/record'
        }).then(function(response){
            console.log('got the response from the server', response.data);
            vm.records = response.data;
            console.log(vm.records);
        }).catch(function(error){
            console.log('error getting records', error);
        }) 
    }
    console.log('RecordStoreController is created');
    vm.requestRecords();
}]);//end controller


