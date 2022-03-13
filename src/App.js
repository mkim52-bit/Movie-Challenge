import React, { useState, useEffect, useRef } from 'react'
import Setup from './components/Setup';
import './App.css'



function App() {
  const [desc, setDesc] = useState('')
  const [poster, setPoster] = useState('')
  const [displayDetail, setDisplayDetail] = useState(false)
  const [name, setName] = useState('')

  return( <div className='container'>
    
    
    
      <Setup setName={setName} setDisplayDetail={setDisplayDetail} setPoster={setPoster} setDesc={setDesc} />
      
    
   
 <div className='container'>
<div className='row'>
    <div>
      {displayDetail && (

        <div className=''>


         
            
              <div >
                <img src={poster}  alt="Poster" />
              </div>
              <div >
                
                  <h5 >{name}</h5>
                  <p >{desc}</p>
                  
                
              </div>
            
         
        </div>

      )}
    </div>
    </div>
    </div>
    
    
      



  </div>
  )








}
















export default App;

