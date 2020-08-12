import React from 'react';
import {Card} from  "react-bootstrap";
import StarRatingComponent from 'react-star-rating-component';



function MovieCard({el}) {
    return (
        <div className="movie">
        
       <Card style={{ width: '18rem' }}>
       <Card.Body>
        <Card.Img 
       variant="top" src={el.image} width="300px" height="200px"/>
        
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>{el.year}</Card.Text>
        <StarRatingComponent value={el.rating} />
        </Card.Body>
        </Card>
        </div>
    )
}
export default MovieCard