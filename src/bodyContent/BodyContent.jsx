import React from "react";

import "./bodyContent.scss";
import { Outlet } from "react-router-dom";

function BodyContent() {
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
