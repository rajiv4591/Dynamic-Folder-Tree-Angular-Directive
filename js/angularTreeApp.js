(function () {
    'use strict';
    
    angular.module('Angular-Dynamic-Tree', []);
    
}());

(function () {
    'use strict';
    
    //Directive function
    function treeRenderer () {
        return {		
            restrict : 'E',
            templateUrl : 'templates/tree.directive.html',
            replace : true,
            scope: {
				nodeName : "=",
				getSubNodes : "&",
				selectedNode : "&"
            }
        }
    };
    
    //Define directive
    angular.module('Angular-Dynamic-Tree').directive('treeRenderer', treeRenderer);
    
}());
