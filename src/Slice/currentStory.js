import { createSlice } from "@reduxjs/toolkit";

const currentStorySlice = createSlice({
  name: "currentStory",
  initialState: {
    title: "",
    author: "",
    publicTime: "",
    content: "",
    shouldViewStoryContent: false,
  },
  reducers: {
    setCurrentStory: (state, action) => {
      state.title = action.payload.title;
      state.author = action.payload.author;
      state.publicTime = action.payload.publicTime;
      state.content = action.payload.content;
    },
    setShouldViewStoryContent: (state, action) => {
      state.shouldViewStoryContent = action.payload;
    },
  },
});

const {
  actions: { setCurrentStory, setShouldViewStoryContent },
  reducer,
} = currentStorySlice;

export { setCurrentStory, setShouldViewStoryContent };

export default reducer;
