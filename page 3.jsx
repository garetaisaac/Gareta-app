"use client";
import React from "react";

function MainComponent() {
  const classLevels = [
    { level: "Standard 5", standard: 5, icon: "fa-star" },
    { level: "Standard 6", standard: 6, icon: "fa-star" },
    { level: "Standard 7", standard: 7, icon: "fa-star" },
    { level: "Standard 8", standard: 8, icon: "fa-star" },
  ];

  const [subject, setSubject] = useState(null);
  const [selectedStandard, setSelectedStandard] = useState(null);
  const [units, setUnits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSubject(params.get("subject"));
  }, []);

  const fetchUnits = async (standard) => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/units", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ subject, standard }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch units");
      }

      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setUnits(data.units);
      setSelectedStandard(standard);
    } catch (err) {
      console.error(err);
      setError("Failed to load units. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <div className="bg-[#2c3e50] text-white p-4 flex items-center">
        <button
          onClick={() => {
            if (selectedStandard) {
              setSelectedStandard(null);
              setUnits([]);
            } else {
              window.location.href = "/";
            }
          }}
          className="text-white hover:text-gray-300"
        >
          <i className="fas fa-arrow-left text-xl"></i>
        </button>
        <h1 className="text-2xl font-roboto flex-1 text-center">
          {subject || "Loading..."}{" "}
          {selectedStandard ? `- Standard ${selectedStandard}` : ""}
        </h1>
      </div>

      <div className="p-4">
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
            {error}
          </div>
        )}

        {loading ? (
          <div className="text-center py-4">
            <i className="fas fa-spinner fa-spin text-2xl text-[#3498db]"></i>
          </div>
        ) : selectedStandard ? (
          <div className="space-y-4">
            {units.map((unit) => (
              <div
                key={unit.unitNumber}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
              >
                <h2 className="font-roboto text-lg text-[#2c3e50]">
                  UNIT {unit.unitNumber}: {unit.title}
                </h2>
              </div>
            ))}
            {units.length === 0 && !loading && (
              <div className="text-center py-4 text-gray-600">
                No units found for this subject and standard.
              </div>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {classLevels.map((level) => (
              <div
                key={level.level}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow cursor-pointer flex items-center space-x-4"
                onClick={() => fetchUnits(level.standard)}
              >
                <i className={`fas ${level.icon} text-2xl text-[#3498db]`}></i>
                <span className="font-roboto text-lg">{level.level}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;