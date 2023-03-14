// styles
import { useState } from "react";
import { useHistory } from "react-router-dom";
import "./searchBar.css";

const SearchBar = () => {
  const [term, setTerm] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    history.push(`/search?q=${term}`);
  };

  return (
    <div className="searchbar">
      <form onSubmit={handleSubmit}>
        <label>Search:</label>
        <input
          type="text"
          onChange={(e) => setTerm(e.target.value)}
          value={term}
          required
        />
      </form>
    </div>
  );
};

export default SearchBar;
