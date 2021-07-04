require('dotenv').config();

const Satdata = require('./models/Satdata');

//PORT CONFIG
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');
var path = 'COM5';

//  FUNCTION TO GET PORTS
function getPorts(){
     return SerialPort.list()
        .then(ports => {
            foundPorts = [];
            ports.forEach(function(port) {
                path = port.path;
                foundPorts.push(path);
            });
            return foundPorts;
        })
}
getPorts().then(function(result){
    console.log(result);
})

// PIPE the SERIALPORT TO the PARSER
const port = new SerialPort(path, { baudRate: 9600 });
const parser = new Readline();
port.pipe(parser);

// READ AND STORE DATA
parser.on('data', line => {
    try {
        console.log(`>${line}`);
        var adata = (`> ${line}`).split(" ");

        if(adata[1]=="S.N"){
            var sat_data = new Satdata({
                timestamp: Date.now(),
                temperature: adata[7],      
                humidity: adata[14],
                pressure: adata[22],
                altitude: adata[29],
                gas: adata[36], 
                pollution: adata[38],
            });

            sat_data.save()
                .then( (results) => {
                    console.log('Data saved to DB.');
                })
                .catch( (error) => {
                    console.log(`Error while saving to DB: ${error}`);
                });
        }
    }  
    catch(error) {
        console.log(`oror on Reading line data: ${error}`);
    }  
});
port.write('ROBOT POWER ON\n');

