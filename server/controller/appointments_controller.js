console.log("loading appointments_controller");
var moment = require('moment');
var mongoose = require('mongoose');
var Appointment = mongoose.model('appointments');                 //////
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {
        index:  function(req, res){
            console.log("--> appointments index path");        /////
            Appointment.find({apptDate:{$gte: Date.now()}}).sort({apptDate: 'asc'})
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
            var theDay = moment(req.body.date).startOf('day');
            var theDayAfter = moment(theDay).add(1, 'days');
            console.log('theDay, theDayAfter = ' +
                moment(theDay).format('YYYY-MM-DD') + " " +
                moment(theDayAfter).format('YYYY-MM-DD') );
            // insert logic to check for < 3 appointments on that day
            Appointment.count({
                apptDate: {
                    $gte: theDay.toDate(),
                    $lt:  theDayAfter.toDate()
                }
            })
            .then (function(dayCount){
                console.log('dayCount= ',dayCount);
                if (dayCount >= 3){
                    res.status(500); // send back http 200 status if successful
                    res.json({error: "Cannot exceed 3 appointments per day"});
                } else {
                    Appointment.count({
                        name: req.body.name,
                        apptDate: {
                            $gte: theDay.toDate(),
                            $lt:  theDayAfter.toDate()
                        }
                    })
                    .then (function(userCount){
                        console.log("userCount =", userCount );
                        if (userCount >= 1){
                            res.status(500); // send back http 200 status if successful
                            res.json({error: "Cannot exceed 1 appointments per person per day"});
                        } else {
                            console.log('newAppointment.save ------------->');
                            newAppointment.save()
                            .then (function() {
                                console.log("newAppointment 200", newAppointment);
                                res.status(200); // send back http 200 status if successful
                                res.json(newAppointment);
                            })
                            .catch (function(err){
                                console.log('newAppointment error = ',err);
                                res.status(500); // send back http 200 status if successful
                                //console.log('error: ', err.errors);
                                for (field in err.errors) {
                                    console.log(err.errors[field].message);
                                    var theMessage = err.errors[field].message;
                                }
                                res.json({error: theMessage});
                                // if(err.data.error.errors){
                                //     res.json({error: err.data.error.errors});
                                // }
                                // if (err.data.errmsg) {
                                //     res.json({error: err.data.errmsg});
                                // }
                            });
                        }
                    })      //end new Appointment.save
                    .catch (function(err){
                        console.log('count user appts on day error = ',err);
                        res.status(500); // send back http 200 status if successful
                        res.json({error: err});
                    });
                }
            })
            .catch (function(err){
                console.log('count appts on day error',err);
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
