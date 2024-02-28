var express = require('express');
var router = express.Router();
const db = require('../public/javascripts/query');

/* GET home page. */
router.get('/loginusers',db.getLoginusers);
router.post('/create-password',db.updatePassword);
router.post('/create-new',db.createNew);
router.get('/get-contactlist',db.getContacts);
router.get('/get-messages',db.getMessagesByid);
router.post('/messages',db.createNewmessage);
router.post('/create-contact',db.createContact);
router.post('/delete-contact',db.deleteContact);

module.exports = router;
