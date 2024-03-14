import Card from "./Card";

const Row = ({ movies }) => {
  return (
    <div className="all-movies">
      <div className="category">
        <div className="movie-list">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Row;
