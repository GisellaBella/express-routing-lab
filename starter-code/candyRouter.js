var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candy = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];
console.log (candy);


//index
router.get('/', function(req,res) {
res.json(candy);
res.send(candy); 
});

// Fill out the rest of the routes here


//create
router.post('/', function(req, res) {
req.body.id = candy.length + 1;
req.params.name=name;
res.json(req.body);
candy.push(req.body);
res.send(candy);
}); 




//delete
router.delete ('/:id', function(req, res) {
	var current = req.params.id;
	for (var i = 0 ; i<candy.length; i++) {
		if (current ==candy[i].id ) {
			candy.splice(i,1);
		}
	}
	res.json(candy);
	res.send(candy);
	});





//show
router.get('/id:name', function(req, res) {
var candyToShow = req.params.name;
	for (var i = 0 ; i<candy.length; i++){
		if (candyToShow.name == candy[i].id ) {
			return candy[i].id;
		}
}	
res.json(req.body.name);
res.send(candy); 
});


module.exports = router;



//update
router.put('/', function(req, res) {
var candyToAdd = req.params.name;

candy.push (req.body.name);
res.send(result);
});
*/

//Implement index, create, update, show, and destroy functionality

