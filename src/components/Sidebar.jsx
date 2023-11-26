// Sidebar.jsx
import React from "react";
import "./Sidebar.css"; // Import your custom CSS file

const Sidebar = ({ selectOption, onClose, isMinimized }) => {
  const sidebarItems = [
    { id: 1, option: "Home", label: "Home" },
    { id: 2, option: "AI Assistant", label: "AI Assistant" },
    { id: 3, option: "Books", label: "Books" },
    { id: 4, option: "About", label: "About" },
  ];

  return (
    <div className={`sidebar ${isMinimized ? 'minimized' : ''}`}>
      <div className="sidebar-header">
        <h2>LearnSynergy</h2>
        <button onClick={onClose} className="close-btn">
          &times;
        </button>
      </div>
      <ul>
        {sidebarItems.map((item) => (
          <li key={item.id} onClick={() => selectOption(item)}>
            {item.label}
          </li>
        ))}
      </ul>
      {isMinimized && (
        <button onClick={onClose} className="toggle-btn">
          ☰
        </button>
      )}
    </div>
  );
};

export default Sidebar;
