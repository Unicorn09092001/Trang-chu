import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  setShouldViewStoryContent,
  setCurrentStory,
} from "../Slice/currentStory";
import { searchByPage } from "./../service/services";
import { setCurrentStoryList, setIsHomePage } from "../Slice/currentStoryList";
import moment from "moment/moment";

function StoryByTopic({ topic }) {
  const dispatch = useDispatch();
  const { shouldViewStoryContent } = useSelector((state) => state.currentStory);
  const { currentStoryList, pageTotal } = useSelector(
    (state) => state.currentStoryList
  );

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(pageTotal);
  const [pageList, setPageList] = useState([1, 2, 3]);

  useEffect(() => {
    searchByPage(currentPage).then(({ data }) => {
      dispatch(setCurrentStoryList([...data.data]));
    });
    setLastPage(pageTotal);
  }, [currentPage, dispatch, pageTotal]);

  const handleChangePage = (pageNew) => {
    if (pageNew > 0 && pageNew <= lastPage) {
      setCurrentPage(pageNew);
    }
    if (pageNew > 1 && pageNew < lastPage) {
      let pageListNew = pageList.map((page) =>
        pageNew > currentPage ? page + 1 : page - 1
      );
      setPageList(pageListNew);
    } else if (pageNew === lastPage) {
      setPageList([lastPage - 2, lastPage - 1, lastPage]);
    } else if (pageNew === 1) {
      setPageList([1, 2, 3]);
    }
  };

  return (
    <div>
      <Outlet />
      {!shouldViewStoryContent && (
        <>
          {topic !== "home" ? <h1 className="story-topic">{topic}</h1> : ""}
          {currentStoryList?.map((story, index) => {
            return (
              <div className="story-wrapper" key={index}>
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
                <div className="public-time">
                  {moment(story?.created).format("DD/MM/YYYY")}
                </div>
                <div className="dis-content">
                  {story?.content
                    .replaceAll("<p>", "")
                    .replaceAll("</p>", "")
                    .replaceAll("<br/>", "")}
                </div>
              </div>
            );
          })}
          <div className="btn-change-page-wrapper">
            <div
              className="btn-change-page"
              onClick={() => handleChangePage(currentPage - 1)}
            >
              Previous Page
            </div>
            <div className="page-list">
              {currentPage > 3 && (
                <>
                  <div
                    className="btn-change-page"
                    onClick={() => handleChangePage(1)}
                  >
                    {1}
                  </div>
                  <div className="btn-change-page">...</div>
                </>
              )}
              {pageList.map((page) => (
                <div key={page}>
                  {page === currentPage ? (
                    <div className="btn-change-page active">{page}</div>
                  ) : (
                    <div
                      className="btn-change-page"
                      onClick={() => handleChangePage(page)}
                    >
                      {page}
                    </div>
                  )}
                </div>
              ))}
              {currentPage < lastPage - 2 && (
                <>
                  <div className="btn-change-page">...</div>
                  <div
                    className="btn-change-page"
                    onClick={() => handleChangePage(lastPage)}
                  >
                    {lastPage}
                  </div>
                </>
              )}
            </div>
            <div
              className="btn-change-page"
              onClick={() => handleChangePage(currentPage + 1)}
            >
              Next Page
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StoryByTopic;
