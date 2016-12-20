import React from 'react';

export default class Signup extends React.Component{
constructor()
  {
    super();
    
}

render(){
    return(

       <div className="container" >
      <div className="col-sm-4"></div>

      <div className="col-sm-4">
      <div className="well">
           <center>
        <table className="table-borderless" id="signup_table">
             <tr><td><center><img class='profile-img' src='http://cdn.onlinewebfonts.com/svg/download_102074.png' width="100px" height="100px"/></center></td></tr><br/>
            
                 <tr>
                <td>UserName</td>
                </tr>

                <tr>
                 <td><div className="form-group">

                      <input type="text" className="form-control"></input>
                      </div>
                 </td>
                 </tr>

                 <tr>
                 <td>Password</td>
                 </tr>


                 <tr>
                 <td><div className="form-group">

                      <input type="password" className="form-control"></input>
                     </div>
                  </td>
                  </tr>

                 

                  <tr>
                  <td><center><button className="btn btn-success">Create an Account</button></center>
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