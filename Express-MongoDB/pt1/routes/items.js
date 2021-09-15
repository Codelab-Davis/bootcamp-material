const router = require('express').Router();

router.route('/').get((req, res) => {
    console.log("Request received:", req);
    res.send('Hello World!');
}); 

module.exports = router; 