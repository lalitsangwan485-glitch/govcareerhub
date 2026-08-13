function SearchBar() {
  return (
    <div className="max-w-5xl mx-auto -mt-10 px-4">
      <div className="bg-white rounded-xl shadow-xl p-6">
        <input
          type="text"
          placeholder="Search Government Jobs..."
          className="w-full border rounded-lg px-5 py-4 outline-none"
        />
      </div>
    </div>
  );
}

export default SearchBar;