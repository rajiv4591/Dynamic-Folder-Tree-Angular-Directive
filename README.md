# Dynamic-Folder-Tree-Angular-Directive
A custom angular directive to generate a dynamic folder tree which can have any number and levels of folders and sub folders. 
Unlike other folder tree directives, this directive does not have all the tree details initially. 
Each level is obtained dynamically by making a call to an api on clicking its parent.

Using the directive in your app:

1. Copy the angularTreeApp.js file to your project files
2. Inject this module ('Angular-Dynamic-Tree') in your main module (for example: angular.module('Your Module', ['Angular-Dynamic-Tree']);
3. Copy the files folder_tree_renderer.html and tree.directive.html to your project files
4. Inside angularTreeApp.js, 

        Note: 1. make sure that the location of templateUrl in the directive matches the url to the copied html files in step 3.
        
              2. Also make sure that the locations to the html files specified in tree.directive.html and folder_tree_renderer.html match                   with the file locations in your project.
              
5. Copy the functions from controller.js file and paste them in your controller. (Note: I created a simple api to call for data but in real time, those can be calls made to an actual api that returns data).
6. Finally in your html, use the following html elemen
      <tree-renderer
            get-sub-nodes="vm.getSubNodes(node)" 
            node-name="vm.nodesList"
            selected-node = "vm.isSelected(node)"
       >
       </tree-renderer>
       
  Plunker: http://plnkr.co/edit/741n1mxbsf0si7vf4J6i
