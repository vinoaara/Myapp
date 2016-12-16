import 'file?name=[name].[ext]!../index.html';

import React from 'react';
import ReactDOM from 'react-dom';
var {browserHistory,hashHistory , Route, Router, IndexRoute}
  = require('react-router');

import AboutComponent from './components/AboutComponent.jsx';
import Home from './components/Home.jsx';
import ContactComponent from './components/ContactComponent.jsx';
import NavComponent from './components/navComponent.jsx';
import FavouriteComponent from './components/FavouriteComponent.jsx';

class MainComponent extends React.Component{

render(){

return (
<div>
<NavComponent/>
  <br/><br/><br/><br/>
    {this.props.children}
</div>
)
}
}
ReactDOM.render(
<Router history={browserHistory}>
             <Route path="/" component={MainComponent} >
             <IndexRoute path="/Home" component={Home}/>
             <Route path="/Home" component={Home}/>
             <Route path="/about" component={AboutComponent}/>
             <Route path="/favourites" component={FavouriteComponent}/>
             <Route path="/contact" component={ContactComponent}/>
             </Route>

</Router>,document.getElementById('content'));