  var express = require('express');
  var router = express.Router();
  var newsmodels=require('../models/newsmodels');
  /* GET home page. */

  router.get('/', function(req, res, next) {
   res.render('index', { title: 'Welcome To News update' });
 });

  /*localhost:8090/news/insert*/
  router.post("/insert",isLoggedIn,function(req,res) {
   if(req.body) {
    var newsvar=new newsmodels();
    console.log("inside insert");
    newsvar.author=req.body.author;
    newsvar.title=req.body.title;
    newsvar.description=req.body.description;
    newsvar.url=req.body.url;
    newsvar.urlToImage=req.body.urlToImage;
    newsvar.publishedAt=req.body.publishedAt;
    newsvar.comments="No comments";


    newsvar.save(function(err){
      if(err) {
        res.send(err);
      } 
      else  {
        res.send("News inserted");
      }
    });
  }
});

  /*localhost:8090/news/del*/
  router.delete('/del',isLoggedIn, function(req, res) {
    if(req.body){
      
      request=req.body.title;
      
      newsmodels.remove({title:request},function(err1){
       if(err1)
       {
         res.send("Error in deleting");
       }
       else
       {
         res.send("news deleted");
       }
 

     });
    }
  });


  /*localhost:8090/news/update*/
  router.put('/update',isLoggedIn, function(req, res){

     // console.log(req.body);
     if(req.body)
     {
       var  request1=req.body.title;
       var request2=req.body.comments;
       newsmodels.update({title:request1},{$set:{comments:request2}},function(err){
        
        if(err) {
          res.send(err);
        }
        else  {
          res.send("News updated");
        }  
      });
     }
   });


  /*localhost:8090/news/viewall*/
  router.get('/viewall',isLoggedIn, function(req, res) {
   newsmodels.find({},function(err,viewnews){
     if(err) {
       res.send(err);
       console.log('error occured');
     }
     else {
      var newsobject={};
      viewnews.forEach(function(news,ind){
       newsobject[news._id]=news;
       
     });
      res.send(newsobject);
    }
  });
 });

  function isLoggedIn (req, res, next) {
   if(req.isAuthenticated()){
     return next()
     ;}
     else { 
       res.json('not authenticated');
     }
   };




   module.exports = router;