console.log('loading appointment_controller');         ///////
// //
MEANModule.controller('AppointmentController', function($scope, $routeParams, $location, AppointmentFactory, UserFactory) {      /////
    // When called from appointmentresults, show the question and all the answers.
    $scope.errorArea = {};
    $scope.apptDate = {
        value: new Date(2016, 4, 11, 8, 0)
    };
    // setup logic for data calendar using Angular material
    $scope.myDate = new Date();
    $scope.minDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth(),
      $scope.myDate.getDate() + 1);
    $scope.maxDate = new Date(
      $scope.myDate.getFullYear(),
      $scope.myDate.getMonth() + 2,
      $scope.myDate.getDate());
    $scope.onlyWeekdaysPredicate = function(date) {
        var day = date.getDay();
        return day === 1 || day === 2 || day === 3 || day === 4 || day === 5;
    };
    // $scope.loggedIn = UserFactory.getUser().name;
    // stuck the username in the URL to avoid extra DB lookup
    // console.log('routeparams ', $routeParams.username);
    $scope.loggedIn = $routeParams.username;

    console.log('$scope.loggedIn = ', $scope.loggedIn);

    //
    // // New appointment record, called from the AppointmentController
    $scope.new_appointment = function() {
        // var currentUser = UserFactory.getUser().name;
        var dateParts = [];
        console.log('user = ', $scope.loggedIn);
        console.log('$scope.myDate = ', $scope.myDate);
        console.log('$scope.myTime = ', $scope.myTime);
        // console.log('new_appointment event', $scope.new_appt);
        var timeParts = $scope.myTime.split(':');
        $scope.apptDate = new Date(
            $scope.myDate.getFullYear(),
            $scope.myDate.getMonth(),
            $scope.myDate.getDate(),
            timeParts[0],
            timeParts[1]
        );
        console.log('apptDate = ', $scope.apptDate);
        var new_appointment = {
            name : $scope.loggedIn,
            date: $scope.apptDate,
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
