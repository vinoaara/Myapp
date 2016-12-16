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
	
			<div className="navbar-form">
					
		<input type="text" className="form-control" placeholder="Search this site..." id="searchId"/>
		
					<button type="submit" onClick={this.searchItem.bind(this)} className="btn btn-default"><span className="glyphicon glyphicon-search"></span></button>
									
		</div>
		
		)
}
}
