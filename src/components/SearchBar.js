import React from "react";

const SearchBar = (props) => {
   
        return (
            <div className="search">
                <div className="input">
                <input 
                value={props.value}
                onChange={(event) => props.setTitle(event.target.value)}
                placeholder='Type to search...'
                ></input>
                </div>
            {props.movies && (
                <div className="dataResult">
                {props.movies.map((movie, key) => {
                    console.log(movie)
                  return (
                    <a >
                      <p>{movie.Title} </p>
                    </a>
                  );
                })}
              </div>

            )}
                 
             
            </div>
        )
        
    
  
    
 
}

export default SearchBar