import React, { useEffect } from "react";
import "App.css";
import { BrowserRouter } from "react-router-dom";
import { searchByPage } from "./service/services";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStoryList, setPageTotal } from "./Slice/currentStoryList";
import Navbar from "navbar/Navbar";
import BodyContent from 'bodyContent/BodyContent';

function App() {
  const dispatch = useDispatch();

  return (
    <div id="page" className="site">
      <BrowserRouter>
        <div>
          <Navbar />
          <BodyContent />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
