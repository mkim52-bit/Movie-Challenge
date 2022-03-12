import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MovieArray from './components/MovieArray';
import SearchBar from './components/SearchBar';
import Autosuggest from 'react-autosuggest/dist/Autosuggest';
function App() {
  const api_key = '690ede78';
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [suggest, setSuggest] = useState(false)
  const [desc, setDesc] = useState('')
  const [poster, SetPoster] = useState('')
  const [display, setDisplay] = useState(false)
  const [name, setName] = useState('')
  

  const getMovie = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&page=1&apikey=${api_key}`
      const response = await axios.get(url);
      
      setMovies(response.data.Search)
      return response

  }

  const updateEnter = event => {
            setTitle(event.target.value)
            updateSearch(title)


  }


  const updateSearch = mv => {
    
    setTitle(mv)
    setName(mv)
    setSuggest(false)
    getDetail(mv)
    setDisplay(true)
  }


  useEffect(() =>{
    
    getMovie(title)
    
    
  },[title])



  
  const getDetail = async (title) => {
  const url = `https://www.omdbapi.com/?t=${title}&page=1&apikey=690ede78`
  const response = await axios.get(url);
  setDesc(response.data.Plot)
  SetPoster(response.data.Poster)


 }

  console.log(title)

  
  return (
    <div className= "whole"> 
  
  <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand">Navbar</a>
    <form className="d-flex">
        <input
        id="auto"
        onClick={() => setSuggest(!suggest)}
        placeholder="Type to search"
        value={title}
        onChange={event => setTitle(event.target.value)}
        onKeyPress={event =>{
          console.log(event)
          if(event.key === 'Enter'){
            console.log("inEnter")
            updateEnter(event)
          }}}/>
        
        <button  className="btn btn-outline-success" onClick={event => {
          setTitle("")}} type="clear">Clear</button>
          <button  className="btn btn-outline-success" onClick={event => {
          updateEnter(event)}} type="search">Search</button>       
  </form>
  
  </div>
  {movies && suggest && (
        <div className="autoContainer">
          {movies
            .map((value, i) => {
              return (
                <div
                  onClick={() => updateSearch(value.Title)}
                  onKeyUp={event => {
                    console.log("pressed")
                    setTitle(event.target.value)
                  } }
                 
                  tabIndex="0"
                  key={i}
                >
                  <div>{value.Title}</div>
                  
                </div>
              );
            })}
    
        </div>
      )}
      
</nav>

<div>
{display && (
    
       <div className='row row-cols-1 row-cols-md-3 g-4'>
          

          <div class="card mb-3" styles="max-width: 540px;">
  <div class="row g-0">
    <div class="col-md-4">
      <img src={poster} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{desc}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>













      </div>
        
      )}
      




</div>


        
</div>


  )
  
  }









  
  





export default App;

