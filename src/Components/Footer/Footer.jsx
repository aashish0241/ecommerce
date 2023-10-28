import React from "react";
import instagram_icon from '../Assets/instagram_icon.png';
import footer_logo from '../Assets/logo_big.png';
import pinterest_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';
import './Footer.css';
const Footer =()=>{
                  return(
                                    <div className="footer">
                                                      <div className="footer-logo">
                                                                        <img src={footer_logo} alt=""/>
                                                                        <p>SHOPPING ONlINE</p>
                                                                       
                                                      </div>
                                                      
                                                      <ul className="footer-links">
                                                                        <li>Company</li>
                                                                        <li>Produtcts</li>
                                                                        <li>Offices</li>
                                                                        <li>About</li>
                                                                        <li>Contact</li>
                                                      </ul>
                                                      <div className="social-icon">
                                                                        <div className="footer-icons-container">
                                                                                          <img src={instagram_icon} alt= ''/>
                                                                                          <img src={pinterest_icon} alt= ''/>
                                                                                          <img src={whatsapp_icon} alt= ''/>

                                                                        </div>
                                                      </div>
                                                      <div className="footer-copyright">
                                                                        <hr/>
                                                                        <p>CopyRight @2023 -All right Reserved   ________    Design By: Aashish Timsina</p>
                                                                        
                                                      </div>
                                    </div>
                  )
}
export default Footer