import { useEffect, useState } from "react";
import { baseUrl } from "../helper/constant";
import logo from "../assets/logo.png";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const AddMovie = () => {
  const navigate = useNavigate();
  const [highestId, setHighestId] = useState(0);
  const [formData, setFormData] = useState({
    title: "",
    overview: "",
    poster_path: "",
    release_date: "",
    vote_average: "",
  });

  useEffect(() => {
    const fetchHighestId = async () => {
      try {
        const response = await fetch(`${baseUrl}/movies`);
        const data = await response.json();
        const maxId = Math.max(...data.map((movie) => movie.id));

        setHighestId(maxId);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };
    fetchHighestId();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const newId = highestId + 1;
      const response = await fetch(`${baseUrl}/movies`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          id: highestId + 1,
        }),
      });
      const data = await response.json();
      toast.success("Movie added successfully!");
      setHighestId(newId);
      // Reset form data after submission
      setFormData({
        title: "",
        overview: "",
        poster_path: "",
        release_date: "",
        vote_average: "",
      });

      return data;
    } catch (error) {
      toast.error("Error adding movie");
    }
  };

  return (
    <>
      <Navbar />
      <div className="auth">
        <div className="overlay">
          <div className="content">
            <img className="logo" src={logo} alt="logo" />
            <form className="form" onSubmit={handleSubmit} name="form">
              <div className="input">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Title"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Description"
                  name="overview"
                  value={formData.overview}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Poster Path"
                  name="poster_path"
                  value={formData.poster_path}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Tanggal Rilis"
                  name="release_date"
                  value={formData.release_date}
                  onChange={handleChange}
                />
              </div>
              <div className="input">
                <input
                  className="input-field"
                  type="text"
                  placeholder="Vote Average"
                  name="vote_average"
                  value={formData.vote_average}
                  onChange={handleChange}
                />
              </div>

              <button className="button" type="submit">
                Tambah Film
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddMovie;
