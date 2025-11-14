import React, { useState } from 'react';

const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const tabs = {
    dashboard: "📊 Dashboard Content",
    profile: "👤 Profile Content",
    reports: "📁 Reports Content",
    search: "🔍 Search Content",
  };
  return (
    <div className='w-screen h-screen bg-red-200'>
      <div className="min-h-screen flex flex-col">

  {/* CONTENT (scrolls normally without creating extra space) */}
  <div className="flex-1 p-4 pb-28 md:pb-4">
    {tabs[activeTab]}
  </div>

  {/* BOTTOM TABS */}
  <div className="md:static fixed bottom-0 left-0 w-full bg-white shadow-md z-50">
    <div className="grid grid-cols-4 gap-2 p-3">

      {Object.keys(tabs).map((tabKey) => (
        <button
          key={tabKey}
          onClick={() => setActiveTab(tabKey)}
          className={`py-3 rounded font-medium transition w-full
            ${
              activeTab === tabKey
                ? "bg-blue-600 text-white shadow-md scale-105"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }
          `}
        >
          {tabKey.charAt(0).toUpperCase() + tabKey.slice(1)}
        </button>
      ))}

    </div>
  </div>

</div>





    </div>




    
    
  );
};

export default App;