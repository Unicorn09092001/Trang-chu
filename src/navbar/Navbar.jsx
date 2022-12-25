import React from "react";
import { useState, useEffect } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShouldViewStoryContent } from "../Slice/currentStory";
import { KeyboardArrowRight, KeyboardArrowDown } from "@mui/icons-material";
import { searchCategoryList, searchByCategory, searchByPage } from "service/services";
import { setCurrentStoryList } from "Slice/currentStoryList";

function Navbar() {
  const dispatch = useDispatch();
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  const [categoryList, setCategoryList] = useState([]);

  // const handleChangePath = (id) => {
  //   dispatch(setShouldViewStoryContent(false));
  //   setIsOpenSubMenu(false);
  // };

  useEffect(() => {
    searchCategoryList().then(({ data }) => {
      setCategoryList([...data]);
    });
  }, []);

  return (
    <div className="header">
      <div className="bloginfo">
        <div className="title">
          <span>
            <NavLink
              to={"/"}
              onClick={() => {
                dispatch(setShouldViewStoryContent(false));
                searchByPage(1).then(({ data }) => {
                  dispatch(setCurrentStoryList([...data.data]));
                });
                setIsOpenSubMenu(false);
              }}
            >
              TRUYỆN HAY
            </NavLink>
          </span>
        </div>
        <div className="description">
          <span>Truyện cười hay &#8211; Kho truyện cười lớn nhất Việt Nam</span>
        </div>
      </div>
      <div className="nav">
        <div className="items">
          <div className="menu-menu-chinh-container">
            <ul id="menu-menu-chinh" className="menu">
              {categoryList &&
                categoryList?.map(
                  (category, index) =>
                    index < 4 && (
                      <NavLink
                        key={category?.id}
                        to={`/${category?.category_name}`}
                        id="menu-item-7497"
                        className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7497"
                        onClick={() => {
                          dispatch(setShouldViewStoryContent(false));
                          setIsOpenSubMenu(false);
                          searchByCategory(category?.id).then(({ data }) => {
                            dispatch(setCurrentStoryList([...data.data]));
                          });
                        }}
                      >
                        {category?.category_name}
                      </NavLink>
                    )
                )}
              <li
                id="menu-item-7508"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-7508"
                style={{ display: "flex", alignItems: "center" }}
                onClick={() => {
                  setIsOpenSubMenu(!isOpenSubMenu);
                }}
              >
                Truyện cười khác
                {isOpenSubMenu ? <KeyboardArrowDown /> : <KeyboardArrowRight />}
                {isOpenSubMenu && (
                  <ul className="sub-menu">
                    {categoryList &&
                      categoryList?.map(
                        (category, index) =>
                          index > 3 && (
                            <li>
                              <NavLink
                                key={category?.id}
                                to={`/${category?.category_name}`}
                                onClick={() => {
                                  dispatch(setShouldViewStoryContent(false));
                                  setIsOpenSubMenu(false);
                                  searchByCategory(category?.id).then(
                                    ({ data }) => {
                                      dispatch(
                                        setCurrentStoryList([...data.data])
                                      );
                                    }
                                  );
                                }}
                                id="menu-item-7499"
                                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7499"
                              >
                                {category?.category_name}
                              </NavLink>
                            </li>
                          )
                      )}
                  </ul>
                )}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
