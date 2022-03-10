import React from "react";

const MovieArray = (props) => {
    if(props.movies){
        console.log(props.movies)
        return (
            <>
                {props.movies.map((movie) => (
                    <div >
                        <img src={movie.Poster} alt='movie'></img>
                    
                    </div>
                ))}
            </>
    
        )
    }else{
        return <div></div>
    }

  
  
  };


export default MovieArray;