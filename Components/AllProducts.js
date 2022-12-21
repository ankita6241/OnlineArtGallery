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
        <div className=" p-3 mb-2 bg-white ">
         <div className="page-header">
            <h3 className="text-dark" style={{paddingTop:"2px", textAlign:"center"}}>All Products</h3>
            <hr></hr>
            <section className='garamond'>
                <div className='navy georgia ma0 grow'>
                    <h2 className='f2'>Search Product:</h2>
                </div>
                <div className='pa2'>
                    <input className="pa3 bb br3 grow b--none bg-lightest-blue ma3" type="search" placeholder='Search Product' onChange={handleChange}/>
                </div>
                {searchList()}
            </section>
         </div>
        </div>
        </>
    );
}
export default AllProducts;