import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./homePage/HomePage";
import StoryByTopic from "./component/StoryByTopic";
import StoryContent from "./component/StoryContent";

function App() {
  return (
    <div id="page" className="site">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route path="truyen-cuoi-voca/" element={<StoryByTopic />}>
              <Route path="bai1" element={<StoryContent />} />
            </Route>
            <Route
              path="truyen-cuoi-tinh-yeu"
              element={
                <h1 className="story-topic">Danh Mục: truyen cuoi tinh yeu</h1>
              }
            />
            <Route
              path="truyen-cuoi-18"
              element={
                <h1 className="story-topic">Danh Mục: truyen-cuoi-18</h1>
              }
            />
            <Route
              path="Tho-ca-cuoi"
              element={<h1 className="story-topic">Danh Mục: Tho-ca-cuoi</h1>}
            />
          </Route>
          {/* <Navbar />
          <BodyContent /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
