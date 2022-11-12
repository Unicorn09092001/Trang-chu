import React from "react";
import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShouldViewStoryContent } from "../Slice/currentStory";

function Navbar() {
  const dispatch = useDispatch();
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  return (
    <div className="header">
      <div className="bloginfo">
        <div className="title">
          <span>
            <NavLink to={"/"}>TRUYỆN CƯỜI HAY</NavLink>
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
              <NavLink
                to={"/truyen-cuoi-voca"}
                id="menu-item-7497"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7497"
                onClick={() => {
                  dispatch(setShouldViewStoryContent(false));
                  setIsOpenSubMenu(false);
                }}
              >
                Truyện cười vova
              </NavLink>
              <NavLink
                to={"/truyen-cuoi-tinh-yeu"}
                id="menu-item-7496"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7496"
                onClick={() => setIsOpenSubMenu(false)}
              >
                Truyện cười tình yêu
              </NavLink>
              <NavLink
                to={"/truyen-cuoi-18"}
                id="menu-item-7495"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7495"
                onClick={() => setIsOpenSubMenu(false)}
              >
                Truyện cười 18
              </NavLink>
              <li
                id="menu-item-7508"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-7508"
                onClick={() => {
                  setIsOpenSubMenu(!isOpenSubMenu);
                }}
              >
                Truyện cười khác
                {isOpenSubMenu && (
                  <ul className="sub-menu">
                    <NavLink
                      to={"/Tho-ca-cuoi"}
                      id="menu-item-7499"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7499"
                    >
                      Thơ ca cười
                    </NavLink>
                    <li
                      id="menu-item-7498"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7498"
                    >
                      Tây du ký chế
                    </li>
                    <li
                      id="menu-item-7501"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7501"
                    >
                      Truyện cười công nghệ
                    </li>
                    <li
                      id="menu-item-7502"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7502"
                    >
                      Truyện cười công sở
                    </li>
                    <li
                      id="menu-item-7503"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7503"
                    >
                      Truyện cười dân gian
                    </li>
                    <li
                      id="menu-item-7504"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7504"
                    >
                      Truyện cười danh nhân
                    </li>
                    <li
                      id="menu-item-7505"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7505"
                    >
                      Truyện cười gia đình
                    </li>
                    <li
                      id="menu-item-7506"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7506"
                    >
                      Truyện cười giao thông
                    </li>
                    <li
                      id="menu-item-7507"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7507"
                    >
                      Truyện cười học sinh
                    </li>
                    <li
                      id="menu-item-7509"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7509"
                    >
                      Truyện cười khoa học
                    </li>
                    <li
                      id="menu-item-7510"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7510"
                    >
                      Truyện cười ngắn
                    </li>
                    <li
                      id="menu-item-7511"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7511"
                    >
                      Truyện cười nhà binh
                    </li>
                    <li
                      id="menu-item-7512"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7512"
                    >
                      Truyện cười nhà hàng
                    </li>
                    <li
                      id="menu-item-7514"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7514"
                    >
                      Truyện cười pháp luật
                    </li>
                    <li
                      id="menu-item-7515"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7515"
                    >
                      Truyện cười say xỉn
                    </li>
                    <li
                      id="menu-item-7516"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7516"
                    >
                      Truyện cười tam quốc
                    </li>
                    <li
                      id="menu-item-7517"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7517"
                    >
                      Truyện cười thế giới
                    </li>
                    <li
                      id="menu-item-7518"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7518"
                    >
                      Truyện cười thể thao
                    </li>
                    <li
                      id="menu-item-7520"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7520"
                    >
                      Truyện cười tôn giáo
                    </li>
                    <li
                      id="menu-item-7522"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7522"
                    >
                      Truyện cười y học
                    </li>
                    <li
                      id="menu-item-7523"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7523"
                    >
                      Truyện tiếu lâm
                    </li>
                    <li
                      id="menu-item-7524"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7524"
                    >
                      Truyện trạng Quỳnh
                    </li>
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
