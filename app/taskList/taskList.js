'use strict';

angular.module('myApp.taskList', [])
    .controller('TodoCtrl', function TodoCtrl() {
        var self = this;

        self.todos = [{
            text: 'learn angular',
            done: true
        }, {
            text: 'build an angular app',
            done: false
        }];

        self.addTask = function () {
            self.todos.push({text: self.taskName, done: false});
            self.taskName = '';
        };

        self.archive = function() {
            self.todos = self.dones;
        };

        self.deleteTask = function (todo) {
            var index = self.todos.indexOf(todo);
            self.todos.splice(index, 1);
        }
    });