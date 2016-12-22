var should = require("chai").should(),
assert = require ("chai").assert,
supertest = require("supertest"),
app = require("../bin/www");

var request=require('supertest');
var server = request.agent("http://localhost:8080");
var url=supertest("http://localhost:8080");

var user=require("../routes/users");
var news=require("../routes/news");


describe("Testing the first route", function(err){
 it("should handle the request", function(done){
   var body = {
        "username": "umar",
        "password": "umar"
    };
   server
       .post("/users/insert")
       .send(body)
       .expect(200)
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         assert.equal("Data inserted",res.text, "res.text is not matching with Data inserted");
         //res.text.should.be.equal("Hello!");
           done();
       });
 });
});

describe("Testing the second route", function(err){

 it("should handle the request", function(done){
   var body = {
        "username": "umar",
        "password": "umar"
    };
   server
       .post("/users/login")
       .send(body)
       .expect(200)
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
         //res.text.should.be.equal("Hello!");
           done();
       });
 });
});

describe("Testing the third route", function(err){
  it("should handle the request", function(done){
   var body = {
        "username": "umar",
        "password": "umar"
    };
   server
       .post("/users/login")
       .send(body)
       .expect(200)
       .end(function(err,res){
         if (err) {
                        throw err;
                }
         assert.equal("welcome to login",res.text, "res.text is not matching with welcome to login");
         //res.text.should.be.equal("Hello!");
           done();
       });
 });

  it("should handle and send the JSON", function(done){

   var body= {
"author": "Connie Loizos",
"title": "Greylock just hired Josh McFarland, who sold his Greylock-backed company to Twitter",
"description": "James Slavet says he has been trying to recruit entrepreneur Josh McFarland for eight years. That's just two years after Slavet joined the early-stage venture..",
"url": "http://social.techcrunch.com/2016/12/20/greylock-just-hired-josh-mcfarland-who-sold-his-greylock-backed-company-to-twitter/",
"urlToImage": "https://tctechcrunch2011.files.wordpress.com/2016/12/dsc05183.jpg?w=764&amp;h=400&amp;crop=1",
"publishedAt": "2016-12-20T21:07:18Z"
}
    server
        .post("/news/insert")
        .expect(200)
        .end(function(err,res){
          if (err) {
				        throw err;
			    }
          assert.equal("News inserted",res.text, "res.text is not matching with News inserted");
          //res.text.should.be.equal("Hello!");
            done();
        });
  });
   it("should handle and send the JSON data", function(done){
   server
       .delete("/news/del")
       .send({"title": "Greylock just hired Josh McFarland, who sold his Greylock-backed company to Twitter"})
      .expect(200)
       .end(function(err,res){
          if (err) {
               throw err;
         }
          assert.equal("news deleted",res.text, "res.text is not matching with News deleted");
         done();
       });

 });
   it("should handle and send the JSON data", function(done){
   server
       .put("/news/update")
       .send({"title": "Greylock just hired Josh McFarland, who sold his Greylock-backed company to Twitter","comments":"Comments to update"})
      .expect(200)
       .end(function(err,res){
          if (err) {
               throw err;
         }
          assert.equal("News updated",res.text, "res.text is not matching with News updated");
            done();
       });

 });
});


