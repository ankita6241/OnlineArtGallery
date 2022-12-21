import React from 'react';
import DisplayOfArt from './DisplayOfArt';

function SearchListOfArt({filteredArt}){
    const filtered = filteredArt.map(art => <DisplayOfArt key={art.id} art={art}/>);
    return(
        <div>
            {filtered}
        </div>
    );
}

export default SearchListOfArt;