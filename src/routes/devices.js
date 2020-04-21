const { Router } = require("express");
const router = Router();
const _ = require('underscore');

const devices = require("../sample.json");
//console.log(movies);

router.get('/', (req, res) => {
    res.json(devices);
});

router.post('/', (req, res) => {
    //console.log(req.body);
    const { instrument, digitalInput0, digitalInput1, AnalogInput1 } = req.body;
    if (instrument && digitalInput0 && digitalInput1 && AnalogInput1) {
        const id = devices.length + 1;
        const newDevice = {...req.body, id};
        //console.log(newMovie);
        devices.push(newDevice);
        res.json(devices);
    } else {
        res.json({error: 'There was an error.'});
    }
});

router.put('/:id', (req, res) => {
    const { id } = req.params;
    const { instrument, digitalInput0, digitalInput1, AnalogInput1 } = req.body;
    if (instrument && digitalInput0 && digitalInput1 && AnalogInput1) {
        _.each(divices, (device, i) => {
            if (device.id == id) {
                device.instrument = instrument;
                device.digitalInput0 = digitalInput0;
                device.digitalInput1 = digitalInput1;
                device.AnalogInput1 = AnalogInput1;
            }
        });
        res.json(devices);
    } else {
        res.json({error: 'There was an error.'});
    }
});

router.delete('/:id', (req, res) => {
    const { id } = req.params;
    //console.log(req.params);
    _.each(devices, (device, i) => {
        if (device.id == id) {
            devices.splice(i, 1);
        }
    });
    //res.send('deleted');
    res.send(devices);
});

module.exports = router;