import React from 'react';

export default class JumboComponent extends React.Component{
constructor()
  {
    super();
}
render()
   {
      return(
       <section className="container">

                   <div className="jumbotron row">
                    <div className="col-sm-12">
                    <h2>{this.props.data.title}-{this.props.data.author}</h2>
                    </div>
                        <div className="col-sm-6">
                        <img src={this.props.data.urlToImage} alt="no image" height="20%" width="100%"/>

                      </div>
                    <div className="col-sm-6">
                    
                    <p>{this.props.data.description}<a href={this.props.data.url} target="_blank">read more...</a></p>

                  <button type="button" className="btn btn-primary btn-lg">update</button> &nbsp;&nbsp;&nbsp;&nbsp;
                   <button type="button" className="btn btn-info btn-lg">delete</button> 
                   </div>
                  </div>
                </section>
          )
  }
}