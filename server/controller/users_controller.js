console.log("loading user_controller");
var mongoose = require('mongoose');
var Users = mongoose.model('users');        /////////////
var catch_errors = function(err){
    res.json({error:err});
};
module.exports = (function() {
    return {

        login: function(req, res) {
            console.log("--> new login via Post path");
            console.log('req.body = ', req.body);
            var newUser = new Users({
                name: req.body.name,
                loggedIn: 'true'
            });
            newUser.save()
            .then(function() {
                console.log("return 200", newUser);
                res.status(200); // send back http 200 status if successful
                res.json(newUser);
                // res.json({success: true});
            })
            .catch (function(err){
                console.log(err);
                res.status(200); // even if login failed, return success
                res.json(newUser);
            });
        },

        logout: function(req, res) {
            console.log("--> new logout via Post path");
            console.log('req.body = ', req.body);
            var logoutUser = {
                name: req.body.name,
                loggedIn: 'false'
            };
            User.update(logoutUser)
            .then(function() {
                console.log("return 200", logoutUser);
                res.status(200); // send back http 200 status if successful
                res.json({error: 'Logged Out'});
                // res.json({success: true});
            })
            .catch (function(err){
                console.log(err);
                res.status(500); // even if login failed, return success
                res.json({error: 'Logout Failure'});
            });
        },

    };
})(); //returns object
