angular.module('MyStrain')
.directive('myStrain', myStrain);

function myStrain(){
	var directive = {
		restrict: 'E',
		replace: true,
		templateUrl: 'templates/strainDirective.html',
		scope: {
			question: '@'
		}
	};
	return directive;
}