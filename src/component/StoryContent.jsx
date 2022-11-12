import React from "react";
import "./storyContent.scss";

function StoryContent() {
  return (
    <div className="story-content-wrapper">
      <div className="story-title">Bưu cục thó mất rồi</div>
      <div className="public-time">Tháng Tư 11, 2022</div>
      <div className="story-content">
        Ở bưu cục nọ, có một lá thư đề người nhận là Thượng đế, Thiên đường. Dĩ
        nhiên là không thể gửi nó đi, họ bèn mở ra xem, thư viết:<p></p>– “Gửi
        Thượng đế! Tôi là một bà lão tội nghiệp 80 tuổi. Suốt cả đời, tôi chẳng
        đòi hỏi gì. Nhưng hiện nay tôi đang rất cần 100 đôla. Xin Người hãy rủ
        lòng thương mà ban số tiền đó cho kẻ già này”.<p></p> – Cả bưu cục mủi
        lòng, mỗi người quyên góp một ít tiền, được 90 đôla gửi cho bà cụ. Hôm
        sau, bà lão gửi thư khác, cũng cho Thượng đế. Lần này ông giám đốc gọi
        tất cả nhân viên tới để nghe đọc lời cảm ơn:<p></p> – “Thưa Thượng đế,
        tôi xin cảm ơn Ngài với tấm lòng sâu sắc. Nhưng tôi chỉ nhận được có 90
        đôla, còn 10 đôla đã bị bọn bưu cục “thó” mất rồi!”.
      </div>
      <div className="underline"></div>
      <div className="author">appnetmedia</div>
    </div>
  );
}

export default StoryContent;
