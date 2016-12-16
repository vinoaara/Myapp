import React from 'react';

export default class JumboComponent extends React.Component{
constructor()
  {
    super();
    this.deleteItem=this.deleteItem.bind(this);
}
deleteItem(){
       $.ajax({
     url:"http://localhost:8090/news/del",
     type: "DELETE",
     data:this.props.data,
      success : function(msg){
      this.props.delNews(this.props.data);
     }.bind(this),
     error: function(err){
     console.log(err)
     }.bind(this)
 });
}
render()
   {
      return(
       <section className="container">

                   <div className="jumbotron row">
                    <div className="col-sm-12">
                    <h2>{this.props.data.title}-{this.props.data.author}</h2>
                    </div>
                        <div className="col-sm-6">
                        <img src={this.props.data.urlToImage} alt="no image" height="20%" width="100%"/>

                      </div>
                    <div className="col-sm-6">
                    
                    <p>{this.props.data.description}<a href={this.props.data.url} target="_blank">read more...</a></p>

                  <button type="button" className="btn btn-primary btn-lg">update</button> &nbsp;&nbsp;&nbsp;&nbsp;
                   <button type="button" className="btn btn-info btn-lg" onClick={this.deleteItem.bind(this)}>delete</button> 
                   </div>
                  </div>
                </section>
          )
  }
}