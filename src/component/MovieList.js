import React from 'react'
import MovieCard from './MovieCard'
import SearchF from './searchF'
import {useState} from 'react'

function MovieList({film}) {


  const [text, setText] = useState("")
  const [rate, setRate] = useState("")
   const searchText=(text)=>{
     setText(text)
   }
   const searchRate=(rate)=>{
     setRate(rate)
   }
    return (
      
        <div className='container'>
          <SearchF searchText={searchText} searchRate={searchRate}/>
          {film.filter(el=>(el.title.toLowerCase().includes(text.toLowerCase()) && parseInt(el.rating)>=rate)).map(el=><MovieCard elm={el} />)}  
        </div>
    )
}

export default MovieList
