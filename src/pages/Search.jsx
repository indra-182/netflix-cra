import React, { useEffect, useState } from "react";
import fetcher from "../helper/fetcher";
import Card from "../components/Card";

const Search = () => {
  const [searchedMovies, setSearchedMovies] = useState([]);
  const query = new URLSearchParams(location.search).get("query");

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`${fetcher.fetchAllMovies}`);
        const data = await response.json();

        const filteredMovies = data.filter((movie) => {
          return movie.title.toLowerCase().includes(query.toLowerCase());
        });

        setSearchedMovies(filteredMovies);
        return filteredMovies;
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    };

    fetchSearchResults();
  }, []);

  return searchedMovies.length === 0 ? (
    <div className="search-page">
      <h1 className="text-heading2-bold text-white">No results found</h1>
    </div>
  ) : (
    <div className="search-page">
      <h1 className="text-heading2-bold text-white">Results for "{query}"</h1>
      <div className="list">
        {searchedMovies.map((movie) => (
          <Card key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Search;
