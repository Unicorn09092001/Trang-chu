import React, { useState, useEffect, useRef } from "react";

import "./bodyContent.scss";
import { NavLink, Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route } from "react-router-dom";
import StoryByTopic from "../component/StoryByTopic";
import StoryContent from "../component/StoryContent";
import { searchByCategory, searchByName, searchByPage, searchCategoryList } from "service/services";
import { setCurrentStoryList, setPageTotal } from "Slice/currentStoryList";
import { setCurrentStory, setShouldViewStoryContent } from "Slice/currentStory";

function BodyContent({ storyList }) {
  const dispatch = useDispatch();
  const { currentStory } = useSelector((state) => state.currentStory);
  const { currentStoryList } = useSelector((state) => state.currentStoryList);
  const [categoryList, setCategoryList] = useState([]);

  const searchInput = useRef();

  useEffect(() => {
    searchByPage(1).then(({ data }) => {
      dispatch(setCurrentStoryList([...currentStoryList, ...data?.data]));
      dispatch(setPageTotal(data?.last_page));
    });
    searchCategoryList().then(({ data }) => {
      setCategoryList([...data]);
    });
  }, []);

  const handleSearch = () => {
    searchByName(encodeURIComponent(toNonAccentVietnamese(searchInput.current.value))).then(({data}) => {
      dispatch(setCurrentStoryList([...data]));
      dispatch(setPageTotal(data.length));
    })
  }

  const toNonAccentVietnamese = (str) => {
    str = str.replace(/A|Á|À|Ã|Ạ|Â|Ấ|Ầ|Ẫ|Ậ|Ă|Ắ|Ằ|Ẵ|Ặ/g, "A");
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, "a");
    str = str.replace(/E|É|È|Ẽ|Ẹ|Ê|Ế|Ề|Ễ|Ệ/, "E");
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, "e");
    str = str.replace(/I|Í|Ì|Ĩ|Ị/g, "I");
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, "i");
    str = str.replace(/O|Ó|Ò|Õ|Ọ|Ô|Ố|Ồ|Ỗ|Ộ|Ơ|Ớ|Ờ|Ỡ|Ợ/g, "O");
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, "o");
    str = str.replace(/U|Ú|Ù|Ũ|Ụ|Ư|Ứ|Ừ|Ữ|Ự/g, "U");
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, "u");
    str = str.replace(/Y|Ý|Ỳ|Ỹ|Ỵ/g, "Y");
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, "y");
    str = str.replace(/Đ/g, "D");
    str = str.replace(/đ/g, "d");
    // Some system encode vietnamese combining accent as individual utf-8 characters
    str = str.replace(/\u0300|\u0301|\u0303|\u0309|\u0323/g, ""); // Huyền sắc hỏi ngã nặng 
    str = str.replace(/\u02C6|\u0306|\u031B/g, ""); // Â, Ê, Ă, Ơ, Ư
    return str;
}

  return (
    <div className="container">
      <div className="content-left-wrapper">
        <div className="search-wrapper">
          <input placeholder="Tên truyện" ref={searchInput} />
          <button className="btn-search" onClick={handleSearch}>Tìm kiếm</button>
        </div>
        <h2 className="title">Truyện cười mới</h2>
        <div className="new-story-list">
        {currentStoryList && currentStoryList.map((story, index) => (
          index < 5 &&
          <div className="story-item">
            <NavLink
                  to={`story/id=${story?.id}`}
                  onClick={() => {
                    dispatch(setShouldViewStoryContent(true));
                    dispatch(setCurrentStory(story));
                  }}
                  className="story-title"
                >
                  {story?.story_name}
                </NavLink>
          </div>
        ))}
        </div>
      </div>
      <div className="content-center-wrapper">
        <Routes>
          <Route
            path="/"
            element={<StoryByTopic storyList={storyList} topic={"home"} />}
          >
            <Route
              path={`story/id=${currentStory.id}`}
              element={<StoryContent story={currentStory} />}
            />
          </Route>
          {categoryList &&
            categoryList.map((category) => (
              <Route
                key={category?.id}
                path={`${category?.category_name}/`}
                element={
                  <StoryByTopic
                    topic={`Danh Mục: truyện ${category?.category_name}`}
                  />
                }
              >
                <Route
                  path={`story/id=${currentStory.id}`}
                  element={<StoryContent story={currentStory} />}
                />
              </Route>
            ))}
        </Routes>
        <Outlet />
      </div>
      <div className="content-right-wrapper">
        <h3>Danh mục truyện cười</h3>
        <div className="story-topic-list">
          {categoryList &&
            categoryList?.map((category) => (
              <div className="story-topic-item" key={category?.id}>
                <NavLink
                  key={category?.id}
                  to={`/${category?.category_name}`}
                  id="menu-item-7497"
                  className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7497"
                  onClick={() => {
                    dispatch(setShouldViewStoryContent(false));
                    searchByCategory(category?.id).then(({ data }) => {
                      dispatch(setCurrentStoryList([...data.data]));
                    });
                  }}
                >
                  {category?.category_name}
                </NavLink>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default BodyContent;
