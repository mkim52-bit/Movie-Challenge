import React from "react";

const SearchBar = (props) => {
    return (
        <div className="search">
            <input 
            value={props.value}
            onChange={(event) => props.setTitle(event.target.value)}
			placeholder='Type to search...'
			></input>
        </div>
    )
}

export default SearchBar