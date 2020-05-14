import React, { Component } from 'react';
import ReactPlayer from "react-player"
import '../../app.css'

class HomeComponent extends React.Component {

  render() {
    return (

<>
<div class="video-background">
    <div class="video-foreground">
      <iframe src="https://www.youtube.com/embed/XAVmE32l0GA?controls=0&showinfo=0&rel=0&autoplay=1&loop=1" frameborder="0" allowfullscreen></iframe>
    </div>
  </div>

<div id="vidtop-content">
<div class="vid-info p-5">
<h1 className="text-nowrap mt-4 pb-5">Midene Art Studio</h1>
	  <h2 className="text-nowrap mt-4">Candle & Inscense Houses</h2>
    <h2 className="text-nowrap mt-4">Garden Ceramic</h2>
    <h2 className="text-nowrap mt-4">Art Decor Ceramic</h2>
   

	  <p>“Midene”’s ceramic is a truly unique piece of art, awaiting to become your charming individual collectable, a valuable delightful gift, or an elegant household, garden decoration.</p>
	 <a href="https://midene.com/catalog/category/view/s/candlehouses/id/3/">Shop now [midene.com]</a>
  </div>
</div>
</>
     
    )
  }

}

export default HomeComponent;
