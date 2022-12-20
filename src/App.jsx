import React, { useEffect } from "react";
import "App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import StoryByTopic from "./component/StoryByTopic";
import StoryContent from "./component/StoryContent";
import { searchByPage } from "./service/services";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentStoryList } from "./Slice/currentStoryList";
import Navbar from "navbar/Navbar";
import BodyContent from 'bodyContent/BodyContent';

function App() {
  const dispatch = useDispatch();
  const storyList = useSelector((state) => state.currentStoryList);

  useEffect(() => {
    searchByPage(1).then(({ data }) => {
      dispatch(setCurrentStoryList({ ...storyList, ...data }));
    });
  }, []);
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
