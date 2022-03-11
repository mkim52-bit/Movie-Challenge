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
  

  const getMovie = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=${api_key}`
      const response = await axios.get(url);
      
      setMovies(response.data.Search)
      return response

  }


  const updateSearch = mv => {
    setTitle(mv)
    setDisplay(false)
  }


  useEffect(() =>{
    
    getMovie(title)
    getDetail(title)
  },[title])

  
 const getDetail = async (title) => {
  const url = `https://www.omdbapi.com/?t=${title}&apikey=690ede78`
  const response = await axios.get(url);
  setDesc(response.data.Plot)
  SetPoster(response.data.Poster)


 }

  console.log(title)
  
  
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
        {title}
    <img src={poster} alt="movie" />
 {desc}
 

</div>

</div>



  )
  
  }







    {/*
  <div>
  <SearchBar title={title} setTitle={setTitle} movies = {movies} update={updateSearch}/>
</div>
{ 
<div>
<MovieArray movies = {movies}/>


  
</div>
}
*/}

  
  





export default App;

