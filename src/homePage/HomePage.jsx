import React from "react";
import Navbar from "../navbar/Navbar";
import BodyContent from "../bodyContent/BodyContent";

function HomePage() {
  return (
    <div id="page" className="site">
      <Navbar />
      <BodyContent />
    </div>
  );
}

export default HomePage;
