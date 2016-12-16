var React = require('react');
import IterateComponent from './IterateComponent';

export default class FavouriteComponent extends  React.Component{
constructor(){
super();
this.state={newArray:[]};

this.viewFavourites=this.viewFavourites.bind(this);


}  getInitialState : function() {
    return {data: {comments:[]}};
},


viewFavourites() {
    $.ajax({
     url: "http://localhost:8090/news/viewall",
     type: "GET",
     dataType: 'JSON',
    
     success : function(msg){
      this.setState({newArray:msg});
      console.log(this.state.newsArray)
     }.bind(this),

     error: function(err){
     }.bind(this),
    
 });
  
}

componentDidMount(){
   this.viewFavourites();
}

render(){
 return(
 <div>
   <IterateComponent newsRef={this.state.newsArray}/>
   </div>

 );
}
} 