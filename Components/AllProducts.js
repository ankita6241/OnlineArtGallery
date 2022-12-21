import React, { useState } from 'react';
import ScrollListOfArt from './ScrollListOfArt';
import SearchListOfArt from './SearchListOfArt';
import ArtProductsDetails from '../Data/ArtProductsDetails';
function AllProducts({ArtProductsDetails}) {
   const [searchField,setSearchField]=useState("");
   const filteredArt= ArtProductsDetails.filter(
    art=>{
        return(
            art.name.toLowerCase().includes(searchField.toLowerCase()) 
        );
    }
   );
   const handleChange =e=>{
    setSearchField(e.target.value);
   };
   function searchList(){
    return(
        <ScrollListOfArt>
            <SearchListOfArt filteredArt={filteredArt}/>
        </ScrollListOfArt>
    );
   }
    return(
        <>
        <div>
        <h1>sdjgbd lfiv</h1>
        </div>
        </>
    );
}
export default AllProducts;