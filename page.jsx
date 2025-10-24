"use client";
import React from "react";

function MainComponent() {
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
          About GARETA
        </h1>
      </div>

      <div className="p-4 max-w-3xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
          <div className="text-center">
            <i className="fas fa-graduation-cap text-5xl text-[#3498db]"></i>
            <h2 className="text-2xl font-roboto text-[#2c3e50] mt-4">
              Welcome to GARETA
            </h2>
            <p className="text-gray-600 mt-2">
              Your Gateway to Quality Education in Malawi
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-roboto text-[#2c3e50] mb-2">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide accessible, high-quality educational resources for
                primary school students in Malawi, helping them excel in their
                studies and prepare for their future.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-roboto text-[#2c3e50] mb-2">
                Key Features
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-start space-x-3">
                  <i className="fas fa-book text-[#3498db] mt-1"></i>
                  <span className="text-gray-600">
                    Comprehensive subject coverage from Standard 5 to 8
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-search text-[#3498db] mt-1"></i>
                  <span className="text-gray-600">
                    Easy topic search and navigation
                  </span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-history text-[#3498db] mt-1"></i>
                  <span className="text-gray-600">Track learning progress</span>
                </div>
                <div className="flex items-start space-x-3">
                  <i className="fas fa-cog text-[#3498db] mt-1"></i>
                  <span className="text-gray-600">
                    Customizable learning experience
                  </span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-roboto text-[#2c3e50] mb-2">
                Subjects Offered
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <i className="fas fa-book-bible text-[#3498db]"></i>
                  <span className="text-gray-600">Bible Knowledge</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-seedling text-[#3498db]"></i>
                  <span className="text-gray-600">Agriculture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-microscope text-[#3498db]"></i>
                  <span className="text-gray-600">Science and Technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-globe text-[#3498db]"></i>
                  <span className="text-gray-600">Social Studies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-hands-helping text-[#3498db]"></i>
                  <span className="text-gray-600">Life Skills</span>
                </div>
                <div className="flex items-center space-x-3">
                  <i className="fas fa-palette text-[#3498db]"></i>
                  <span className="text-gray-600">Expressive Arts</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-roboto text-[#2c3e50] mb-2">
                Contact Us
              </h3>
              <p className="text-gray-600">
                For support or feedback, please reach out to us:
              </p>
              <div className="flex items-center space-x-3 mt-2">
                <i className="fas fa-envelope text-[#3498db]"></i>
                <span className="text-gray-600">support@gareta.edu.mw</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;