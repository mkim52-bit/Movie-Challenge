import React, { useState, useEffect, useRef } from 'react'
import axios from 'axios';
import MovieArray from './components/MovieArray';
import SearchBar from './components/SearchBar';
import Autosuggest from 'react-autosuggest/dist/Autosuggest';
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

    setMovies(response.data.Search)
    return response

  }

  const updateEnter = event => {
    setTitle(event.target.value)
    updateSearch(title)
    setSuggest(false)


  }


  const updateSearch = mv => {
    console.log("inUpdate")
    setTitle(mv)
    props.setName(mv)
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
    props.setDesc(response.data.Plot)
    props.setPoster(response.data.Poster)


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
                onChange={event => setTitle(event.target.value)}
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

function App() {
  const [desc, setDesc] = useState('')
  const [poster, setPoster] = useState('')
  const [displayDetail, setDisplayDetail] = useState(false)
  const [name, setName] = useState('')

  return <div className='App'>
    <div className='auto-container'>
      <Setup setName={setName} setDisplayDetail={setDisplayDetail} setPoster={setPoster} setDesc={setDesc} />
    </div>


    <div>
      {displayDetail && (

        <div className='row row-cols-1 row-cols-md-3 g-4'>


          <div className="card mb-3" styles="max-width: 540px;">
            <div className="row g-0">
              <div className="col-md-4">
                <img src={poster} className="img-fluid rounded-start" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{name}</h5>
                  <p className="card-text">{desc}</p>
                  <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

      )}
    </div>





  </div>








}
















export default App;

