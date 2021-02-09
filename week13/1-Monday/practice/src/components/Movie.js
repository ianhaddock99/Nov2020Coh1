import React, { Component } from 'react'

class Movie extends Component {

  constructor(){
    super();

    

    this.state = {
      movies: [],
      currentMovie: {}
    }
  }
  
  
  componentDidMount = async () => {
    let url = "http://www.omdbapi.com/?apikey=5547fa12&s=batman"

    let response = await fetch(url);

    let data =  await response.json();

    this.setState({
      movies: data.Search
    }, ()=>{
    })
  }

  async updateCurrentMovie(id){
    let url =`http://www.omdbapi.com/?i=${id}&apikey=5547fa12`
        const response = await fetch(url);
        const newMovie = await response.json();

        console.log(newMovie)
        this.setState({
          currentMovie: newMovie
        })
        
      }
      
      
      render() {
    const {movies, currentMovie} = this.state;

    

    let movieList = movies.map((movie, index) =>{
      return <li key={index} onClick={() => this.updateCurrentMovie(movie.imdbID)}>
              <img src={movie.Poster} style={{maxWidth: '50px'}} />
              <h4>{movie.Title}</h4>
              </li>
    })

    return (
      <>
        <h1>Movies</h1>
        <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around'}}>
          {movieList}
        </div>
        <hr />
        <div>
          <h1>{currentMovie.Title}</h1>
          <img src={currentMovie.Poster} style={{}} />
          <h2>{currentMovie.Year}</h2>
          <h2>{currentMovie.Rated}</h2>
          <h2>{currentMovie.Released}</h2>
          <h2>{currentMovie.Director}</h2>

        </div>
      </>
    )
  }
}

export default Movie