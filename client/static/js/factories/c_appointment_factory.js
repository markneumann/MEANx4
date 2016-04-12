console.log('loading appointment_factory');        ////////
// // create the PollFactory

MEANModule.factory('AppointmentFactory', function($http) {

    var factory = {};
    var appointments = [];
// return a list of all the appointments
    factory.index = function(callback) {
        console.log("factory.index");       ////////////
        // Where do we get access to $http?
        $http.get('/appointments')                 ////////
            .then(function(output) {
                appointments = output.data;                ////////
                console.log("output =", output.data);
                callback(appointments);                /////////
            })
            .catch(function(err) {
                console.log("err =", err);
            });
    };

//
// // create a new appointment instance
    factory.create = function(data, callback) {
        console.log('the appointment data', data);
        $http.post('/appointments', data)
            .then(function(output) {
                console.log("post /appointments response: ", output.data);
                callback(output.data);
            })
            .catch(function(err) {
                console.log("err =", err);
            });
    };
//
//     //called from dashboard controller to cancel the appointment
   factory.cancel = function(data, callback) {
       console.log("appointment factory.cancel data:", data);
       $http.get('/appointments/cancel/' + data)
       .then(function(output) {
           console.log("cancel response",output);
           callback(output.data);
       })
       .catch (function(err){
           console.log("err =", err );
       });
   };
//
//

//
    return factory;
});
