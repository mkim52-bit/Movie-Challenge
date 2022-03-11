import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MovieArray from './components/MovieArray';
import SearchBar from './components/SearchBar';
function App() {
  const api_key = '690ede78';
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [suggest, setSuggest] = useState([])
  

  const getMovie = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=${api_key}`
      const response = await axios.get(url);
      console.log(response.data)
      setMovies(response.data.Search)
      return response

  }



  useEffect(() =>{
    
    getMovie(title)
  },[title])


  let props = {


  }

  console.log(title)
  
  
  return (<div className='container'>
  <div>
  <SearchBar title={title} setTitle={setTitle} movies = {movies}/>
</div>
{/* 
<div>
<MovieArray movies = {movies}/>


  
</div>
*/}
</div>



  )
  
  }
  
  





export default App;

