import { configureStore } from "@reduxjs/toolkit";
import { lessonsReducer } from "./lessonsSlice";
import { questionsReducer } from "./questionsSlice";

export const store = configureStore({
  reducer: {
    lessons: lessonsReducer,
    questions: questionsReducer
  },
});