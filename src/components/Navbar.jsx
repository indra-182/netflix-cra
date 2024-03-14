import { useCallback, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import navLogo from "../assets/logo.png";
import profileImage from "../assets/profile.jpg";
import { FaSearch } from "react-icons/fa";

const Navbar = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    if (window.scrollY > 66) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.scrollTo(0, 0);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className={`navbar ${isScrolled ? "bg-black-1" : ""}`}>
      <Link to="/">
        <img className="logo" src={navLogo} alt="logo" />
      </Link>

      <div className="nav-links">
        <Link className="nav-link font-nsans-bold" to="/">
          Home
        </Link>
        {/* <Link className="nav-link font-nsans-bold" to="/myfavorites">
          My Favorites
        </Link> */}
        <Link className="nav-link font-nsans-bold" to="/add">
          Add Movies
        </Link>
      </div>

      <div className="nav-right">
        <div className="search">
          <input
            className="input-search font-nsans-light"
            name="search"
            placeholder="Search movie here"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button
            disabled={!search || search === ""}
            onClick={() => navigate(`/search?query=${search}`)}
          >
            <FaSearch className="icon" />
          </button>
        </div>

        <img
          className="profile hover:border-2 hover:border-red-500 cursor-pointer mr-5"
          src={profileImage}
          alt="profile"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        />

        {isDropdownOpen && (
          <div className="dropdown-menu">
            <Link to="/">Home</Link>
            {/* <Link to="/myfavorites">My Favorites</Link> */}
            <Link to="/add">Add Movies</Link>
            <Link to="/">Logout</Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
