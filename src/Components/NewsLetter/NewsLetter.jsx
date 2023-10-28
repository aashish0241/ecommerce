import React from "react";
import './NewsLetter.css';
const NewsLetter= ()=>
{
                  return (
                                    <div className="newsletter">
                                                      <h1>Get Exclusive Offers On your Email</h1>
                                                      <p>Subscribe To our Newsletter and stay updated</p>
                                                      <div>
                                                                        <input type="email" placeholder="Enter your Email" required/>
                                                                        <button>Subscribe</button>
                                                      </div>

                                    </div>
                  )
}
export default NewsLetter