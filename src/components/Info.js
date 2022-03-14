import React from "react";
import './Info.css'
//component for displaying all info
const Info = (props) => {


    return (
        <div>
            {props.displayDetail && (
                <div class= 'card'>
                    <div className="poster">
                        <img
                            className="movieImage"
                            src={props.poster} alt="Poster"
                        />
                    </div>
                    <div className="contain">

                        <div className="name">
                        <h1>{props.name}</h1>      
                        </div>
                        <div className="containInner">

                        <div className="year">
                            Released: {props.date}

                        </div>
                        <div className="rating">
                        <img className="icon" src="https://img.icons8.com/fluency/48/000000/star.png"/>  
                            <div className="star">
                                {props.stars}

                            </div>
                            
                        </div>
                        <div className="runtime">
                            Runtime: {props.runtime}
                        </div>
                        </div>

                        <div className="desc"> 
                        <p>{props.desc}</p>
                        </div>

                    </div>
                </div>
            )}
        </div>



    )



}

export default Info