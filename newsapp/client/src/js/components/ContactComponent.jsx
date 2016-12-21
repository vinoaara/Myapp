var React = require('react');
export default class ContactComponent extends  React.Component{

render()
{
 return(
   <div className="container">
       <div className="row">
           <div className="col-md-12">
               <div className="jumbotron">
                                     <p>
                      Thank you for your interest in contacting news. Before proceeding, some important disclaimers:

news has no central editorial board; contributions are made by a large number of volunteers at their own discretion. Edits are not the responsibility of the Wikimedia Foundation (the organisation that hosts the site) nor of its staff and edits will not generally be made in response to an email request.
Although news was founded by Jimmy Wales, he is not personally responsible for our content.
If you have questions about the concept of news rather than a specific problem, the About news page may help.
The links on the left should direct you to how to contact us or resolve problems. If you cannot find your issue listed there, please email us at info-en@wikimedia.org .
                   </p>
                    </div>
           </div>
       </div>
 </div>
 );
}
}