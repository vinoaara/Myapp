import React from 'react';
var{Link}=require('react-router');

export default class NavComponent extends React.Component{
render(){
	return(
		<div>
		<nav className="navbar navbar-inverse navbar-fixed-top">
      
          <button type="button" className="navbar-toggle" data-target=".navbar-responsive-collapse" data-toggle="collapse">
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
           
          </button>
          <div className="container-fluid">
          <div className="col-sm-1"></div>
          <div className="col-sm-10">
       <ul className="nav navbar-nav">
      <li><Link to="/Home"> <span className="glyphicon glyphicon-home"></span> Home</Link></li>
      <li><Link to="/favourites"><span className="glyphicon glyphicon-heart"></span> favourites</Link></li>
      <li><Link to="/about">AboutUs</Link></li>
      <li><Link to="/contact">ContactUs</Link></li>
       </ul>
        <ul className="nav navbar-nav pull-right">
      <li><Link to="/signup"></Link></li>
    
        <li><Link to="/login">Login <span className="glyphicon glyphicon-log-in"></span></Link></li>
       
    </ul>
    </div>
     <div className="col-sm-1"></div>
    

 </div>
</nav>
			</div>
		)
}
}
