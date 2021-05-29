import './App.css';
import MovieList from './component/MovieList';
import  {useState} from 'react'
import AddMovie from './component/AddMovie';
import SearchRate from './component/searchF';
import SearchF from './component/searchF';
function App() {
  const [film, setfilm] = useState([
    {
      title :"blue miracle",
      description : "comedy",
      image :"https://occ-0-4609-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfoUXTwfWBM3Oains0swxhqyMPOVqvD5jQmr_9yRay81mCU4136E6mxKNq7J6ZGqQnJIaPby1zPreKfLZwOGdkxEANrJaXh-JHjobgQpv9Co5pm-bhN2nxJ5Vlsj.jpg?r=aa0",
      rating : 4,


    },

    {
      title :"the last dance" ,
      description : "action",
      image :"https://occ-0-4609-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABbX23o4ygXMUAwqIwciy6JjrPSb_aNjseZaSUAtAz7flQw5NqkEXw30WXKcbTQe-ppbdZ73pZ2mOJrCHIAE2k9M9mlbyiKOStljpYPL-6GnMQPyfwTiwwpi5x41f.jpg?r=b56",
      rating :5,


    },

    {
      title :"L'essor de l'Empire ottoman",
      description : "religion",
      image :"https://occ-0-4609-784.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABVQRafQOuekIEIscfjsev9rKvLs-5FTyyigIKSQEDbL0pZQ8ME1Pt-YHfgA2xzEw1Idp5KsPxOCtsY11fJqMEgHsC7mQ-BIT9Oy1E0aUTt28jkR9agxDPsM0ibxg.jpg?r=e1a",
      rating :3,


    },  
  ])


const add=(newMovie)=>{
  setfilm(film=>([...film,newMovie]))
}




  return (
    <div className="App">
      <header className="App-header">
        <MovieList film={film} />
        <AddMovie add={add}/>
      </header>
    </div>
  );
}

export default App;
