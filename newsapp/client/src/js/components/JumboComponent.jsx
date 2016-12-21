import React from 'react';

export default class JumboComponent extends React.Component{
constructor()
  {
    super();

    this.saveItem=this.saveItem.bind(this);

  }
  saveItem(){

     $.ajax({
     url:  "http://localhost:8090/news/insert",
     type: "POST",
     data:this.props.data,
     
     success : function(msg){
     /*msg represents JSON data of news headlines sent back by external API*/
    alert("News saved")
    console.log("Inserted data")
     }.bind(this),
     error: function(err){
     console.log(err)
     }.bind(this)
 });
}
  


  render()
   {
      return(
                 
                <div className="container">
                 <section className="jumbotron" style={{"margin-top":"10%"}}>
 <div className="row">
 <div className="col-sm-12">
 <a href={this.props.data.url} target="_blank"><h2><strong> {this.props.data.title}</strong>-{this.props.data.author}</h2></a>
 </div>
<div className='col-sm-6'>
     <center>  <img src={this.props.data.urlToImage}  width="100%" height="50%" /></center>
     </div>
     <div className='col-sm-6'>
     <div className="well">
       <left><br></br>

         <p><em>{this.props.data.description}</em></p>
       <h4> <span className="glyphicon glyphicon-time"></span> {this.props.data.publishedAt}</h4>
         </left>
         </div>
          <center><button type="button" className="btn btn-primary btn-lg" id="alertMe" onClick={this.saveItem.bind(this)}>save <span className="glyphicon glyphicon-save-file"></span></button></center>
                  
         </div>
         </div>
       </section>
 </div>
          )
  }
}