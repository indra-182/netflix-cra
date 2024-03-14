import { useState } from "react";
import Modal from "./Modal";

const Card = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);
  return (
    <>
      <div className="movie-card" onClick={openModal}>
        <img
          className="thumbnail"
          src={
            movie?.poster_path
              ? movie?.poster_path
              : "/assets/images/no-image.png"
          }
          alt={movie?.title || movie?.name}
        />
        <div className="border"></div>
      </div>
      {showModal && <Modal movie={movie} closeModal={closeModal} />}
    </>
  );
};

export default Card;
