import React from "react";
import Hero from "../Components/Hero/hero";
import NewCollections from "../Components/NewCollection/NewCollection";
import NewsLetter from "../Components/NewsLetter/NewsLetter";
import Offers from "../Components/Offers/Offers";
import Popular from "../Components/Popular/Popular";


function Shop() {
   return (
      <div>
         <Hero />
         <Popular/>
         <Offers/>
         <NewCollections/>
         <NewsLetter/>
         


      </div>

   );
}
export default Shop