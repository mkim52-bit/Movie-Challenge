import React from "react";
import './Info.css'

const Info = (props) => {


    return (
        <div>
            {props.displayDetail && (
                <div class= 'card'>
                    <div className="poster">
                        <img
                            src={props.poster} alt="Poster"
                        />
                    </div>
                    <div className="contain">

                        <div className="name">
                        <h1  >{props.name}</h1>      
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