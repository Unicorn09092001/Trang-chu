import React from "react";
import Navbar from "./navbar/Navbar";
import BodyContent from "./bodyContent/BodyContent";
import "./App.css";

function App() {
  return (
    <div id="page" className="site">
      <Navbar />
      <BodyContent />
    </div>
  );
}

export default App;
