import Navbar from "../components/Navbar";
import Card from "../components/Card";
import "../index.css";
import { useEffect, useState } from "react";
import getMovies from "../api/movie";
import Search from "../components/Search";

const Movies = () => {
  const [loading, setLoading] = useState(false);
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState({ isError: false, message: "" });
  const [search, setSearch] = useState({ input: "", number: 20 });

  

  console.log(search);

  const getMoviesFromApi = async () => {
    setLoading(true);
    try {
      const moviesData = await getMovies(search.input);
      console.log(moviesData)
      setLoading(false);
      setMovies(moviesData.Search);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError({ isError: true, message: "No se ha podido encontrar" });
    }
  };

  useEffect(() => {
    console.log("Se ha logrado la información");
    getMoviesFromApi();
  }, []);

  const render = () => {
    if (loading === true) {
      return (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      );
    }
    if (error.isError === true) {
      return <h1>{error.message}</h1>;
    }
    if (movies && movies.length > 0) {
      const searchMovies = movies.filter((movie) => {
        if (search.input === "") {
          return movie;
        }
        if (
          movie.Title.toLowerCase().includes(search.input.toLowerCase())
        ) {
          return movie;
        }
        return null;
      });

      if (searchMovies.length > 0) {
        const moviesAll = searchMovies.map((movie) => (
          <Card
            key={movie.imdbID}
            Poster={movie.Poster}
            Title={movie.Title}
            Plot={movie.Plot}
            Year={movie.Year}
            Type={movie.Type}
            imdbID={movie.imdbID}
          />
        ));
        return moviesAll;
      } else {
        return <h1>No tenemos el título: {search.input}</h1>;
      }
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <Search setSearch={setSearch} />
        <div className="card-wrap">{render()}</div>
      </div>
    </>
  );
};


export default Movies;

