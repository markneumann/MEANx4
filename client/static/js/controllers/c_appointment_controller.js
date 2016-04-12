console.log('loading appointment_controller');         ///////
// //
MEANModule.controller('AppointmentController', function($scope, $routeParams, $location, AppointmentFactory, UserFactory) {      /////
    // When called from appointmentresults, show the question and all the answers.
    $scope.errorArea = {};

    $scope.loggedIn = UserFactory.getUser().name;
    console.log('$scope.loggedIn = ', $scope.loggedIn);

    console.log('top of AppointnmentController');
    // show the appointments

    //
    // // New appointment record, called from the DashboardController
    $scope.new_appointment = function() {
        var currentUser = UserFactory.getUser().name;
        console.log('user = ', currentUser);
        console.log('new_appointment event', $scope.new_p);
        var new_appointment = {
            name : currentUser,
            date: $scope.new_appt.theDay,
            time: $scope.new_appt.theTime,
            complaint: $scope.new_appt.complaint
        };
        console.log('new_appointment = ', new_appointment);
        //simply pass in the entire object
        AppointmentFactory.create(new_appointment, function(theOutput) {
            console.log('returned appointment', theOutput);
        });
        console.log('AFTER appointment answer create, the output is ', theOutput);
        $location.path('/dashboard/');
    };
    //


//
    function forErrors(output) {
        console.log('catch --->', output);
        if(output.data.error){  //handle other errors
            //console.log('error = ', output.data.error);
            console.log('error errmsg = ', output.data.error.errmsg);
            $scope.errorArea.errmsg = output.data.error.errmsg;
        }
        if(output.data.errmsg){   //handle not unique
            console.log('errmsg = ', output.data.errmsg);
            $scope.errorArea.errmsg = output.data.error;

        }
    }
//
});
