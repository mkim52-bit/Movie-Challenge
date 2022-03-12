import React, { useState, useEffect, useRef } from 'react'
import Setup from './components/Setup';



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
                <img src={poster} className="img-fluid rounded-start" alt="Poster" />
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

