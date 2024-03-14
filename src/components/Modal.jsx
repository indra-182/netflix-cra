import { useState } from "react";
import {
  IoRemoveCircleOutline,
  IoAddCircleOutline,
  IoCloseCircleOutline,
} from "react-icons/io5";

const Modal = ({ movie, closeModal }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  return (
    <div className="modal">
      <button className="modal-close" onClick={closeModal}>
        <IoCloseCircleOutline
          style={{
            color: "white",
            fontSize: "40px",
            cursor: "pointer",
            ":hover": { color: "red" },
          }}
        />
      </button>
      <img
        className="modal-video"
        src={movie?.poster_path}
        loading="lazy"
        allowFullScreen
      />
      <div className="modal-content">
        <div className="flex justify-between">
          <div className="flex gap-2">
            <p className="font-nsans-bold">Name : </p>
            <p className="font-nsans-light">{movie?.title}</p>
          </div>
          <div className="flex gap-3 justify-center items-center">
            <p className="font-nsans-bold">
              {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
            </p>
            {isFavorite ? (
              <IoRemoveCircleOutline
                size={30}
                className="cursor-pointer text-red-700"
                onClick={() => setIsFavorite(!isFavorite)}
              />
            ) : (
              <IoAddCircleOutline
                size={30}
                className="cursor-pointer text-red-700"
                onClick={() => setIsFavorite(!isFavorite)}
              />
            )}
          </div>
        </div>
        <div className="flex gap-2">
          <p className="font-nsans-bold">Release Date : </p>
          <p className="font-nsans-light">{movie?.release_date}</p>
        </div>
        <p className="font-nsans-light">{movie?.overview}</p>
        <div className="flex gap-2">
          <p className="font-nsans-bold">Rating : </p>
          <p className="font-nsans-light">{movie?.vote_average}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
