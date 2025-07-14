const express = require('express')
const router = express.Router()
const { getHome, newContact, getContacts, getSingle, deleteSingle }= require('../controllers/contactController')

router.get('/', getHome);
router.get('/all-contact', getContacts);
router.get('/contact/:id', getSingle)
router.post('/create-contact', newContact)
router.delete('/delete-contact/:id', deleteSingle)

module.exports = router;