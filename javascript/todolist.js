(function(){

    'use strict';

    angular
        .module('myApp',[])
        .controller('todoList',todoList);

    //function todoCtrl ($scope){
    //
    //    var ds = $scope;
    //
    //    ds.value = "" ;
    //    ds.showValue = "" ;
    //    ds.array = [] ;
    //    ds.obj={ name:"Ammar",Email:"ammarahmed4517331@gmail.com",mobileNumber:'09098787654321',Address:'model'};
    //
    //    ds.save = function(obj){
    //        ds.showValue = ds.value;
    //        ds.array.push(obj);
    //        ds.obj={name:'', email:'', mobileNumber:'', Address:''};
    //    };
    //}
    function todoList ($scope) {
        var ds = $scope;

        //ds.isShow = true;
        ds.value = '';
        ds.showValue = '';
        ds.array = [];
        ds.obj = {
            name: 'Ammar',
            email: 'ammarahmed4517331@gmail.com',
            number: '03242140215',
            address: 'model colony karachi'
        };

        ds.save = function (obj) {
            console.log(obj);
            ds.showValue = ds.value;
            ds.array.push(obj);
            ds.obj = {name: '', email: '', number: '', address: ''};
        };
        ds.delete = function(index){
            ds.array.splice(index,1);
        }
    }

})();