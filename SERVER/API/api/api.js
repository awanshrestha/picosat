const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/endata", {useNewUrlParser: true,useUnifiedTopology: true});

const dataSchema = new mongoose.Schema({
    timestamp: {type: Number, default: Date.now()},
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


//for api test
router.get("/test",(req,res)=>{
    res.json({"name": "awan"});
})

Array.min = function( array ){
    return Math.min.apply( Math, array );
};
Array.max = function( array ){
    return Math.max.apply( Math, array );
};


//return latest entry from db: all datas
router.get("/getalldata", (req,res)=>{
    Satdata.find({},function(err,data){
        if (err) {
            res.status(500).send(err);
          }
        else{
            res.status(200).json(data[0]);
        }
    })
    .sort({_id:-1})
    .limit(1)
});


//data of last 24 hours
router.get("/get24hourdata", (req,res)=>{
    let time = Date.now() - (24*60*60*1000);
    Satdata.find({timestamp: {$gt: time}},function(err,data){
        if (err) {
            res.status(500).send(err);
          }
        else{
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
                "minTemperature":minTemp,
                "maxTemperature":maxTemp,
                "minHumidity":minHum,
                "maxHumidity":maxHum,
                "minPressure":minPres,
                "maxPressure":maxPres,
                "minGas":minGas,
                "maxGas":maxGas,
                "minPollution":minPollution,
                "maxPollution":maxPollution,
            });

        }
    })
});

//get numbers of data
router.get("/getndata/:numberd", (req,res)=>{
    let numberOfData = parseInt( req.params.numberd );
    Satdata.find({},{
        key:"$_id",
        timestamp:1,
        temperature:1,
        humidity:1,
        pressure:1,
        altitude:1,
        gas:1,
        pollution:1,
    },function(err,data){
        if (err) {
            res.status(500).send(err);
          }
        else{
            res.status(200).json(data);
        }
    })
    .sort({_id:-1})
    .limit(numberOfData)
});


//history data
router.get("/gethistorydata/:times", (req,res)=>{
    let historytime = parseInt( req.params.times );
    let timeinterval = Date.now() - (historytime*60*1000);
    Satdata.find({timestamp: {$gt: timeinterval}},function(err,data){
        if (err) {
            res.status(500).send(err);
          }
        else{
            let TimeArr = data.map((singledata) => {
                let m = "am";
                let date = new Date(singledata.timestamp);
                let hours = date.getHours();
                if(hours > 12){
                    hours = hours%12;
                    m = "pm";
                }
                let minutes = date.getMinutes();
                let seconds = date.getSeconds();
                let resultt = hours+":"+minutes+":"+seconds +" "+ m;
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

            res.status(200).json({
                "time": TimeArr,
                "temperaturehistory":TempArr,
                "humidityhistory":HumArr,
                "pressurehistory":PressArr,
                "gashistory": GasArr,
                "pollutionhistory": PollutionArr
            });

        }
    })
});


module.exports = router;