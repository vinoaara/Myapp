import React from 'react';
import NavComponent from './navComponent';

export default class SearchComponent extends React.Component{
constructor(){
super();
this.state={mysearch:""};
this.searchItem=this.searchItem.bind(this);
}
searchInput(x){
	this.setState({mysearch: x.target.value})
}

searchItem(){
	
		this.props.mysearch(this.state.mysearch);
}
render(){
	return(
	      <div className="container"> 
	      <div className="col-sm-3"> </div>
	      <div className="col-sm-6">
	   			<div className="input-group" padding-top= "100px">
					
		<input type="text" className="form-control input-lg" placeholder="Search this site..." onChange={this.searchInput.bind(this)} width="50%" height="20%" />
		                           <span className="input-group-btn">
					<button type="submit" onClick={this.searchItem.bind(this)} className="btn btn-success btn-lg">search <span className="glyphicon glyphicon-search"></span></button></span>
					
					</div>	
					<div className="col-sm-3"> </div>			
		</div>
		</div>
		
		)
}
}
