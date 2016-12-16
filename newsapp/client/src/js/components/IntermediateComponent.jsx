import React from 'react';
import JumboComponent from './JumboComponent';


export default class IntermediateComponent extends React.Component{
constructor()
  {
    super();


  }


  render()
   {
             var newscollection= this.props.newsRef.map(function(articles){

                 return(
                 <JumboComponent data={articles}/>
                  
)

             })
      return(
          <div>
              {newscollection}
          </div>
          )
  }
}
