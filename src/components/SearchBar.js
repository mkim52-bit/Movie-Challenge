import React from "react";


const SearchBar = (props) => {

    
   
        return (
            <div className="search">
                <div className="input">
                    <input 
                        value={props.value}
                        onChange={(event) => props.setTitle(event.target.value)}
                        placeholder='Type to search...'
                    />
                </div>
                    {props.movies && (
                        <div className="dataResult">
                            {props.movies.map((movie, key) => {
                                
                                return (
                                    <div
                                        onClick={(event)=> props.update(movie.Title)}
                                        key={key}
                                    >
                                    <span>{movie.Title}</span>    
                                    </div>
                                );
                                })}
                        </div>

            )}
                 
             
            </div>
        )
        
    
  
    
 
}

export default SearchBar