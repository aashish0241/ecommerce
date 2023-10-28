import React from "react";
import './CSS/LoginSignup.css';
const LoginSignup =()=>
{
                  return(
                                    <div className="loginsignup">
                                                      <div className="loginsignup-container">
                                                                        <h1> Sign Up</h1>
                                                                        <div className="loginsignup-fields">
                                                                                          <input type="text" placeholder="Enter your name " requried />
                                                                                          <input type="email" placeholder="Enter Your  " requried />
                                                                                          <input type="password" placeholder="Enter Your password  " requried />
                                                                      </div>
                                                                      <button>Continue</button>
                                                                      <p className="loginsignup-login">
                                                                        Already have an account ? <span> login here </span>
                                                                      </p>
                                                                      <div className="loginsignup-agree">
                                                                        <input type="checkbox" name="" id=""/>
                                                                        <p>By continuing, I agree to the terms of use of priacy policy.</p>
                                                                      </div>

                                                      </div>


                                    </div>

                  )
}
export default LoginSignup