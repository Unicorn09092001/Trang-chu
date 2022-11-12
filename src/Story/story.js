import { configureStore } from "@reduxjs/toolkit";
import currentStory from "../Slice/currentStory";

const rootReducer = {
  currentStory: currentStory,
};

const store = configureStore({ reducer: rootReducer });

export default store;
