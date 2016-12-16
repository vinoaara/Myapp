import React from 'react';
import ViewFavourite from './viewComponent';


export default class IterateComponent extends React.Component{
constructor()
  {
    super();


  }
  

  render()
   {
             var savedNews= this.props.newsRef.map(function(news){

                 return(
                 <ViewFavourite data={news}/>
                  
)

             })
      return(
          <div>
              {savedNews}
          </div>
          )
  }
}
