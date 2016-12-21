var express = require('express');
var router = express.Router();
var loginmodels=require('../models/loginmodels');
var passport=require('passport');
var LocalStrategy =require('passport-local').Strategy;
var connectflash=require('connect-flash');

	/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

//passport Authenticate Requests


router.post('/login',
passport.authenticate('local', { failureRedirect: '/login' }),
function(req, res) {
  res.send('welcome to login');
});

/*localhost:8090/users/insert*/

router.post("/insert",function(req,res) {
  if(req.body) {
  var uservar=new loginmodels();
    //console.log(uservar);
  uservar.username=req.body.username;
  uservar.password=req.body.password;
  uservar.save(function(err){
  if(err) {
    res.send(err);
  } 
  else  {
  res.send("Data inserted");
  }
    });
  }
  });

/*localhost:8090/users/del*/
router.delete('/del', function(req, res) {
	if(req.body){
		
	    name=req.body.username;
		
   loginmodels.remove({username:name},function(err1){
     if(err1)
     {
       res.send("Error in deleting");
     }
     else
     {
       res.send("Data deleted");
     }


   });
}
});

 







module.exports = router;
