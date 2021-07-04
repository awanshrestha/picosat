//DATABASE SCHEMA
const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema(
    {
        timestamp: {
            type: Number,
            trim: true, 
            default: null
        },
        temperature: {
            type: Number,
            trim: true, 
            default: null
        },
        humidity: {
            type: Number,
            trim: true, 
            default: null
        },
        pressure: {
            type: Number,
            trim: true, 
            default: null
        },
        altitude: {
            type: Number,
            trim: true, 
            default: null
        },
        gas: {
            type: Number,
            trim: true, 
            default: null
        },
        pollution: {
            type: Number,
            trim: true, 
            default: null
        },
    },
    { versionKey: false }
);

const Satdata = mongoose.model('Satdata', dataSchema);

module.exports = Satdata;