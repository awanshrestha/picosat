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

//PORT CONFIG
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var path = 'COM6';

// function getPorts(){
//      return SerialPort.list()
//         .then(ports => {
//             foundPorts = [];
//             ports.forEach(function(port) {
//             path = port.path;
//             foundPorts.push(path);
//             });
//             return foundPorts;
//         })
// }

// function getPorts(){
//     return new Promise(async (resolve, reject)=>{
//         var ports = await SerialPort.list();
//         resolve( ports.map(port => data.push(port.path)))
//     });
// }

// getPorts().then(function(result){
//     console.log(result)
// })

const port = new SerialPort(path, { baudRate: 9600 });
const parser = new Readline();
port.pipe(parser);

parser.on('data', line => {
    console.log(`>${line}`);
    var adata = (`> ${line}`).split(" ");
    if(adata[1]=="S.N"){
        var sat_data = new Satdata({
            timestamp: Date.now(),
            temperature: adata[8],      
            humidity: adata[15],
            pressure: adata[22],
            altitude: adata[29],
            gas: adata[36], 
            pollution: adata[39],
        });
        
        sat_data.save();
    }
});
port.write('ROBOT POWER ON\n');

