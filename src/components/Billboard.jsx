import { useState } from "react";
import { FaPlay, FaCircleInfo } from "react-icons/fa6";
import Modal from "./Modal";

const Billboard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => setShowModal(true);
  const closeModal = () => setShowModal(false);

  return (
    <div>
      <div className="billboard">
        <div className="billboard-bg">
          <img
            src={`${movie?.poster_path}`}
            alt="trending-movie"
            className="billboard-bg-image"
          />
          <div className="overlay"></div>
        </div>

        <h1 className="billboard-title">{movie?.title || movie?.name}</h1>

        <p className="billboard-overview">{movie?.overview}</p>

        <div className="billboard-btns">
          <button className="billboard-btn-red" onClick={openModal}>
            <FaPlay /> Play Now
          </button>
          <button className="billboard-btn-white" onClick={openModal}>
            <FaCircleInfo /> More Info
          </button>
        </div>
      </div>

      {showModal && <Modal movie={movie} closeModal={closeModal} />}
    </div>
  );
};

export default Billboard;
