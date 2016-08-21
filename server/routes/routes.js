var express = require('express'),
router = express.Router(),
//Parse information from POST
bodyParser = require('body-parser');
//Manipulate POST
methodOverride = require('method-override');

var strainsController = require ('../controllers/strainsController');

router.route('/strains')

	//GET all strain reccomendations
	.get(strainsController)

	// POST a new strain reccomendation
	.post(strainsController.createStrain);

router.route('/strains/:id')

	// POST a new strain reccomendation
	.get(strainsController.getStrain)

	// PATCH update an existing strain reccomendation
	.patch(strainsController.updateStrain)

	// DELETE remove a specific strain from db
	.delete(strainsController.removeStrain);

module.exports = router;

