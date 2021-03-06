import React, { useState, useEffect, useRef } from 'react'
import SearchBar from './components/SearchBar'
import Info from './components/Info'
import './App.css'



function App() {
  const [desc, setDesc] = useState('')
  const [poster, setPoster] = useState('')
  const [displayDetail, setDisplayDetail] = useState(false)
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [stars, setStars] = useState('')
  const [runtime, setRuntime] = useState('')

  // calls component for search bar
  // calls component for displaying info

  return (<div className='App'>
    <div className='searchApp'>
      

        <SearchBar setName={setName} setDisplayDetail={setDisplayDetail} setPoster={setPoster} setDesc={setDesc} setDate={setDate} setStars={setStars} setRuntime={setRuntime}/>  
        
        </div>

      
     
      <div className='displayApp'>
      <Info displayDetail={displayDetail} name={name} desc={desc} poster={poster} date={date} stars={stars} runtime={runtime}/>              
      </div>

      
    </div>





  )

}
















export default App;

