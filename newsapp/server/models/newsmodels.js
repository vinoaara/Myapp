var mongoose=require("mongoose");
var schema=mongoose.Schema;
var newsschema=new schema({
	author:String,
	title:String,
	description:String,
	url:String,
	urlToImage:String,
	publisedAt:String,
	
 })
 module.exports=mongoose.model('newsapp',newsschema);