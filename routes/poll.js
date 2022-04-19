const express = require('express');
const router = express.Router();
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1388974",
    key: "0df0be368fdf5baf4cfb",
    secret: "6ea7fc988359cde80b3b",
    cluster: "ap2",
    useTLS: true
});

router.get('/', (req, res) => {
    res.send('POLL');
});

router.post('/', (req, res) => {
    pusher.trigger("poll", "vote", {
        points: 1,
        os: req.body.os
    });
    return res.json({ success: true, message: 'Thank you for voting' });

});


module.exports = router;