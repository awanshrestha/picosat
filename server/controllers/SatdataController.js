const Satdata = require('../models/Satdata');

// For api tests
exports.test = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.json({'test': 'okay'});
}

// Return latest entry from db: all datas
exports.getAllData = async (req, res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Get the latest data entry
        const data = await Satdata.find({}).sort({_id:-1}).limit(1);

        if ( data.length == 0){
            console.log('Data not found.');
        }
        res.status(200).json(data[0]);
    }
    catch(err){
        res.status(500).json({ message: 'Internal Server Error', err });
    }
}

// Data of last 24 hours
exports.get24hourData = async (req, res) => {
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        // Time stamp of: time 24 hours ago
        let time = Date.now() - (24*60*60*1000);

        const data = await Satdata.find({timestamp: {$gt: time}})

        if ( data.length == 0){
            console.log('Data not found.');
        }
            
        let TempArr = data.map((singledata) => singledata.temperature);
        let minTemp = Array.min(TempArr);
        let maxTemp = Array.max(TempArr);

        let HumArr = data.map((singledata) => singledata.humidity);
        let minHum = Array.min(HumArr);
        let maxHum = Array.max(HumArr);

        let PressArr = data.map((singledata) => singledata.pressure);
        let minPres = Array.min(PressArr);
        let maxPres = Array.max(PressArr);

        let GasArr = data.map((singledata) => singledata.gas);
        let minGas = Array.min(GasArr);
        let maxGas = Array.max(GasArr);

        let PollutionArr = data.map((singledata) => singledata.pollution);
        let minPollution = Array.min(PollutionArr);
        let maxPollution = Array.max(PollutionArr);

        res.status(200).json({
            'minTemperature':minTemp,
            'maxTemperature':maxTemp,
            'minHumidity':minHum,
            'maxHumidity':maxHum,
            'minPressure':minPres,
            'maxPressure':maxPres,
            'minGas':minGas,
            'maxGas':maxGas,
            'minPollution':minPollution,
            'maxPollution':maxPollution,
        });           
    }
    catch(err){
        res.status(500).json({ message: 'Internal Server Error', err });
    }
}

//get numbers of data
exports.getNdata = async (req, res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        let numberOfData = parseInt( req.params.numberd );

        // Get the numberOfData no. of data using Projection
        const data = await Satdata.find({},{
            key:'$_id',
            timestamp:1,
            temperature:1,
            humidity:1,
            pressure:1,
            altitude:1,
            gas:1,
            pollution:1,
        })  
        .sort({_id:-1})
        .limit(numberOfData)

        if ( data.length == 0){
            console.log('Data not found.');
        }

        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({ message: 'Internal Server Error', err });
    }
}

// History data
exports.getHistoryData = async (req, res)=>{
    try{
        res.setHeader('Access-Control-Allow-Origin', '*');
        let historytime = parseInt( req.params.times );
        // Convert upper number to minutes; Past X minutes since when we want the data.
        let timeinterval = Date.now() - ( historytime * 60 * 1000 );

        const data = await Satdata.find({timestamp: {$gt: timeinterval}});

        let TimeArr = data.map((singledata) => {
            let m = 'am';
            let date = new Date(singledata.timestamp);
            let hours = date.getHours();
            if(hours > 12){
                hours = hours%12;
                m = 'pm';
            }
            let minutes = date.getMinutes();
            let seconds = date.getSeconds();
            let resultt = hours+':'+minutes+':'+seconds +' '+ m;
            return resultt;
        });

        let TempArr = data.map((singledata) => {
            let resultt = singledata.temperature;
            return resultt;
        });

        let HumArr = data.map((singledata) => {
            let resultt = singledata.humidity;
            return resultt;
        });

        let PressArr = data.map((singledata) => {
            let resultt = singledata.pressure;
            return resultt;
        });

        let GasArr = data.map((singledata) => {
            let resultt = singledata.gas;
            return resultt;
        });

        let PollutionArr = data.map((singledata) => {
            let resultt = singledata.pollution;
            return resultt;
        });

        if ( data.length == 0){
            console.log('Data not found.');
        }

        res.status(200).json({
            'time': TimeArr,
            'temperaturehistory':TempArr,
            'humidityhistory':HumArr,
            'pressurehistory':PressArr,
            'gashistory': GasArr,
            'pollutionhistory': PollutionArr
        });                      
    }
    catch(err){
        res.status(500).json({ message: 'Internal Server Error', err });
    }
}

// Array Min Max Functions
Array.min = function( array ){
    return Math.min.apply( Math, array );
};
Array.max = function( array ){
    return Math.max.apply( Math, array );
};