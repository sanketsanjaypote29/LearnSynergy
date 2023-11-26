import React, { useState } from "react";
import "./App.css";
import { Configuration, OpenAIApi } from "openai";
import OptionSelection from "./components/OptionSelection";
import Translation from "./components/Translation";
import Sidebar from "./components/Sidebar"; // Import the Sidebar component
import { arrayItems } from "./AIOptions";
import SearchBar from "./components/SearchBar";
import VideoSearch from "./components/VideoSearch";
import About from "./components/About";
import Books from "./Books";

function App() {
  const configuration = new Configuration({
    apiKey: import.meta.env.VITE_Open_AI_Key,
  });
  const openai = new OpenAIApi(configuration);
  const [selectedOption, setSelectedOption] = useState("Home"); // Set the default option to "Home"
  const [result, setResult] = useState("");
  const [input, setInput] = useState("");
  const [showSidebar, setShowSidebar] = useState(true);
  const [option, setOption] = useState({});
  const selectOption = (option) => {
    setSelectedOption(option.label);
    setOption(option);
    setShowSidebar(false);
  };

  const doStuff = async () => {
    let object = { ...option, prompt: input };

    const response = await openai.createCompletion(object);

    setResult(response.data.choices[0].text);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const renderContent = () => {
    switch (selectedOption) {
      case "Home":
        return <VideoSearch />;
      case "AI Assistant":
        return <OptionSelection arrayItems={arrayItems} selectOption={selectOption} />;
      case "Books":
        return <Books />
      case "About":
        return <About />
      default:
        return <Translation doStuff={doStuff} setInput={setInput} result={result} />;
    }
  };

  return (
    <div className={`App ${showSidebar ? "sidebar-open" : ""}`}>
      {showSidebar && (
        <Sidebar
          selectOption={selectOption}
          onClose={toggleSidebar}
          className={showSidebar ? "show" : ""}
        />
      )}
      <div className={`content ${showSidebar ? "content-open" : ""}`}>
        {!showSidebar && (
          <button onClick={toggleSidebar} className="toggle-btn">
            ☰
          </button>
        )}
        {renderContent()}
      </div>
    </div>
  );
}

export default App;
