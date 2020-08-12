import React from 'react';
import MovieCard from "./MovieCard";

function MovieList({movies}){
    
    return(
        <div className="listeMovies">
        
       {movies.map((el)=>(
        < MovieCard el={el} key={el.id}/>
        ))}
        </div>
    );
};
export default MovieList;