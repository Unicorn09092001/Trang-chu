import { createSlice } from "@reduxjs/toolkit";

const currentStoryListSlice = createSlice({
  name: "currentStoryList",
  initialState: {
    currentStoryList: [],
    pageTotal: 0,
    isHomePage: true,
  },
  reducers: {
    setCurrentStoryList: (state, action) => {
      state.currentStoryList = action.payload;
    },
    setIsHomePage: (state, action) => {
      state.isHomePage = action.payload;
    },
    setPageTotal: (state, action) => {
      state.pageTotal = action.payload;
    },
  },
});

const {
  actions: { setCurrentStoryList, setIsHomePage, setPageTotal },
  reducer,
} = currentStoryListSlice;

export { setCurrentStoryList, setIsHomePage, setPageTotal };

export default reducer;
