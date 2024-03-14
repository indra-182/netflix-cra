import { useEffect, useState } from "react";
import fetcher from "../helper/fetcher";
import Navbar from "../components/Navbar";
import Billboard from "../components/Billboard";
import Row from "../components/Row";

const Home = () => {
  const [movie, setMovie] = useState([]);
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchAllMovies = async () => {
      const response = await fetch(fetcher.fetchAllMovies);
      const data = await response.json();
      setMovie(data[Math.floor(Math.random() * data.length)]);
      setMovies(data);
      return data;
    };

    fetchAllMovies();
  }, []);

  return (
    <>
      <Navbar />
      <Billboard movie={movie} />
      <Row movies={movies} />
    </>
  );
};

export default Home;
