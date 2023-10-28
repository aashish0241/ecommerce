import React from "react";
import arrow_icon from '../Assets/arrow.png';
import './Breadcrum.css';
const Breadcrum =(props)=>
{
                  const{product}=props;
                  return(

                                    <div className="breadcrum">
                                                      Home<img src={arrow_icon} alt='net error'/>
                                                      Shop <img src={arrow_icon} alt="" />
                                                      {product.catgeory}
                                                      <img src={arrow_icon} alt="" />
                                                      {product.name}
                                    </div>
                  )
}
export default Breadcrum