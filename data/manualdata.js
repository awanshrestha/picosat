require('dotenv').config();

const Satdata = require('./models/Satdata');

// MANUAL DATA ENTRY
function logEvery5Seconds(i) {
    setTimeout(() => {
        let sat_data = new Satdata({
            timestamp: Date.now(),
            temperature: 11,      
            humidity: 44,
            pressure: 86850,
            altitude: 1268,
            gas: 32, 
            pollution: 5,
        });
        console.log(sat_data)
        sat_data.save()
            .then( (results) => {
                console.log('Data saved to DB.');
            })
            .catch( (error) => {
                console.log(`Error while saving to DB: ${error}`);
            });
        logEvery5Seconds(++i);
    }, 5000);
}

logEvery5Seconds(0);







