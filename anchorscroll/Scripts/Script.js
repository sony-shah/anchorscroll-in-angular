/// <reference path="angular.js" />

var demoapp = angular.module("DemoApp", []);

demoapp.controller("MyController", function ($scope, $location, $anchorScroll) {
                          $scope.scrollTo = function (scrollLocation) {
                          $location.hash(scrollLocation);
                         $anchorScroll();

                           }
                       });