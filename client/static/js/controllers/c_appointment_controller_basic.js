console.log('loading appointment_controller');         ///////
// //
MEANModule.controller('AppointmentController', function($scope, $routeParams, $location, AppointmentFactory, UserFactory) {      /////
    // intialize everything
    $scope.errorArea = {};
    $scope.apptDate = {
        value: new Date()
    };
    // $scope.loggedIn = UserFactory.getUser().name;
    console.log('routeparams ', $routeParams.username);
    $scope.loggedIn = $routeParams.username;

    console.log('$scope.loggedIn = ', $scope.loggedIn);

    console.log('top of AppointnmentController');
    // show the appointments

    //
    // // New appointment record, called from the AppointmentController
    $scope.new_appointment = function() {
        // var currentUser = UserFactory.getUser().name;
        console.log('user = ', $scope.loggedIn);
        console.log('new_appointment event', $scope.new_appt);
        var new_appointment = {
            name : $scope.loggedIn,
            date: $scope.new_appt.apptDate,
            complaint: $scope.new_appt.complaint
        };
        console.log('new_appointment = ', new_appointment);
        //simply pass in the entire object
        AppointmentFactory.create(new_appointment, function(output) {
            console.log('returned appointment', output.data);
            if(!output.data.error){
                $location.path('/dashboard/' + $scope.loggedIn);
            } else {
                forErrors(output);
            }
        });
    };
    //


//
    function forErrors(output) {
        console.log('catch --->', output);
        // if(output.data.error){  //handle other errors
        //     //console.log('error = ', output.data.error);
        //     console.log('error errmsg = ', output.data.error);
        //     $scope.errorArea.errmsg = output.data.error;
        // }
        // if(output.data.errmsg){   //handle not unique
        //     console.log('errmsg = ', output.data.errmsg);
        $scope.errorArea.errmsg = output.data.error;
        //}
    }
//
});
