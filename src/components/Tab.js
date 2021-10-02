import React from "react";

function Tab({ tabItems, currentTab, onTabClick }) {
  return (
    <div className='tab'>
      {tabItems &&
        tabItems.map((tab) => (
          <div
            key={tab.id || tab.page}
            className={`tab-item ${currentTab === tab.page ? "active" : ""}`}
            onClick={() => onTabClick(tab.page)}
          >
            <p className='tab-label'>{tab.label}</p>
          </div>
        ))}
    </div>
  );
}

export default Tab;
