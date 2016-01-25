'use strict';

angular.module('seikyo.admin')

.service('Modal', function (ModalTemplate, $timeout, $q, $state) {
    var template = new ModalTemplate({
        containerUrl: 'views/modal-template.html'
    });

    this.confirm = template.inherit({
        templateUrl: 'views/modals/confirm.html'
    });

    this.input = template.inherit({
        templateUrl: 'views/modals/input.html'
    });

    this.regularForm = template.inherit({
        templateUrl: 'views/modals/regularForm.html'
    });

    this.experienceForm = template.inherit({
        templateUrl: 'views/modals/experienceForm.html',
        controllerAs: 'ctrl',
        controller: /*@ngInject*/ function ($scope, $modal, $timeout) {

            $scope.checked1 = function (experience) {
                experience = experience || {}
                $scope.isChecked2 = false
                $scope.isChecked3 = false
                $scope.isChecked4 = false
                if ($scope.isChecked1) {
                    experience.division = "DF"    
                };
            }
            $scope.checked2 = function (experience) {
                experience = experience || {}
                $scope.isChecked1 = false
                $scope.isChecked3 = false
                $scope.isChecked4 = false
                if ($scope.isChecked2) {
                    experience.division = "DJF"                    
                };
            }
            $scope.checked3 = function (experience) {
                experience = experience || {}
                $scope.isChecked1 = false
                $scope.isChecked2 = false
                $scope.isChecked4 = false
                if ($scope.isChecked3) {
                    experience.division = "DM"                    
                };
            }
            $scope.checked4 = function (experience) {
                experience = experience || {}
                $scope.isChecked1 = false
                $scope.isChecked2 = false
                $scope.isChecked3 = false
                if ($scope.isChecked4) {
                    experience.division = "DJM"                    
                };
            }
        }
    });

    this.cropImage = new ModalTemplate({
        templateUrl: 'views/modals/crop-image.html',
        controllerAs: 'ctrl',
        controller: /*@ngInject*/ function ($scope, $modal, $timeout) {
            var vm = this;

            this.img = '';

            $scope.cropImage = function(){
                var binary = atob(vm.img.split(',')[1]);

                var array = [];
                for (var i = 0; i < binary.length; i++) {
                    array.push(binary.charCodeAt(i));
                }

                var form = new FormData();
                form.append('photo',  new Blob([new Uint8Array(array)], { type: vm.img.type }), vm.img.name);

                $scope.upload({
                    file: form,
                    image: vm.img
                });

                $modal.dismiss();
            };
        }
    });
});
