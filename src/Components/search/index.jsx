




export default function Search({ search, setSearch, handleSearch }) {
    return (
      <div className="search-engine">
        <input
          type="text"
          placeholder="Enter Your City's Name:)"
          name="search"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button onClick={handleSearch}>
          Search
        </button>
      </div>
    );
  }