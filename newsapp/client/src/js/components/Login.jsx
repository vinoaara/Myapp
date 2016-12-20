import React from 'react';

export default class Login extends React.Component{
constructor()
  {
    super();
    
}

render()
   {
      return(
        <div className="container" >
        <div className="col-sm-4"></div>
	   
        <div className="col-sm-4">
 <div className="well"><center>
         <table  className="table-borderless" id="login_table">

                    <th><center>login..!</center></th>
          <br/>
        <br/>
        <tr><td><center><img class='profile-img' src='https://img02.rl0.ru/a18d75aca3411c8504ceffe7b5575409/c980x980/cdn.onlinewebfonts.com/svg/download_311846.png' width="100px" height="100px"/></center></td></tr><br/>
            <tr>

                 <td><div className="form-group">


                      <input type="text" className="form-control" id="input_size" placeholder="Username" width= "300px"></input>
                      </div>
                 </td>

            </tr>
            <tr>

                 <td><div className="form-group">

                      <input type="password" className="form-control" id="input_size" placeholder="password" width="100"></input>
                     </div>
                  </td>
            </tr>
            <tr>
                <td>
                   <center><button className="btn btn-success ">Sign in</button></center>
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