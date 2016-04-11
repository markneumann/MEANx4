console.log('loading app.js');
// Let's create our angular module
var MEANModule = angular.module('MEAN_app', ['ngRoute']);       /////////////

// the .controller() method adds a controller to the module
MEANModule.config(function($routeProvider){                     /////////////
    $routeProvider
    .when('/', {
        templateUrl: '/partials/login.html'
    })
    .when('/dashboard', {                           // show the appointments
        templateUrl: '/partials/dashboard.html'
    })
    // .when('/appointment/new', {                    // new appointment
    //     templateUrl: '/partials/poll.html'
    // })
    // .when('/appointment/remove/:id', {             // remove the appt
    //     templateUrl: '/partials/pollresults.html'
    // })
    .otherwise({
        redirectTo: '/'
    });
});
