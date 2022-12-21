import React from 'react';
import { Card } from 'react-bootstrap';

function DisplayOfArt({art}){
   return(
    <>
        <Card.Group>
            <Card> 
                <Card.Img alt={art.name} src={art.imgPath}/>
                <Card.Footer><small className='text-muted'>{art.name}</small></Card.Footer>
                <Card.Footer><small className='text-muted'>{art.cost}</small></Card.Footer>
            </Card>
        </Card.Group>
    </>
   );
}

export default DisplayOfArt;