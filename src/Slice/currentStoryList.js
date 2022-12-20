import { createSlice } from "@reduxjs/toolkit";

const currentStoryListSlice = createSlice({
  name: "currentStoryList",
  initialState: {
    currentStoryList: {
      current_page: 1,
      data: [
        {
          id: 1,
          name: "Ai lấy ngục Bastille?",
          content:
            "<p>Trong giờ học lịch sử nước Pháp, cô giáo thấy Vôva lơ đãng bất thình lình hỏi: “Vôva, ai đã lấy ngục Bastille?”</p><p>- Thưa cô, em không lấy ạ.</p><p>Cô giáo giận quá, mời phụ huynh đến trường. Cô giáo nói:<br/><br/>- Trong giờ lịch sử nước Pháp, tôi hỏi ai đã lấy ngục Bastille, Vôva đã không chịu nghe giảng lại còn trả lời: “Thưa cô, em không lấy ạ”. Bác thấy thế có chịu được không cơ chứ.</p><p>Ông bố Vôva đáp:</p><p>- Cháu nhà tôi vốn thật thà, cháu đã nói không lấy ngục Bastille nghĩa là nó không lấy đâu. Tuy nhiên, để tôi về nhà xem nó có cất ở nhà không.</p><p>Cô giáo bực quá, lên mách hiệu trưởng. Chẳng dè, hiệu trưởng nói:</p><p>- Trẻ con có trót lấy thì nó chơi chán lại trả thôi mà.</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
        {
          id: 2,
          name: "Nó hình gì?",
          content:
            "<p>Để hiểu học trò hơn, cô giáo bảo học sinh vẽ vào một tờ giấy mơ ước mai sau của mình. Khi cô xem, có em vẽ hình máy bay tỏ ý muốn làm phi công, em thì vẽ ống nghe muốn làm bác sĩ… Riêng Natasha để tờ giấy trắng nguyên, cô hỏi:</p><p>- Chẳng lẽ lớn lên em không muốn làm gì cả sao?</p><p>Natasha băn khoăn đáp:</p><p>- Lớn lên em sẽ lấy chồng, nhưng chẳng biết nó hình gì?</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
        {
          id: 3,
          name: "Vova nghĩ bậy.",
          content:
            "<p>Vova đi chơi với Nana. Vova chọn 1 cái ghế đá ngồi xuống, khổ đây là lần đầu tiên nên Vova lúng túng lắm không biết nói gì cả. Nghĩ mãi Vova đanh liều nói 1 câu :</p><p>- Nana, ấy đang nghĩ gì thế?<br/> - Tớ nghĩ giống ấy !!!!!Nana trả lời bẽn lẽn.</p><p>Bỗng Vova cười ha hả:<br/> - Khiếp sao ấy bậy thế!!!!!!!</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
        {
          id: 4,
          name: "Vova và câu hỏi dành cho cô giáo",
          content:
            "<p>Trong giờ học, cô giáo muốn phát triển trí tưởng tượng và khả năng cảm nhận của học sinh nhỏ tuổi; cô đưa ra mấy câu hỏi như sau:</p><p>- Các con hãy nghĩ xem, cái gì màu xám và rất là cứng?<br/> - Bê tông ạ!<br/> Cô giáo:<br/> - Giỏi quá. Nhưng mà nó còn có thể là nhựa đường nữa, thế còn cái gì màu vàng, và ở trên cánh đồng?<br/> - Con bò ạ!<br/> - Đúng rồi! Nhưng còn có thể là đống rơm nữa,<br/> Vova lẩm bẩm, từ phía cuối lớp:<br/> - Hmmm…<br/> Cô giáo:<br/> - Em đứng lên ngay.<br/> Vova:<br/> - Thế em hỏi một câu được không?<br/> Cô giáo thận trọng:<br/> - Em thử nói đi!<br/> - Thế cái gì trước khi cho vào miệng thì nó cứng, thẳng và khô ráo, còn sau khi ra khỏi miệng thì nó mềm nhũn, cong queo và ướt nhem?<br/> Cô giáo đứng phắt dậy, mặt đỏ bừng, tiến thẳng đến tát rất kêu vào mặt Vova.<br/> Vova xoa xoa má:<br/> - Đúng rồi! Nhưng nó còn có thể là kẹo cao su nữa!</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
        {
          id: 5,
          name: "Vova và thầy giáo dự giờ",
          content:
            "<p>Tiết tiếng Anh</p><p>Hôm nay lớp học của Vova có một số thầy giáo đến dự giờ. Cô giáo và các bạn học sinh đã chuẩn bị tất cả tình huống có thể xảy ra để buổi học diễn ra được “an toàn”. Nửa tiếng trôi qua êm đẹp, còn 15 phút nữa là hết giờ, cô giáo liền hỏi học sinh câu hỏi cuối cùng: </p><p>- Bây giờ cô sẽ viết một câu tiếng Anh lên bảng, các em hãy cố gắng dịch nó ra tiếng Tây Ban Nha nhé! <br/>Cô giáo đang viết dở câu thì viên phấn bị rơi, cô cúi xuống nhặt và tiếp tục viết cho hết câu. <br/>- Và bây giờ ai sẽ dịch được câu này? <br/>Vova lập tức giơ tay. Cô giáo thì rất run, nhìn quanh lớp nhưng ngoài Vova ra thì chẳng có ai giơ tay cả. Cô giáo đành chỉ định Vova phát biểu. <br/>Vova rất tự tin nói dõng dạc: <br/>- Giá mà cái váy nó ngắn hơn tí nữa!<br/></p><p>Cô giáo đỏ mặt, quát :<br/>- Cái gì? Em ra ngay khỏi lớp học cho tôi!<br/>Vova thu gom sách vở xong rồi quay lại nhìn thầy giáo dự giờ lẩm bẩm : <br/>- Đã không biết thì đừng có nhắc !!</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
        {
          id: 6,
          name: "Vova trông em.",
          content:
            "<p>Vova phải trông em cho bố mẹ đi xuống phố mua sắm, cậu đành phải cho em theo đi câu cá. Tối hôm đó, cậu dằn dỗi với mẹ:<br/>- Từ nay con không cho em đi câu nữa đâu. Chỉ mất công, chả được con cá nào!<br/>- Ồ! Nó quấy khóc làm cá sợ phải không? Lần sau em sẽ quen, thôi không khóc nữa.<br/>- Không phải thế! Em đã ăn hết mồi câu của con.</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
        {
          id: 7,
          name: "Cây son môi.",
          content:
            "<p>Trong giờ học cô giáo đang giảng bài về con cò và con gấu. Để mở đầu cô giáo hỏi học sinh:<br/> - cô hỏi cả lớp con gì biết bay nè!<br/> Mọi cánh tay đều giơ lên trong đó có vova là giơ cao nhất và chưa đợi cô mời cu cậu đã đứng phắt lên trả lời :<br/> -Thưa cô là con chim ạ .<br/> Không đúng ý cô, cô hơi bực:<br/> -Em nghĩ vậy nhưng cô nghĩ khác, cô nghĩ đó là con cò .<br/> -Vậy các em cho cô biết con gì sống trong rừng có lông lá đầy mình ?<br/> Lại la vo-va:<br/> -Thưa cô đó là con khỉ ạ!<br/> Lần này thì cô giáo bực thiệt rồi:<br/> -Em nghĩ vậy nhưng cô nghĩ là con gấu. Các em còn muốn hỏi gì nữa không ?<br/> Lại cu vova:-Thưa cô, vậy em đố cô chứ cái gì dài khoảng 10 cm, thụt ra thụt vào mà phụ nữ rất thích?<br/> Cô giáo nghe xong đỏ cả mặt,liền mắng:<br/> -Vova đố bậy cô đuổi em ra khỏi lớp bây giờ.<br/> -Thưa cô cô nghĩ như thế nhưng theo em đó là……cây son môi!</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
        {
          id: 8,
          name: "Vova trong giờ kể chuyện..",
          content:
            "<p> <br/>Cô giáo đang đọc truyện “Ba chú heo con” cho các bé nghe đến đoạn một chú heo gặp bác nông dân và xin rơm:</p><p>- Bác ơi, cho cháu xin ít rơm nhé!</p><p>Cô giáo ngừng lại hỏi Vova:<br/><br/>- Con có biết bác nông dân nói gì không?</p><p>Vova :</p><p>- Thưa cô, bác ấy bảo: “Trời ơi! Một con heo biết nói!”.</p><p>- Cô giáo tức đỏ mặt, vừa học bài “Sự tích bánh chưng, bánh dày”, Cô lại hỏi tiếp:</p><p>-Thế em có biết bánh chưng có từ bao giờ không?</p><p>- Tính theo mùa thì có từ giáp Tết, tính theo ngày thì có tại hàng quà sáng lúc 5 giờ ạ!</p><p>Cô giáo tức không chịu được liền mắng :</p><p>- Em có biết tuần này đã bị điểm 2 lần thứ ba rồi không? Vova :</p><p>- Thưa cô, em đã hiểu ý nghĩa câu: “Ghét của nào trời trao của ấy”.</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
        {
          id: 9,
          name: "Vova cướp công bố",
          content:
            "<p>Mẹ Vova sinh em bé. Mọi người đến chúc mừng:<br/>- Anh giỏi quá, sinh được cháu bé kháu khỉnh và giống anh như đúc!<br/>- Ê. . ê, đấy là công của cháu, bố cháu làm được gì nào!<br/>- Thằng này láo! Tao hì hục mãi, công của mày là thế nào? – bố Vova quát.<br/>- Đấy là do con lấy kim chọc thủng tất cả comdom mà lại!. .</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
        {
          id: 10,
          name: "Đứng bằng chim.",
          content:
            "<p>Vô va đi học về, mặt buồn thiu<br/>Bố hỏi:</p><p>- Vô va, sao con buồn thế?<br/>Vô va:</p><p>- Hôm nay con bị điểm 0 môn thể dục<br/>- Sao lại bị 0 điểm? con giỏi môn thể dục lắm cơ mà?<br/>- Hôm nay, Trong giờ thể dục, cô giáo bảo : “Giơ chân trái lên, rồi giơ tiếp chân phải lên… ”</p><p>Bố Vova: -  Thế thì đứng bằng chim à??<br/>- Con cũng nói thế và cô giáo cho con 0 điểm !</p>",
          cat_id: 1,
          category: [
            {
              id: 1,
              name: "Vova",
              count: 124,
              ordering: 27,
            },
          ],
        },
      ],
      first_page_url:
        "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=1",
      from: 1,
      last_page: 185,
      last_page_url:
        "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=185",
      links: [
        {
          url: null,
          label: "&laquo; Previous",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=1",
          label: "1",
          active: true,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=2",
          label: "2",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=3",
          label: "3",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=4",
          label: "4",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=5",
          label: "5",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=6",
          label: "6",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=7",
          label: "7",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=8",
          label: "8",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=9",
          label: "9",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=10",
          label: "10",
          active: false,
        },
        {
          url: null,
          label: "...",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=184",
          label: "184",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=185",
          label: "185",
          active: false,
        },
        {
          url: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=2",
          label: "Next &raquo;",
          active: false,
        },
      ],
      next_page_url:
        "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list?page=2",
      path: "http://be37-2001-ee0-40c1-5f53-84fe-da50-66f4-33b4.ap.ngrok.io/api/stories/list",
      per_page: 10,
      prev_page_url: null,
      to: 10,
      total: 1844,
    },
    //currentStoryList: null,
    isHomePage: true,
  },
  reducers: {
    setCurrentStoryList: (state, action) => {
      state.currentStoryList = action.payload;
    },
    setIsHomePage: (state, action) => {
      state.isHomePage = action.payload;
    }
  },
});

const {
  actions: { setCurrentStoryList, setIsHomePage },
  reducer,
} = currentStoryListSlice;

export { setCurrentStoryList, setIsHomePage };

export default reducer;
