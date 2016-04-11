console.log('loading dashboard_controller');                /////
// Now let's create a controller with some hardcoded data!
MEANModule.controller('DashboardController', function($scope, $location, AppointmentFactory, UserFactory) {                /////
    // This line goes at the top of the controller callback because the minute the controller gets called upon we want to create the $scope.polls array
    $scope.loggedIn = UserFactory.getUser().name;
    console.log('top of dashboard controller for user ', $scope.loggedIn);
    // Show current Questions
    // AppointmentFactory.index(function(data) {
    //     console.log("AppointmentFactory.index");
    //     $scope.appointments = data;
    //     console.log("$scope.appointments =", $scope.appointments);
    // });

//
});
