"use client";
import React from "react";

function MainComponent() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [fontSize, setFontSize] = useState("normal");
  const [language, setLanguage] = useState("english");

  const handleSave = () => {
    const settings = {
      darkMode,
      notifications,
      fontSize,
      language,
    };

    try {
      localStorage.setItem("userSettings", JSON.stringify(settings));
    } catch (error) {
      console.error("Failed to save settings:", error);
    }
  };

  useEffect(() => {
    try {
      const savedSettings = localStorage.getItem("userSettings");
      if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        setDarkMode(settings.darkMode);
        setNotifications(settings.notifications);
        setFontSize(settings.fontSize);
        setLanguage(settings.language);
      }
    } catch (error) {
      console.error("Failed to load settings:", error);
    }
  }, []);

  return (
    <div className="min-h-screen bg-[#f0f2f5]">
      <div className="bg-[#2c3e50] text-white p-4 flex items-center">
        <button
          onClick={() => (window.location.href = "/")}
          className="text-white hover:text-gray-300"
        >
          <i className="fas fa-arrow-left text-xl"></i>
        </button>
        <h1 className="text-2xl font-roboto flex-1 text-center">Settings</h1>
      </div>

      <div className="p-4 max-w-2xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div className="space-y-4">
            <h2 className="text-xl font-roboto text-[#2c3e50] border-b pb-2">
              Appearance
            </h2>

            <div className="flex justify-between items-center">
              <span className="font-roboto">Dark Mode</span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  darkMode ? "bg-[#3498db]" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    darkMode ? "right-1" : "left-1"
                  }`}
                ></div>
              </button>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-roboto">Font Size</span>
              <select
                value={fontSize}
                onChange={(e) => setFontSize(e.target.value)}
                className="border rounded p-1"
              >
                <option value="small">Small</option>
                <option value="normal">Normal</option>
                <option value="large">Large</option>
              </select>
            </div>

            <div className="flex justify-between items-center">
              <span className="font-roboto">Language</span>
              <select
                value={language}
                onChange={(e) => setLanguage(e.target.value)}
                className="border rounded p-1"
              >
                <option value="english">English</option>
                <option value="chichewa">Chichewa</option>
              </select>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-roboto text-[#2c3e50] border-b pb-2">
              Notifications
            </h2>

            <div className="flex justify-between items-center">
              <span className="font-roboto">Enable Notifications</span>
              <button
                onClick={() => setNotifications(!notifications)}
                className={`w-12 h-6 rounded-full transition-colors ${
                  notifications ? "bg-[#3498db]" : "bg-gray-300"
                } relative`}
              >
                <div
                  className={`w-4 h-4 bg-white rounded-full absolute top-1 transition-transform ${
                    notifications ? "right-1" : "left-1"
                  }`}
                ></div>
              </button>
            </div>
          </div>

          <button
            onClick={handleSave}
            className="w-full bg-[#3498db] text-white py-2 rounded-lg hover:bg-[#2980b9] transition-colors font-roboto"
          >
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;