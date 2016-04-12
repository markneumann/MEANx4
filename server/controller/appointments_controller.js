console.log("loading appointments_controller");             //////
var mongoose = require('mongoose');
var Appointment = mongoose.model('appointments');                 //////
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> appointments index path");        /////
            Appointment.find()                                 //////
            .then(function(results){
                // console.log('results=',results);
                res.json(results);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },

        new: function(req, res) {
            console.log("--> new appointment - body =", req.body);
            var newAppointment = new Appointment({
                name: req.body.name,
                apptDate: req.body.date,
                complaint: req.body.complaint,
            });
            newAppointment.save()
            .then(function() {
                console.log("return 200", newAppointment);
                newAppointment.save()
                .then(function() {
                    console.log("saved new appointment");
                })
                .catch (function(err){
                    console.log("error saving new appointment ",err);
                });
                res.status(200); // send back http 200 status if successful
                res.json(newAppointment);
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },
        //
        cancel:  function(req, res){
            console.log("--> cancel appointment path");
            console.log(req.params);
            Appointment.remove({_id: req.params.id})
            .then(function() {
                console.log("return 200");
                res.status(200); // send back http 200 status if successful
                res.json({success: true});
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // send back http 200 status if successful
                res.json({error: err});
            });
        },
        //


    };
})(); //returns object
