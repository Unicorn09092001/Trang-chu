import React from "react";
import { useState } from "react";
import "./navbar.scss";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

function Navbar() {
  const [isOpenSubMenu, setIsOpenSubMenu] = useState(false);
  return (
    <div className="header">
      <div className="bloginfo">
        <div className="title">
          <span>
            <a href="/">TRUYỆN CƯỜI HAY</a>
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
              <li
                id="menu-item-7497"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7497"
              >
                Truyện cười vova
              </li>
              <li
                id="menu-item-7496"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7496"
              >
                Truyện cười tình yêu
              </li>
              <li
                id="menu-item-7495"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7495"
              >
                Truyện cười 18
              </li>
              <li
                id="menu-item-7508"
                className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-has-children menu-item-7508"
              >
                Truyện cười khác
                <KeyboardArrowRightIcon />
                <ul className="sub-menu">
                  <li
                    id="menu-item-7499"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7499"
                  >
                    <a href="https://truyencuoihay.vn/tho-ca-cuoi">
                      Thơ ca cười
                    </a>
                  </li>
                  <li
                    id="menu-item-7498"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7498"
                  >
                    <a href="https://truyencuoihay.vn/tay-du-ky-che">
                      Tây du ký chế
                    </a>
                  </li>
                  <li
                    id="menu-item-7501"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7501"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-cong-nghe">
                      Truyện cười công nghệ
                    </a>
                  </li>
                  <li
                    id="menu-item-7502"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7502"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-cong-so">
                      Truyện cười công sở
                    </a>
                  </li>
                  <li
                    id="menu-item-7503"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7503"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-dan-gian">
                      Truyện cười dân gian
                    </a>
                  </li>
                  <li
                    id="menu-item-7504"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7504"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-danh-nhan">
                      Truyện cười danh nhân
                    </a>
                  </li>
                  <li
                    id="menu-item-7505"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7505"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-gia-dinh">
                      Truyện cười gia đình
                    </a>
                  </li>
                  <li
                    id="menu-item-7506"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7506"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-giao-thong">
                      Truyện cười giao thông
                    </a>
                  </li>
                  <li
                    id="menu-item-7507"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7507"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-hoc-sinh">
                      Truyện cười học sinh
                    </a>
                  </li>
                  <li
                    id="menu-item-7509"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7509"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-khoa-hoc">
                      Truyện cười khoa học
                    </a>
                  </li>
                  <li
                    id="menu-item-7510"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7510"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-ngan">
                      Truyện cười ngắn
                    </a>
                  </li>
                  <li
                    id="menu-item-7511"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7511"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-nha-binh">
                      Truyện cười nhà binh
                    </a>
                  </li>
                  <li
                    id="menu-item-7512"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7512"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-nha-hang">
                      Truyện cười nhà hàng
                    </a>
                  </li>
                  <li
                    id="menu-item-7514"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7514"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-phap-luat">
                      Truyện cười pháp luật
                    </a>
                  </li>
                  <li
                    id="menu-item-7515"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7515"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-say-xin">
                      Truyện cười say xỉn
                    </a>
                  </li>
                  <li
                    id="menu-item-7516"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7516"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-tam-quoc">
                      Truyện cười tam quốc
                    </a>
                  </li>
                  <li
                    id="menu-item-7517"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7517"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-the-gioi">
                      Truyện cười thế giới
                    </a>
                  </li>
                  <li
                    id="menu-item-7518"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7518"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-the-thao">
                      Truyện cười thể thao
                    </a>
                  </li>
                  <li
                    id="menu-item-7520"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7520"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-ton-giao">
                      Truyện cười tôn giáo
                    </a>
                  </li>
                  <li
                    id="menu-item-7522"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7522"
                  >
                    <a href="https://truyencuoihay.vn/truyen-cuoi-y-hoc">
                      Truyện cười y học
                    </a>
                  </li>
                  <li
                    id="menu-item-7523"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7523"
                  >
                    <a href="https://truyencuoihay.vn/truyen-tieu-lam">
                      Truyện tiếu lâm
                    </a>
                  </li>
                  <li
                    id="menu-item-7524"
                    className="menu-item menu-item-type-taxonomy menu-item-object-category menu-item-7524"
                  >
                    <a href="https://truyencuoihay.vn/truyen-trang-quynh">
                      Truyện trạng Quỳnh
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
