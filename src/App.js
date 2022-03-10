import React, {useState, useEffect} from 'react'
import axios from 'axios';
import MovieArray from './components/MovieArray';
import SearchBar from './components/SearchBar';
function App() {
  const api_key = '690ede78';
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  

  const getMovie = async (title) => {
    const url = `http://www.omdbapi.com/?s=${title}&apikey=${api_key}`
      const response = await axios.get(url);
      console.log(response.data)
      setMovies(response.data.Search)
      return response

  }




// const searchMovie = async (searchValue) => {
   //const url = `http://www.omdbapi.com/?s=${title}&apikey=${api_key}`;

//   const response = await fetch(url);
//   const responseJson = await response.json();



//   if (responseJson.Search) {
//     setMovies(responseJson.Search);
   
//   }
// };

  // useEffect(()=>{           //call searchMovie everyime title arr is changed
  //   if(title.length !==0){

  //     searchMovie(title)

  //   }
    
  // },[title])

  useEffect(() =>{
    
    getMovie(title)



  },[title])


  
  
  
  return (<div className='container'>
  <div>
  <SearchBar title={title} setTitle={setTitle} />
</div>

<div>
<MovieArray movies = {movies}/>


  
</div>
</div>



  )
  
  }
  
  





export default App;

