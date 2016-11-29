var express = require('express');
var bodyParser = require('body-parser');
router = express.Router();

var candy = [{"id":1,"name":"Chewing Gum","color":"Red"},{"id":2,"name":"Pez","color":"Green"},{"id":3,"name":"Marshmallow","color":"Pink"},{"id":4,"name":"Candy Stick","color":"Blue"}];
console.log (candy);

//index,show, create, update, and destroy

//index
router.get('/', function(req,res) {
res.json(candy);
res.send(candy); 
});

//show (i could not figure this one out.)
router.get('/id:', function(req, res) {
var candyToShow = req.params.id;
	for (var i = 0 ; i<candy.length; i++) {
	 if ( candyToShow == candy[i].id){
	return candy[i].id;
	}		
}	
res.json(candy);
res.send(candy); 
});


//create
router.post('/', function(req, res) {
req.body.id = candy.length + 1;
var name=req.body.var1;
var color=req.body.var2;
res.json(req.body);
candy.push(req.body);
res.send(candy);
}); 


//update
router.put('/:id', function(req, res) {
var candyToUpdate = req.params.id;
var name = req.body.var1;
var color= req.body.var2;
res.json(req.body);
res.send(candyToUpdate);
});


//delete
router.delete ('/:id', function(req, res) {
var toDelete = req.params.id;
for (var i = 0 ; i<candy.length; i++) {
	if (toDelete ==candy[i].id ) {
		candy.splice(i,1);
		}
	}
	res.json(candy);
	res.send(candy);
	});







module.exports = router;



