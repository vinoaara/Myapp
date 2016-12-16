import React from 'react';
var{Link}=require('react-router');

export default class NavComponent extends React.Component{
render(){
	return(
		<div>
		<nav className="navbar navbar-inverse navbar-fixed-top">
          <div className="container-fluid">

       <ul className="nav navbar-nav">
      <li className="active"><Link to="/Home">Home</Link></li>
      <li><Link to="/favourites">view favourites</Link></li>
      <li><Link to="/about">Aboutus</Link></li>
      <li><Link to="/contact">Contactus</Link></li>
      
    </ul>
  </div>
</nav>
			</div>
		)
}
}
