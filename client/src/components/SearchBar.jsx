import { FaSearch } from "react-icons/fa";
import "../styles/searchBar.css";

function SearchBar() {
  return (
    <section className="search-section">

      <div className="search-container">

        <h2>Search Government Services</h2>

        <p>
          Find documents and government services instantly.
        </p>

        <div className="search-box">

          <FaSearch className="search-icon" />

          <input
            type="text"
            placeholder="Search Aadhaar, PAN Card, Driving License..."
          />

          <button>
            Search
          </button>

        </div>

      </div>

    </section>
  );
}

export default SearchBar;