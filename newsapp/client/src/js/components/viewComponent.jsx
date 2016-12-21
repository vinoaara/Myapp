import React from 'react';

export default class JumboComponent extends React.Component{
constructor()
  {
    super();
    this.state={comments:""};
    this.deleteItem=this.deleteItem.bind(this);
    this.updateClick=this.updateClick.bind(this);
    this.updateComments=this.updateComments.bind(this);

}
updateComments(cmnt){
console.log(cmnt)
  this.setState({comments: cmnt.target.value}); 
}
        
updateClick(){
 var myObj={
        title:this.props.data.title,
        comments:this.state.comments
        
        }
      $.ajax({
     url:"http://localhost:8090/news/update",
     type: "PUT",
     data:myObj,
      success : function(){ 
       this.props.onupdate(myObj.title, myObj.comments);
        window.location.reload();
     }.bind(this),
     error: function(err){
     console.log(err)
     }.bind(this)
 });
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

   var myid="#"+this.props.data._id;
   var myid2=this.props.data._id;
      return(
       <section className="container">
       

                   <div className="jumbotron row" style={{"margin-top":"10%"}}>
                    <div className="col-sm-12">
                    <a href={this.props.data.url} target="_blank"><h2><strong>{this.props.data.title}</strong>-{this.props.data.author}</h2></a>
                    </div>
                        <div className="col-sm-6">
                        <center><img src={this.props.data.urlToImage} alt="no image" height="50%" width="100%"/></center>

                      </div>
                    <div className="col-sm-6">
                    
                    <div className="well">
       <left><br></br>

         <p><em>{this.props.data.description}</em></p>
        <h4><span className="glyphicon glyphicon-time"></span> {this.props.data.publishedAt}</h4>
        <hr/>
        
        <h4><strong>comments</strong></h4> <p>{this.props.data.comments}</p>
       
         </left>
         </div>
        
                     
 <center><button type="button" className="btn btn-warning btn-lg" data-toggle="modal" data-target={myid}>Update <span className="glyphicon glyphicon-edit"></span></button>


 <div className="modal fade" id={myid2} role="dialog">
   <div className="modal-dialog">
   
     
     <div className="modal-content">
       <div className="modal-header">
         <button type="button" className="close" data-dismiss="modal">&times;</button>
         <h4 className="modal-title">Comments</h4>
       </div>
       <div className="modal-body">
           <form className="form-horizontal">
             <div className="form-group">
                             <div className="col-lg-12">
                             <textarea class="form-control" id="comments" placeholder="post your comments..!" onChange={this.updateComments.bind(this)} cols="75" rows="6"></textarea>
                           
                           </div>
                         </div>
           </form>
       </div>
       <div className="modal-footer">
         <button className="btn btn-default" type="button" onClick={this.updateClick.bind(this)}>Save</button>
         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
       </div>
     </div>
     
   </div>
 </div>
                 &nbsp;&nbsp;&nbsp;&nbsp;
      
                   <button type="button" className="btn btn-danger btn-lg" onClick={this.deleteItem.bind(this)}>Delete <span className="glyphicon glyphicon-trash"></span></button>
                   </center>
                  </div>
                  </div>
                </section>
          )
  }
}