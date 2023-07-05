const express = require('express')
const memberController = require('./../controllers/membersController')

const router = express.Router()


router
    .route('/create-member')
    .post(memberController.createMember)

router
    .route('/get-all-members')
    .get(memberController.getAllMambers)

module.exports = router;
