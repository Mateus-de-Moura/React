import React from "react";
import './Styles/index.css';
import Sidebar from "./components/sidebar";
import MainContent from "./components/MainContent";

function App() {
  return (
    <div id="portifolio">
      <h1>Mateus Moura</h1>  
      <Sidebar/>
      <MainContent/>
    </div>
  );
}

export default App;
