import angular from 'angular';
import angularMeteor from 'angular-meteor';
import todosList from '../imports/components/todosList/todosList.component';
 
angular.module('simple-todos', [ 
  angularMeteor,
  todosList.name 
]);
