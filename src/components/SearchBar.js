import React from "react";

const SearchBar = (props) => {
    
    if(props.movies){
        return (
            <div className="search">
                <div className="input">
                <input 
                value={props.value}
                onChange={(event) => props.setTitle(event.target.value)}
                placeholder='Type to search...'
                ></input>
                </div>
                <div className="drop">
                    
                        {props.movies.map((movie) => (
                            
                        <button onClick={console.log(movie.Title)} >
                           {movie.Title}
                            
                        </button>
                        
                    ))}
    
                </div>
                 
             
            </div>
        )
        
    }
    else{
        return (
            <div className="search">
                <div className="input">
                <input 
                value={props.value}
                onChange={(event) => props.setTitle(event.target.value)}
                placeholder='Type to search...'
                ></input>
                </div>
    
            </div>
        )



    }
    
 
}

export default SearchBar