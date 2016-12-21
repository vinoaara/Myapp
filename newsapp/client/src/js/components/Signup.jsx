import React from 'react';
import {browserHistory} from 'react-router';

export default class Signup extends React.Component{
constructor()
  {
    super();
    
this.state={username:""};
    this.state={password:""};
    this.signup=this.signup.bind(this)
}
 user(x){
    this.setState({username: x.target.value})
  }
  pass(y){
    this.setState({password: y.target.value})
  }
signup(){
 
var userObj={
  username:this.state.username,
  password:this.state.password

}

   $.ajax({
   url: "http://localhost:8090/users/insert",
   type: "POST",
   data:userObj,
   success : function(msg)
   {
        alert("Registration successful");
          browserHistory.push('/home');
       }.bind(this),
   error: function(err){
     alert("error");
  }.bind(this)
 });



}


render(){
    return(

       <div className="container" >
      <div className="col-sm-4"></div>

      <div className="col-sm-4">
      <div className="well">
           <center>
        <table className="table-borderless" id="signup_table">
        <th><center><h1>Register..!</h1></center></th>
             <tr><td><center><img class='profile-img' src='http://cdn.onlinewebfonts.com/svg/download_102074.png' width="100px" height="100px"/></center></td></tr><br/>
            
                 <tr>
                <td>UserName</td>
                </tr>

                <tr>
                 <td><div className="form-group">

                      <input type="text" className="form-control" onChange={this.user.bind(this)}></input>
                      </div>
                 </td>
                 </tr>

                 <tr>
                 <td>Password</td>
                 </tr>


                 <tr>
                 <td><div className="form-group">

                      <input type="password" className="form-control" onChange={this.pass.bind(this)}></input>
                     </div>
                  </td>
                  </tr>

                 

                  <tr>
                  <td><center><button className="btn btn-success" onClick={this.signup.bind(this)}>Create an Account</button></center>
                  </td></tr>
  
 </table>
 </center>
   </div>
       </div>
        <div className="col-sm-4"></div>

       </div>
      

    );
  }
}