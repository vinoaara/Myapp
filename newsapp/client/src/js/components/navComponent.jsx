import React from 'react';
var{Link}=require('react-router');

export default class NavComponent extends React.Component{
render(){
	return(
		<div>
		<nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">

       <ul className="nav navbar-nav">
      <li><Link to="/Home">Home</Link></li>
      <li><Link to="/favourites">view favourites</Link></li>
      <li><Link to="/about">Aboutus</Link></li>
      <li><Link to="/contact">Contactus</Link></li>
      <li><Link to="/signup">Signup</Link></li>
    
        <li><Link to="/login">Login</Link></li>
    
      
    </ul>
  </div>
</nav>
			</div>
		)
}
}
