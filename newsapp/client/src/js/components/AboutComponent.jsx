
var React = require('react');
export default class AboutComponent extends  React.Component{

render()
{
 return(
   <div className="container">
       <div className="row">
           <div className="col-md-12">
               <div className="jumbotron">
                   <h2>
                       About Us
                   </h2>
                   <p className="text-indent-6">
                    News is a mobile app and news aggregator bundled with Apple's iOS 9 that replaced Newsstand. Users can read news articles with it, based on publishers, websites and topics they select, such as The New York Times, technology or politics. The app was announced at Apple's WWDC 2015. It was released alongside iOS 9 on September 16, 2015, for the iPhone, iPod Touch and iPad. At launch, the application was only available to users in the United States, but the app has since become available to users in Australia and the United Kingdom as well with the release of iOS 9.1 on October 21, 2015.[2] During the keynote address at WWDC 2016, it was revealed that with the forthcoming iOS 10 update the News app will undergo new icon and app redesigns along with an improved For You section organized by topics. Further, there will be support for subscriptions for certain news sources and publishers as well as an opt-in system for breaking news notifications and email on top news stories.

The app works by pulling in news stories from the web through syndication feeds (Atom and RSS) or from news publishing partners through the JSON descriptive Apple News Format. Any news publisher can submit their content for inclusion in Apple News, any a user can add any feed through the Safari web browser. Stories will be displayed in the app as-in a web browser.

News is fetched from publisher’s websites through the AppleNewsBot. The bot fetches feeds, as well as web pages and images for the Apple News service. It has received criticism for being poorly behaved and not being fault tolerant; resulting in high loads on websites.

The Apple News version distributed with iOS 9 made it hard to differentiate traffic originating  from within the app from traffic originating from other apps. Apple News version 2, introduced in iOS 10, began identifying itself using its own User-Agent string, making it possible to measure the reach of Apple News using web analytics solutions. Traffic analytics was previously only available to paying publisher partners through iAds.
                   </p>
                   <p>
                       <center><a className="btn btn-primary btn-large" target="_blank" href="https://en.wikipedia.org/wiki/News_(application)">Know more</a>
                 </center>  </p>
               </div>
           </div>
       </div>
   </div>
 );
}
}