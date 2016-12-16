var React = require('react');
import ViewFavourite from './viewComponent';


export default class FavouriteComponent extends  React.Component{
constructor(){
super();
this.state={newArray:[]};

this.viewFavourites=this.viewFavourites.bind(this);

this.deleteNews=this.deleteNews.bind(this);


}  
viewFavourites() {
    $.ajax({
     url: "http://localhost:8090/news/viewall",
     type: "GET",
     dataType: 'JSON',
    
     success : function(msg){
     var arr=$.map(msg , function(el) { return el })
    
     this.setState({newArray :arr })
     
     }.bind(this),

     error: function(err){
     }.bind(this),
    
 });
  
}

deleteNews(content){
   var myData=this.state.newArray;
   var index=myData.findIndex(function(element){
   return element.title===content.title;
 });
  if(index!==-1){
   myData.splice(index,1);
   console.log(myData);
   this.setState({newArray:myData});
 } 

}

componentDidMount(){
   this.viewFavourites();
}

render(){
 
             var savedNews= this.state.newArray.map(function(news){

                return(
                <ViewFavourite data={news} delNews={this.deleteNews.bind(this)}/>
                  
)

            }.bind(this))
             
     return(
         <div>
       {savedNews}
         </div>
          );
  

  
 
}
} 