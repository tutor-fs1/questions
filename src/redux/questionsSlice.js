import { createSlice } from "@reduxjs/toolkit";
import { getQuestions, addQuestion, updateQuestion } from "./operations";

const questionsSlice = createSlice({
  name: "questions",
  initialState: {
    items: [],
    isLoading: false,
    isAdding: false,
    error: null,
    selectedQuestion: null
  },
  reducers: {
    clearItems(state) {
      state.items = [];
    },
    setSelectQuestion(state, action) {
      state.selectedQuestion = action.payload === state.selectedQuestion ? null : action.payload;
    }
  },
  extraReducers: {
    [getQuestions.pending](state) {
      state.isLoading = true;
    },
    [getQuestions.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [getQuestions.rejected](state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },
    //
    [addQuestion.fulfilled](state, action) {
      state.isAdding = false;
      state.error = null;
      state.items.push(action.payload);
    },
    // edit question 
    [updateQuestion.fulfilled](state, action) {
      const indexQuestion = state.items.findIndex((q) => q.id === action.payload.id);
      if (indexQuestion !== -1) {
        state.items[indexQuestion] = action.payload;
      }
    }
  }
});

export const { clearItems, setSelectQuestion } = questionsSlice.actions;
export const questionsReducer = questionsSlice.reducer;