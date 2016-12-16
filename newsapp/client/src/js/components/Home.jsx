import React from 'react';
import ReactDOM from 'react-dom';
import SearchComponent from './searchComponent';
import IntermediateComponent from './IntermediateComponent';
import NavComponent from './navComponent';


export default class Home extends React.Component{
constructor(){
super();
this.state={newsArray:[]};

this.fetchNewsFromExternalAPI=this.fetchNewsFromExternalAPI.bind(this);


}

fetchNewsFromExternalAPI(msg) {
    $.ajax({
     url:  "https://newsapi.org/v1/articles?source="+msg+"&sortBy=top&apiKey=214ede0f03b643889b35f9745575e67a",
     type: "GET",
     dataType: 'JSON',
    
     success : function(msg){
     /*msg represents JSON data of news headlines sent back by external API*/
    
    this.setState({newsArray : msg.articles});
       

     }.bind(this),
     error: function(err){
     }.bind(this)
 });
}

render(){
	
return(
<div>
<SearchComponent mysearch={ this.fetchNewsFromExternalAPI.bind(this)} />
<IntermediateComponent newsRef={this.state.newsArray} />



</div>
)
}
}

