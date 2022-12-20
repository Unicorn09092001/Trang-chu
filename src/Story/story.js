import { configureStore } from "@reduxjs/toolkit";
import currentStory from "../Slice/currentStory";
import currentStoryList from "../Slice/currentStoryList";

const rootReducer = {
  currentStory: currentStory,
  currentStoryList: currentStoryList,
};

const store = configureStore({ reducer: rootReducer });

export default store;
