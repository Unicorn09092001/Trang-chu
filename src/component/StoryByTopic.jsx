import React, { useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setShouldViewStoryContent } from "../Slice/currentStory";

function StoryByTopic() {
  const dispatch = useDispatch();
  const { shouldViewStoryContent } = useSelector((state) => state.currentStory);

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
          <h1 className="story-topic">Danh Mục: truyen cuoi voca</h1>
          <div className="story-wrapper">
            <NavLink
              to={"bai1"}
              onClick={() => dispatch(setShouldViewStoryContent(true))}
              className="story-title"
            >
              Bưu cục thó mất rồi
            </NavLink>
            <div className="public-time">Tháng Tư 11, 2022</div>
            <div className="dis-content">
              Ở bưu cục nọ, có một lá thư đề người nhận là Thượng đế, Thiên
              đường. Dĩ nhiên là không thể gửi nó đi, họ bèn mở ra xem, thư
              viết: – “Gửi Thượng đế! Tôi là một bà lão tội nghiệp 80 tuổi. Suốt
              cả đời, tôi chẳng đòi hỏi gì. Nhưng hiện nay […]
            </div>
          </div>
          <div className="story-wrapper">
            <div className="story-title">
              Những câu đố mẹo vui có đáp án – Phần 2
            </div>
            <div className="public-time">Tháng Tư 12, 2022</div>
            <div className="dis-content">
              Mời các bạn tiếp tục xem những câu đố vui mẹo có đáp án cực hay.
              Đây là phần tiếp theo của Những câu đố mẹo vui có đáp án – phần 1
              Câu đố 30: Cơ quan quan trọng nhất của phụ nữ là gì ? Đáp án: Hội
              Liên Hiệp Phụ Nữ. Câu đố 31: […]
            </div>
          </div>
          <div className="story-wrapper">
            <div className="story-title">
              Những câu đố mẹo vui có đáp án – Phần 2
            </div>
            <div className="public-time">Tháng Tư 12, 2022</div>
            <div className="dis-content">
              Mời các bạn tiếp tục xem những câu đố vui mẹo có đáp án cực hay.
              Đây là phần tiếp theo của Những câu đố mẹo vui có đáp án – phần 1
              Câu đố 30: Cơ quan quan trọng nhất của phụ nữ là gì ? Đáp án: Hội
              Liên Hiệp Phụ Nữ. Câu đố 31: […]
            </div>
          </div>
          <div className="story-wrapper">
            <div className="story-title">
              Những câu đố mẹo vui có đáp án – Phần 2
            </div>
            <div className="public-time">Tháng Tư 12, 2022</div>
            <div className="dis-content">
              Mời các bạn tiếp tục xem những câu đố vui mẹo có đáp án cực hay.
              Đây là phần tiếp theo của Những câu đố mẹo vui có đáp án – phần 1
              Câu đố 30: Cơ quan quan trọng nhất của phụ nữ là gì ? Đáp án: Hội
              Liên Hiệp Phụ Nữ. Câu đố 31: […]
            </div>
          </div>
          <div className="story-wrapper">
            <div className="story-title">
              Những câu đố mẹo vui có đáp án – Phần 2
            </div>
            <div className="public-time">Tháng Tư 12, 2022</div>
            <div className="dis-content">
              Mời các bạn tiếp tục xem những câu đố vui mẹo có đáp án cực hay.
              Đây là phần tiếp theo của Những câu đố mẹo vui có đáp án – phần 1
              Câu đố 30: Cơ quan quan trọng nhất của phụ nữ là gì ? Đáp án: Hội
              Liên Hiệp Phụ Nữ. Câu đố 31: […]
            </div>
          </div>
          <div className="story-wrapper">
            <div className="story-title">
              Những câu đố mẹo vui có đáp án – Phần 2
            </div>
            <div className="public-time">Tháng Tư 12, 2022</div>
            <div className="dis-content">
              Mời các bạn tiếp tục xem những câu đố vui mẹo có đáp án cực hay.
              Đây là phần tiếp theo của Những câu đố mẹo vui có đáp án – phần 1
              Câu đố 30: Cơ quan quan trọng nhất của phụ nữ là gì ? Đáp án: Hội
              Liên Hiệp Phụ Nữ. Câu đố 31: […]
            </div>
          </div>
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
