//DATABASE SCHEMA

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/endata", { useNewUrlParser: true ,useUnifiedTopology: true });
const dataSchema = new mongoose.Schema({
    timestamp: {type: Number, default: 1},
    temperature: {type: Number, default: null},
    humidity: {type: Number, default: null},
    pressure: {type: Number, default: null},
    altitude: {type: Number, default: null},
    gas: {type: Number, default: null},
    pollution: {type: Number, default: null},
    },
    { versionKey: false }
);

const Satdata = mongoose.model("Satdata", dataSchema);

function logEvery5Seconds(i) {
    setTimeout(() => {
        var sat_data = new Satdata({
            timestamp: Date.now(),
            temperature: 12,      
            humidity: 45,
            pressure: 86555,
            altitude: 1200,
            gas: 33, 
            pollution: 2,
        });
        console.log(sat_data)
        sat_data.save();
        logEvery5Seconds(++i);
    }, 5000)
}

logEvery5Seconds(0);







