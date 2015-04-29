var express = require('express');
var router = express.Router();

/*
 * GET statements.
 */
router.get('/statementlist', function(req, res) {
    var ircBot = req.ircBot;
    res.json(ircBot.getStatements());
});

module.exports = router;