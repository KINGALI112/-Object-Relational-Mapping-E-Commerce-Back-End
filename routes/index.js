// required routes
const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);
// // when the user loads the local host 3001 this will be displayed to the user 
router.use((req, res) => {
    res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;