import React from 'react'
import ReactStars from "react-rating-stars-component"
import {Card } from 'react-bootstrap'

function MovieCard({elm}) {
    return (
        <div >
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={elm.image} />
  <Card.Body>
    <Card.Title style={{color:"black"}}>{elm.title}</Card.Title>
    <Card.Text style={{color:"red"}}>
      {elm.description}
    </Card.Text>
    <ReactStars
    count={5}
    edit={false}
    size={24}
    value={elm.rating}
    activeColor="#ffd700"
  />
    
    
  </Card.Body>
</Card>
        </div>
    )
}

export default MovieCard
