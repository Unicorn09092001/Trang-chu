import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setShouldViewStoryContent, setCurrentStory } from "../Slice/currentStory";
import { searchByPage } from "./../service/services";
import { setCurrentStoryList, setIsHomePage } from "../Slice/currentStoryList";

function StoryByTopic({ topic }) {
  const dispatch = useDispatch();
  const { shouldViewStoryContent } = useSelector((state) => state.currentStory);
  const { currentStoryList } = useSelector((state) => state.currentStoryList);

  const [currentPage, setCurrentPage] = useState(1);
  const [lastPage, setLastPage] = useState(10);
  const [pageList, setPageList] = useState([1, 2, 3]);


  useEffect(() => {
    setLastPage(20);
  }, []);

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
          {currentStoryList?.data?.map((item, index) => {
            return (
              <div className="story-wrapper" key={index}>
                <NavLink
                  to={`story/id=${item?.id}`}
                  onClick={() => {
                    dispatch(setShouldViewStoryContent(true));
                    dispatch(setCurrentStory(item));
                  }}
                  className="story-title"
                >
                  {item?.name}
                </NavLink>
                <div className="public-time">Tháng Tư 11, 2022</div>
                <div className="dis-content">
                  Ở bưu cục nọ, có một lá thư đề người nhận là Thượng đế, Thiên
                  đường. Dĩ nhiên là không thể gửi nó đi, họ bèn mở ra xem, thư
                  viết: – “Gửi Thượng đế! Tôi là một bà lão tội nghiệp 80 tuổi.
                  Suốt cả đời, tôi chẳng đòi hỏi gì. Nhưng hiện nay […]
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
