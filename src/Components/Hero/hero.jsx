import React from "react";
import arrow_icon from '../Assets/arrow.png';
import hand_icon from '../Assets/hand_icon.png';
import hero_image from '../Assets/hero_image.png';
import './hero.css';
const Hero = ()  =>
{
                  return(
                                    <div className="hero">
                                       <div className="hero-left">
                                                      <h2>New ARRIVALS ONLY</h2>
                                             <div>
                                                      <div className="hero-hand-icon">
                                                                        <p> New</p>
                                                                        <img src={hand_icon} alt =""/>
                                                      </div>
                                                      <p> Collections </p>
                                                      <p> For everyone </p>
                                                      </div>
                                                      <div className="hero-latest-btn">
                                                                        
                                                                        <div> Latest collection</div>
                                                                        <img src={arrow_icon} alt=""/>
                                                                                          


                                                                                          
                                                                                          </div>         
                                       </div>  
                                       <div className="hero-right">
                                          <img  src={hero_image} alt =""/>
                                                      </div>           
                                    </div>

                  )
}
export default Hero