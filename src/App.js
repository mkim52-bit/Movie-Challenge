import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MovieArray from './components/MovieArray';
import SearchBar from './components/SearchBar';
function App() {
  const api_key = '690ede78';
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [display, setDisplay] = useState(false)
  const [desc, setDesc] = useState('')
  const [poster, SetPoster] = useState('')
  const [complete, setComplete] = useState(false)
  const [name, setName] = useState('')
  

  const getMovie = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&page=1&apikey=${api_key}`
      const response = await axios.get(url);
      console.log("retrieved")
      setMovies(response.data.Search)
      return response

  }


  const updateSearch = mv => {
    
    setTitle(mv)
    setName(mv)
    setDisplay(false)
    getDetail(mv)
    
    setComplete(true)
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

  

  
  return (<div className='container'>
        <input
        id="auto"
        onClick={() => setDisplay(!display)}
        placeholder="Type to search"
        value={title}
        onChange={event => setTitle(event.target.value)}
       
      />
      {movies && display && (
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
                  <span>{value.Title}</span>
                  
                </div>
              );
            })}
    
        </div>
      )}
    <div>
      {complete && (
        <div>
      {name}
      <img src={poster} alt="movie" />
      {desc}
        
        </div>

      )}
          
 

</div>

</div>



  )
  
  }









  
  





export default App;

