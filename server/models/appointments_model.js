//basic model
console.log("loading appointments_model");         ///////
var mongoose = require('mongoose');
//

var AppointmentSchema = new mongoose.Schema({
    //define schema here
    name: String,
    apptDate : {type: Date},
    complaint: { type: String,
                    required: true,
                    minlength: 10},
}, { timestamps: {createdAt: 'created_at'}
});

// could add validations to require some text if there is time

mongoose.model('appointments', AppointmentSchema);

console.log("exit appointments_model");
