import React, { useState, useEffect } from "react";

import "./bodyContent.scss";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import StoryByTopic from "../component/StoryByTopic";
import StoryContent from "../component/StoryContent";

function BodyContent({ storyList }) {
  const { currentStory } = useSelector(state => state.currentStory);

  console.log(currentStory)

  return (
    <div className="container">
      <div className="content-left-wrapper">
        <div className="search-wrapper">
          <input placeholder="Tên truyện" />
          <button className="btn-search">Tìm kiếm</button>
        </div>
        <h2 className="title">Truyện cười mới</h2>
        <div className="new-story-list">
          <div className="story-item">
            Những câu đố mẹo vui có đáp án – Phần 2
          </div>
          <div className="story-item">
            Những câu đố mẹo vui có đáp án – Phần 1
          </div>
          <div className="story-item">Bưu cục thó mất rồi y</div>
          <div className="story-item">Nỗi khổ của các ông chồng </div>
          <div className="story-item">Chung thủy</div>
        </div>
      </div>
      <div className="content-center-wrapper">
        <Routes>
          <Route
            path="/"
            element={<StoryByTopic storyList={storyList} topic={"home"} />}
          >
            <Route path={`story/id=${currentStory.id}`} element={<StoryContent story={currentStory}/>}/>
          </Route>
          <Route
            path="truyen-cuoi-voca/"
            element={<StoryByTopic topic={"Danh Mục: truyện cười voca"} />}
          >
            <Route path={`story/id=${currentStory.id}`} element={<StoryContent story={currentStory}/>}/>
          </Route>
          <Route
            path="truyen-cuoi-tinh-yeu"
            element={
              <h1 className="story-topic">Danh Mục: truyen cuoi tinh yeu</h1>
            }
          />
          <Route
            path="truyen-cuoi-18"
            element={<h1 className="story-topic">Danh Mục: truyen-cuoi-18</h1>}
          />
          <Route
            path="Tho-ca-cuoi"
            element={<h1 className="story-topic">Danh Mục: Tho-ca-cuoi</h1>}
          />
        </Routes>
        <Outlet />
      </div>
      <div className="content-right-wrapper">
        <h3>Danh mục truyện cười</h3>
        <div className="story-topic-list">
          <div className="story-topic-item">Câu đố mẹo</div>
          <div className="story-topic-item">Tây du ký chế</div>
          <div className="story-topic-item">Thơ ca cười</div>
          <div className="story-topic-item">Truyện cười 18</div>
          <div className="story-topic-item">Truyện cười công nghệ</div>
          <div className="story-topic-item">Truyện cười công sở</div>
          <div className="story-topic-item">Truyện cười dân gian</div>
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
