import React from "react";

// movie card component for each movie

const MovieCard = ({ movie }) => {

    // const movieTitle = movie.Title

    return (
        <div className='movie'>
          
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} rel="noreferrer" target='_blank'><div>
                <p>{movie.Year}</p>
          </div>

          <div>
                <img src={movie.Poster} alt={movie.Title}/>
          </div>

          <div>
                <span>{movie.Type}</span>
                <h3>{movie.Title}</h3>
            </div></a>  
        
        </div> 

    )
}


export default MovieCard