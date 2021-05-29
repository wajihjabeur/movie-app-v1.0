import React from 'react'
import {Navbar,Form,FormControl,Button} from 'react-bootstrap'
import ReactStars from "react-rating-stars-component"

function SearchF({searchText,searchRate}) {
    return (
        <div>
             <Navbar className="navColor" expand="lg">
  <Navbar href="#home" className="logo">Bo<h1 className="box">X </h1>Movies</Navbar>
  <Navbar.Toggle   />
  <Navbar.Collapse  className="search">
    <Form inline >
      <FormControl type="text" placeholder="Search" onChange={e=>searchText(e.target.value)}/>
      <Button className="butt">Search</Button>
      <div className="star2">
         <ReactStars 
              count={5}
              size={24}
              // value={elm.rating}
              activeColor="#ffd700"
              onChange={(newRating)=>searchRate(newRating)}
            /></div>
    
  
        
    </Form>
  </Navbar.Collapse>
</Navbar>
        </div>
    )
}

export default SearchF
