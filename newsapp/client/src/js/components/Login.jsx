import React from 'react';
import {browserHistory} from 'react-router';
export default class Login extends React.Component{
constructor()
  {
    super();
    this.state={username:""};
    this.state={password:""};
    this.authenticate=this.authenticate.bind(this);
    this.redirect=this.redirect.bind(this)
    

}
 user(x){
    this.setState({username: x.target.value})
  }
  pass(y){
    this.setState({password: y.target.value})
  }
authenticate(){
 
var userObj={
  username:this.state.username,
  password:this.state.password

}

   $.ajax({
   url: "http://localhost:8090/users/login",
   type: "POST",
   data:userObj,
   success : function(msg)
   {
   console.log("successfully logged to database");

     alert("succesfully loggedin");
     browserHistory.push('/home');
      
      
   }.bind(this),
   error: function(err){
     alert("check the username and password");
     browserHistory.push('/login');
  }.bind(this)
 });

<th><center><h1>Login..!</h1></center></th>

}
redirect(){
 browserHistory.push('/signup');
}

render()
   {
      return(
        <div className="container" >
        <div className="col-sm-4"></div>
	   
        <div className="col-sm-4">
 <div className="well"><center>
         <table  className="table-borderless" id="login_table">

                    
          <br/>
        <br/>
        <tr><td><center><img class='profile-img' src='https://img02.rl0.ru/a18d75aca3411c8504ceffe7b5575409/c980x980/cdn.onlinewebfonts.com/svg/download_311846.png' width="100px" height="100px"/></center></td></tr><br/>
            <tr>

                 <td><div className="form-group">


                      <input type="text" className="form-control" id="input_size"  onChange={this.user.bind(this)} placeholder="Username" width= "300px"></input>
                      </div>
                 </td>

            </tr>
            <tr>

                 <td><div className="form-group">

                      <input type="password" className="form-control" id="input_size" onChange={this.pass.bind(this)} placeholder="password" width="100"></input>
                     </div>
                  </td>
            </tr>
            <tr>
                <td>
                   <center><button className="btn btn-success" onClick={this.authenticate.bind(this)}>Sign in</button>
                  <button type="button" onClick={this.redirect.bind(this)} className="btn btn-link">Sign up</button>
                   </center>
                </td>

            </tr>
  
 </table></center>
   </div>
       </div>
       <div className="col-sm-2"></div>
       </div>
       
)
      }
      }