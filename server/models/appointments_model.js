//basic model
console.log("loading appointments_model");         ///////
var mongoose = require('mongoose');
validators    = require('mongoose-validators');

//

var AppointmentSchema = new mongoose.Schema({
    //define schema here
    name: String,
    apptDate : {type: Date,
        validate: validators.isAfter({message: 'Date must be in future'})
    },
    complaint: { type: String,
                required: true,
                minlength: 10},
}, { timestamps: {createdAt: 'created_at'}
});

// could add validations to require some text if there is time

mongoose.model('appointments', AppointmentSchema);

console.log("exit appointments_model");
