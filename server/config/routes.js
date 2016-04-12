console.log("loading routes");
//********** RESTful routes ********
var mongoose = require('mongoose');
var Appointments = require('../controller/appointments_controller.js');   /////////////
var Users = require('../controller/users_controller.js');           /////////////

module.exports = function(app){                                    /////////////
    app.get('/appointments', Appointments.index);  //Return the list of appointments for the dashboard
    // app.post('/appointments', Appointments.new); //Save new appointment
    // app.get('/appointments/cancel/:id', Appointments.cancel);
    app.post('/users', Users.login);  // Login the user, creating a new one if needed
    app.get("*", route404);
};
//********** End routes **************

function route404(req, res) {
    console.log("404 error for " + req.url);
}
