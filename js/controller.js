(function () {
    'use strict';

    angular.module('Angular-Dynamic-Tree')
            .controller('mainCtrl', mainCtrl);
    
    mainCtrl.$inject = ['nodesApi'];
    function mainCtrl (nodesApi) {
        var vm = this;
        
        //List of main nodes
        vm.nodesList = nodesApi.getMainNodes();

        //function to get subnodes
        function getSubNodes (node) {
            node.active = !node.active;
            vm.selectedNode = node;
            if (node.active) {
                node.childs = nodesApi.getSubNodes();
            } else {
                delete node.childs;
            }
        };

        //function to highlight selected item
        function isSelected (node) {
            return vm.selectedNode === node;
        }

        vm.getSubNodes = getSubNodes;
        vm.isSelected = isSelected;
    };
    
}());
