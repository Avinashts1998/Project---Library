const router = require('express').Router()
const bloodController = require("../controllers/bloodBankController")

//sconst router = express.Router



router
    .route('/create-blood-data')
    .post(bloodController.createBloodGroupData)

router.route('/get-all-blood-groups')
      .post(bloodController.getBloodGroups)

router.route('/get-blood-bank')
      .get(bloodController.getBloodBankData)
    
router.route('/get-grouped-data')
      .get(bloodController.getGroupedData)

module.exports = router