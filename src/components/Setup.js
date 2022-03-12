import React from "react"
import  { useState, useEffect, useRef } from 'react'
import axios from 'axios'


const Setup = (props) => {
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
  
    const getMovie = async (title) => {
      const url = `http://www.omdbapi.com/?s=${title}&page=1&apikey=${api_key}`
      const response = await axios.get(url);
      if(response){
        setMovies(response.data.Search)
  
      }
  
      
      
  
    }
  
    const updateEnter = event => {
      setTitle(event.target.value)
      updateSearch(title)
      setSuggest(false)
  
  
    }
  
  
    const updateSearch = mv => {
      setTitle(mv)
      
      setSuggest(false)
      getDetail(mv)
      props.setDisplayDetail(true)
    }
  
  
    useEffect(() => {
  
      getMovie(title)
  
  
    }, [title])
  
  
  
  
  
  
  
  
    const getDetail = async (title) => {
      const url = `https://www.omdbapi.com/?t=${title}&page=1&apikey=690ede78`
      const response = await axios.get(url);
      if(response.data.Response === "True"){
        props.setName(response.data.Title)
        props.setDesc(response.data.Plot)
        props.setPoster(response.data.Poster)
  
      }
      else{
        
        props.setName("Not found")
        props.setDesc("Not found")
        props.setPoster("")
  
  
      }
      
  
  
    }
  
  
  
  
    return (
      <div ref={wrapperRef} className="whole">
  
        <div className="separates" >
          <div className="row">
            <div className='col-lg-4 col-lg-offset-4'>
              <div className='input-group'>
  
  
                <input
                  id="auto"
                  onClick={() => setSuggest(true)}
                  placeholder="Type to search"
                  value={title}
                  onChange={event => {
                      setSuggest(true)
                    setTitle(event.target.value)


                  }}
                  onKeyPress={event => {
  
                    if (event.key === 'Enter') {
  
                      updateEnter(event)
                    }
                  }} />
  
                <span className="input-group-btn">
                  <button className="btn btn-outline-success"
                    onClick={event => {
                      updateEnter(event)
                    }} type="search">Search
                  </button>
                </span>
              </div>
            </div>
  
          </div>
  
          {movies && suggest && (
            <div className="autoContainer">
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
                      <div className='d-flex p-2'>{value.Title}</div>
  
                    </div>
                  );
                })}
  
            </div>
          )}
  
        </div>
  
  
      </div>
  
  
    )
  
  }

  export default Setup