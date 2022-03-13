import React, { useState, useEffect, useRef } from 'react'
import SearchBar from './components/SearchBar'
import Info from './components/Info'
import './App.css'


function App() {
  const [desc, setDesc] = useState('')
  const [poster, setPoster] = useState('')
  const [displayDetail, setDisplayDetail] = useState(false)
  const [name, setName] = useState('')

  return (<div className='App'>
    <div className='searchApp'>
      

        <SearchBar setName={setName} setDisplayDetail={setDisplayDetail} setPoster={setPoster} setDesc={setDesc} />
      
        </div>

      
     
      <div className='displayApp'>
      <Info displayDetail={displayDetail} name={name} desc={desc} poster={poster} />

      </div>

      
    </div>





  )

}
















export default App;

