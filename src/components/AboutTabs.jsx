import React, { useState } from "react";

const tabs = ["About Me", "Experiences", "Recommended"];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState("About Me");

  return (
    <div className="bg-[#1c1f26] rounded-2xl shadow-lg p-5">
      {/* Tabs */}
      <div className="flex gap-4 mb-4">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300
              ${
                activeTab === tab
                  ? "bg-[#2c2f38] text-white shadow-md"
                  : "text-gray-400 hover:text-white"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="text-gray-300 text-sm leading-relaxed">
        {activeTab === "About Me" && (
          <p>
            Hello! I’m Dave, your sales rep from Salesforce. I’ve been working
            at this awesome company for 3 years now. I was born and raised in
            Albany, NY & have been living in Santa Carla for the past 10 years
            with my wife Tiffany and my 4-year-old twin daughters — Emma and
            Ella. Both of them are just starting school, so my calendar is
            usually blocked between 9–10 AM.
          </p>
        )}

        {activeTab === "Experiences" && (
          <p>
            Over the last decade, I’ve helped companies improve their sales and
            customer relationships using Salesforce CRM solutions. My expertise
            lies in B2B communication and automation tools.
          </p>
        )}

        {activeTab === "Recommended" && (
          <p>
            Dave is a wonderful colleague! His enthusiasm and deep understanding
            of sales tools make him an invaluable part of our team.
          </p>
        )}
      </div>
    </div>
  );
};

export default AboutTabs;
