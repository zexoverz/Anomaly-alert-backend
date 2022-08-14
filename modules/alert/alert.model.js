const mongoose = require("mongoose");
const Schema = mongoose.Schema

const alertSchema = new Schema({
    timestamp: {
        type: Date,
        required: true
    },
    machine: {
        type: String,
        required: true
    },
    anomaly: {
        type: String,
        required: true
    },
    sensor: {
        type: String,
        required: true
    },
    soundclip: {
        type: String,
        required: true
    },
    reason: {
        type: String,
        required: true
    },
    action: {
        type: String,
    },
    comment: {
        type: String,
    }
})

const Alert = mongoose.model("Alert", alertSchema);
module.exports = Alert;