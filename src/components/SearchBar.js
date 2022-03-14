import React from "react"
import { useState, useEffect, useRef } from 'react'
import axios from 'axios'
import './SearchBar.css'
//component for search bar and suggestions
const SearchBar = (props) => {
  const api_key = '690ede78';
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [suggest, setSuggest] = useState(false)
  const wrapperRef = useRef(null);


  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);                   
    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  });

  const handleClickOutside = event => {

    const { current: wrap } = wrapperRef;
    if (wrap && !wrap.contains(event.target)) {

      setSuggest(false);
    }
  };

  const getMovie = async (title) => {                                         //gets all suggested movies 
    const url = `http://www.omdbapi.com/?s=${title}&page=1&apikey=${api_key}`
    const response = await axios.get(url);
    if (response) {
      setMovies(response.data.Search)

    }




  }

  const updateEnter = event => {                                              //pressing enter searches for details
    setTitle(event.target.value)
    updateSearch(title)
    setSuggest(false)


  }


  const updateSearch = mv => {                                               //clicking one of the suggested searched for details
    setTitle(mv)

    setSuggest(false)
    getDetail(mv)
    props.setDisplayDetail(true)
  }


  useEffect(() => {
    getMovie(title)
  }, [title])


  const getDetail = async (title) => {                                            //gets details of the movie
    const url = `https://www.omdbapi.com/?t=${title}&page=1&apikey=690ede78`
    const response = await axios.get(url);
    if (response.data.Response === "True") {
      props.setName(response.data.Title)
      props.setDesc(response.data.Plot)
      props.setPoster(response.data.Poster)
      props.setDate(response.data.Released)
      props.setStars(response.data.Ratings[0].Value)
      props.setRuntime(response.data.Runtime)
      

    }
    else {

      props.setName("Not found")
      props.setDesc("Not found")
      props.setPoster("")
      props.setDate("")
      props.setStars("")
      props.setRuntime("")


    }



  }




  return (


    <div ref={wrapperRef} >
  

      <input
        type='text'
        className="search"
        onClick={() => setSuggest(true)}
        placeholder="Type here to search"
        value={title}
        onChange={event => {
          setSuggest(true)
          setTitle(event.target.value)
        }}
        onKeyPress={event => {

          if (event.key === 'Enter') {

            updateEnter(event)
          }
        }}
        
      />




                    



      {movies && suggest && (                                               //when movie array exists and suggestions are shown
        <div className="suggest">
          {movies
            .map((value, i) => {
              return (
                <div 
                  onClick={() => updateSearch(value.Title)}
                  onKeyUp={event => {
                    setTitle(event.target.value)
                  }}

                  tabIndex="0"
                  key={i}
                >
                  <div className="slot">{value.Title}</div>

                </div>
              );
            })}

        </div>
      )}









    </div>


  )


}

export default SearchBar