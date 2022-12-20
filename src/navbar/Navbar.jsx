import React from "react";
import { useState } from "react";
import "./navbar.scss";
import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShouldViewStoryContent } from "../Slice/currentStory";
import {KeyboardArrowRight, KeyboardArrowDown} from "@mui/icons-material";

function Navbar() {
  const dispatch = useDispatch();
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);

  const handleChangePath = () => {
    dispatch(setShouldViewStoryContent(false));
    setIsOpenSubMenu(false);
  }

  return (
    <div className="header">
      <div className="bloginfo">
        <div className="title">
          <span>
            <NavLink to={"/"} onClick={handleChangePath}>TRUYỆN HAY</NavLink>
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
                onClick={handleChangePath}
              >
                Truyện cười vova
              </NavLink>
              <NavLink
                to={"/truyen-cuoi-tinh-yeu"}
                id="menu-item-7496"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7496"
                onClick={handleChangePath}
              >
                Truyện cười tình yêu
              </NavLink>
              <NavLink
                to={"/truyen-cuoi-18"}
                id="menu-item-7495"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7495"
                onClick={handleChangePath}
              >
                Truyện cười 18
              </NavLink>
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
                    <NavLink
                      to={"/Tho-ca-cuoi"}
                      onClick={handleChangePath}
                      id="menu-item-7499"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7499"
                    >
                      Thơ ca cười
                    </NavLink>
                    <NavLink
                      to={"/Tay-du-ky-che"}
                      onClick={handleChangePath}
                      id="menu-item-7498"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7498"
                    >
                      Tây du ký chế
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-cong-nghe"}
                      onClick={handleChangePath}
                      id="menu-item-7501"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7501"
                    >
                      Truyện cười công nghệ
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-cong-so"}
                      onClick={handleChangePath}
                      id="menu-item-7502"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7502"
                    >
                      Truyện cười công sở
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-dan-gian"}
                      onClick={handleChangePath}
                      id="menu-item-7503"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7503"
                    >
                      Truyện cười dân gian
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-danh-nhan"}
                      onClick={handleChangePath}
                      id="menu-item-7504"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7504"
                    >
                      Truyện cười danh nhân
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-gia-dinh"}
                      onClick={handleChangePath}
                      id="menu-item-7505"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7505"
                    >
                      Truyện cười gia đình
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-giao-thong"}
                      onClick={handleChangePath}
                      id="menu-item-7506"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7506"
                    >
                      Truyện cười giao thông
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-hoc-sinh"}
                      onClick={handleChangePath}
                      id="menu-item-7507"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7507"
                    >
                      Truyện cười học sinh
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-khoa-hoc"}
                      onClick={handleChangePath}
                      id="menu-item-7509"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7509"
                    >
                      Truyện cười khoa học
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-ngan"}
                      onClick={handleChangePath}
                      id="menu-item-7510"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7510"
                    >
                      Truyện cười ngắn
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-nha-binh"}
                      onClick={handleChangePath}
                      id="menu-item-7511"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7511"
                    >
                      Truyện cười nhà binh
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-nha-hang"}
                      onClick={handleChangePath}
                      id="menu-item-7512"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7512"
                    >
                      Truyện cười nhà hàng
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-phap-luat"}
                      onClick={handleChangePath}
                      id="menu-item-7514"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7514"
                    >
                      Truyện cười pháp luật
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-say-xin"}
                      onClick={handleChangePath}
                      id="menu-item-7515"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7515"
                    >
                      Truyện cười say xỉn
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-tam-quoc"}
                      onClick={handleChangePath}
                      id="menu-item-7516"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7516"
                    >
                      Truyện cười tam quốc
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-the-gioi"}
                      onClick={handleChangePath}
                      id="menu-item-7517"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7517"
                    >
                      Truyện cười thế giới
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-the-thao"}
                      onClick={handleChangePath}
                      id="menu-item-7518"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7518"
                    >
                      Truyện cười thể thao
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-ton-giao"}
                      onClick={handleChangePath}
                      id="menu-item-7520"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7520"
                    >
                      Truyện cười tôn giáo
                    </NavLink>
                    <NavLink
                      to={"/Truyen-cuoi-y-hoc"}
                      onClick={handleChangePath}
                      id="menu-item-7522"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7522"
                    >
                      Truyện cười y học
                    </NavLink>
                    <NavLink
                      to={"/Truyen-tieu-lam"}
                      onClick={handleChangePath}
                      id="menu-item-7523"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7523"
                    >
                      Truyện tiếu lâm
                    </NavLink>
                    <NavLink
                      to={"/Truyen-trang-quynh"}
                      onClick={handleChangePath}
                      id="menu-item-7524"
                      className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7524"
                    >
                      Truyện trạng Quỳnh
                    </NavLink>
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
