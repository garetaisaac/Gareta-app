"use client";
import React from "react";

function MainComponent() {
  const [history, setHistory] = useState([
    {
      subject: "Bible Knowledge",
      level: "Standard 7",
      topic: "The Prophets",
      date: "2025-01-15",
      icon: "fa-book-bible",
    },
    {
      subject: "Agriculture",
      level: "Standard 6",
      topic: "Irrigation",
      date: "2025-01-14",
      icon: "fa-seedling",
    },
    {
      subject: "Science and Technology",
      level: "Standard 8",
      topic: "Electricity",
      date: "2025-01-13",
      icon: "fa-microscope",
    },
  ]);

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <div className="bg-[#2c3e50] text-white p-4 flex items-center">
        <button
          onClick={() => (window.location.href = "/")}
          className="text-white hover:text-gray-300"
        >
          <i className="fas fa-arrow-left text-xl"></i>
        </button>
        <h1 className="text-2xl font-roboto flex-1 text-center">
          Learning History
        </h1>
      </div>

      <div className="p-4">
        {history.length === 0 ? (
          <div className="text-center text-gray-500 font-roboto mt-8">
            No learning history yet
          </div>
        ) : (
          <div className="space-y-4">
            {history.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center space-x-4">
                  <div className="text-[#3498db]">
                    <i className={`fas ${item.icon} text-2xl`}></i>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-roboto text-lg text-[#2c3e50]">
                      {item.subject}
                    </h3>
                    <p className="text-gray-600">
                      {item.level} - {item.topic}
                    </p>
                    <p className="text-sm text-gray-400">{item.date}</p>
                  </div>
                  <button
                    onClick={() =>
                      (window.location.href = `/subject?subject=${encodeURIComponent(
                        item.subject
                      )}`)
                    }
                    className="text-[#3498db] hover:text-[#2980b9]"
                  >
                    <i className="fas fa-chevron-right"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MainComponent;