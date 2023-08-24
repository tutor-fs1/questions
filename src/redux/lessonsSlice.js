import { createSlice } from "@reduxjs/toolkit";
import { getLessons, addLesson, deleteLesson } from "./operations.js";

const lessonsSlice = createSlice({
  name: "lessons",
  initialState: {
    items: [],
    isLoading: false,
    isAdding: false,
    error: null,
    selected: null
  },
  reducers: {
    selectLesson(state, action) {
      state.selected = action.payload === state.selected ? null : action.payload;
    }
  },
  extraReducers: {
    [getLessons.pending](state) {
      state.isLoading = true;
    },
    [getLessons.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getLessons.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    // Add lesson
    [addLesson.pending](state) {
      state.isAdding = true;
    },
    [addLesson.fulfilled](state, action) {
      state.isAdding = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [addLesson.rejected](state, action) {
      state.isAdding = false;
      state.error = action.payload;
    },
    // Delete lesson
    [deleteLesson.fulfilled](state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

  },
});

export const { selectLesson } = lessonsSlice.actions;

export const lessonsReducer = lessonsSlice.reducer;