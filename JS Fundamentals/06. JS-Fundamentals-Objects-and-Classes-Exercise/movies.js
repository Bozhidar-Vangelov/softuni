function movies(input) {
  let movies = [];
  for (let element of input) {
    if (element.includes("addMovie")) {
      let currentMovie = {};
      let name = element.substring(9);
      currentMovie.name = name;
      movies.push(currentMovie);
    } else if (element.includes("directedBy")) {
      let [name, movieDirector] = element.split(" directedBy ");
      let myMovie = movies.find((x) => x.name === name);

      if (myMovie) {
        myMovie.director = movieDirector;
      }
    } else {
      let [movie, movieDate] = element.split(" onDate ");
      let myMovie = movies.find((x) => x.name === movie);

      if (myMovie) {
        myMovie.date = movieDate;
      }
    }
  }
  movies.forEach((movie) => {
    if (movie.name && movie.director && movie.date) {
      console.log(JSON.stringify(movie));
    }
  });
}

movies([
  "addMovie Fast and Furious",
  "addMovie Godfather",
  "Inception directedBy Christopher Nolan",
  "Godfather directedBy Francis Ford Coppola",
  "Godfather onDate 29.07.2018",
  "Fast and Furious onDate 30.07.2018",
  "Batman onDate 01.08.2018",
  "Fast and Furious directedBy Rob Cohen",
]);
