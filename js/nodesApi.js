(function () {
    'use strict';
    
    function nodesApi () {
        var vm = this;
        vm.getMainNodes = function () {
            return [
                {
                    id: 1,
                    title: 'Main Node 1'
                },
                {
                    id: 2,
                    title: 'Main Node 2'
                },
                {
                    id: 3,
                    title: 'Main Node 3'
                },
                {
                    id: 14,
                    title: 'Main Node 4'
                }
            ]  
        };
        
        vm.getSubNodes = function () {
            return [
                {
                    id: 1,
                    title: 'Sub Node'
                },
                {
                    id: 2,
                    title: 'Sub Node'
                },
                {
                    id: 3,
                    title: 'Sub Node'
                },
                {
                    id: 4,
                    title: 'Sub Node'
                },
                
            ]
        }
    };
    
    angular.module('Angular-Dynamic-Tree').service('nodesApi', [nodesApi]);
    
}());
