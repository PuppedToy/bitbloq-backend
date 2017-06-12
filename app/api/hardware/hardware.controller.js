'use strict';

var HardwareFunctions = require('./hardware.functions.js'),
    HardwareDefault = require('./hardware.default.js');

/**
 * Create all hardware
 */
exports.createAllHardware = function(req, res) {
    var type = req.body.type;
    switch (type) {
        case 'all':
            HardwareDefault.createAllHardware(function(err) {
                if (err) {
                    console.log(err);
                    err.code = (err.code && String(err.code).match(/[1-5][0-5][0-9]/g)) ? parseInt(err.code) : 500;
                    res.status(err.code).send(err);
                } else {
                    res.sendStatus(200);
                }
            });
            break;
        case 'components':
            HardwareDefault.createComponents(function(err) {
                if (err) {
                    console.log(err);
                    err.code = (err.code && String(err.code).match(/[1-5][0-5][0-9]/g)) ? parseInt(err.code) : 500;
                    res.status(err.code).send(err);
                } else {
                    res.sendStatus(200);
                }
            });
            break;
        default:
            res.sendStatus(400);
    }
};

/**
 * Get all hardware
 */
exports.getAllHardware = function(req, res) {
    HardwareFunctions.getAllHardware(function(err, result) {
        if (err) {
            console.log(err);
            err.code = (err.code && String(err.code).match(/[1-5][0-5][0-9]/g)) ? parseInt(err.code) : 500;
            res.status(err.code).send(err);
        } else {
            res.status(200).json(result);
        }
    });
};