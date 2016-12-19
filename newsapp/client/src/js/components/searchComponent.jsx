import React from 'react';
import NavComponent from './navComponent';

export default class SearchComponent extends React.Component{
constructor(){
super();

this.searchItem=this.searchItem.bind(this);
}

searchItem(){
	
	var newsId=document.getElementById("searchId").value;
	this.props.mysearch(newsId);
}
render(){
	return(
	      <div className="container col-12"> 
	      
			<div className="input-group" margin="3px" >
					
		<input type="text" className="form-control input-lg" placeholder="Search this site..." id="searchId" width="50%" height="20%" />
		              <span className="input-group-btn">
					<button type="submit" onClick={this.searchItem.bind(this)} className="btn btn-success btn-lg">search <span className="glyphicon glyphicon-search"></span></button></span>
									
		</div>
		</div>
		
		)
}
}
