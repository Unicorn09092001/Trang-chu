import { createSlice } from "@reduxjs/toolkit";

const currentStorySlice = createSlice({
  name: "currentStory",
  initialState: {
    currentStory: {},
    shouldViewStoryContent: false,
  },
  reducers: {
    setCurrentStory: (state, action) => {
      state.currentStory = action.payload;
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
