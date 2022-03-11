import React from "react";

const MovieArray = (props) => {
    if(props.movies){
        
        return (
            <>
                {props.movies.map((movie,index) => (
                    <div  key={index}>
                       <img src={movie.Poster} alt='movie'
                      />
                        
                    </div>
                    
                ))}
            </>
    
        )
    }else{
        return <div></div>
    }
 
  
  
  };


export default MovieArray;