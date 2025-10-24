"use client";
import React from "react";

function MainComponent() {
  const subjects = [
    { name: "bible knowledge", icon: "fa-book-bible" },
    { name: "agriculture", icon: "fa-seedling" },
    { name: "science and technology", icon: "fa-microscope" },
    { name: "social studies", icon: "fa-globe" },
    { name: "life skills", icon: "fa-hands-helping" },
    { name: "expressive arts", icon: "fa-palette" },
  ];

  const [selectedSubject, setSelectedSubject] = useState(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (selectedSubject) {
    window.location.href = `/subject?subject=${encodeURIComponent(
      selectedSubject
    )}`;
    return null;
  }

  const handleSearch = async () => {
    if (!searchQuery.trim()) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/search", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!response.ok) {
        throw new Error("Search failed");
      }

      const data = await response.json();
      setSearchResults(data.results);
    } catch (err) {
      console.error(err);
      setError("Something went wrong with the search");
    } finally {
      setLoading(false);
    }
  };

  const menuItems = [
    { name: "History", icon: "fa-history", path: "/history" },
    { name: "Settings", icon: "fa-cog", path: "/settings" },
    { name: "About", icon: "fa-info-circle", path: "/about" },
  ];

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      {/* Header */}
      <div className="bg-[#1a252f] text-white p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-4xl font-roboto font-bold">GARETA</h1>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-white hover:text-gray-300"
            >
              <i className="fas fa-search text-2xl"></i>
            </button>
            <div className="relative">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-gray-300"
              >
                <i className="fas fa-bars text-2xl"></i>
              </button>
              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-10">
                  {menuItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.path}
                      className="flex items-center px-4 py-2 text-gray-800 hover:bg-gray-100"
                    >
                      <i className={`fas ${item.icon} w-6`}></i>
                      <span>{item.name}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
        {isSearchOpen && (
          <div className="flex gap-2 mb-2">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search topics..."
              className="flex-1 px-4 py-2 rounded text-black"
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-[#3498db] px-4 py-2 rounded hover:bg-[#2980b9]"
              disabled={loading}
            >
              {loading ? "Searching..." : "Search"}
            </button>
          </div>
        )}
        <p className="text-lg font-roboto text-center">
          Malawi Primary School Easy Notes
        </p>
      </div>

      {/* Search Results */}
      {searchResults && searchResults.length > 0 && (
        <div className="p-4">
          <h2 className="text-xl font-roboto mb-4">Search Results:</h2>
          <div className="space-y-4">
            {searchResults.map((result, index) => (
              <div key={index} className="bg-white rounded-lg p-4 shadow-md">
                <h3 className="font-roboto text-lg text-[#2c3e50] mb-2">
                  {result.subject} - {result.level}
                </h3>
                <ul className="list-disc list-inside">
                  {result.topics.map((topic, topicIndex) => (
                    <li key={topicIndex} className="text-[#3498db]">
                      {topic}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}

      {error && <div className="p-4 text-red-500 text-center">{error}</div>}

      {/* Subjects Grid (show only when not showing search results) */}
      {(!searchResults || searchResults.length === 0) && (
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {subjects.map((subject) => (
              <div
                key={subject.name}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-4"
                onClick={() => setSelectedSubject(subject.name)}
              >
                <i
                  className={`fas ${subject.icon} text-2xl text-[#3498db]`}
                ></i>
                <span className="font-roboto text-lg">{subject.name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainComponent;