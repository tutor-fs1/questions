import lessonsApi from "../services/lessons";
import questionsApi from "../services/questions";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const updateQuestion = createAsyncThunk(
  "questions/updateOne",
  async (payload, thunkAPI) => {
    try {
      const response = await questionsApi.updateQuestion(payload);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addQuestion = createAsyncThunk(
  "questions/addOne",
  async (payload, thunkAPI) => {
    try {
      const response = await questionsApi.addQuestion(payload);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getQuestions = createAsyncThunk(
  "questions/getAll",
  async (id, thunkAPI) => {
    try {
      const response = await questionsApi.getQuestions(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const getLessons = createAsyncThunk(
  "lessons/getAll",
  async (id, thunkAPI) => {
    try {
      const response = await lessonsApi.getLessons();
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const addLesson = createAsyncThunk(
  "lessons/addOne",
  async (nume, thunkAPI) => {
    try {
      const response = await lessonsApi.addLesson(nume);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);

export const deleteLesson = createAsyncThunk(
  "lessons/deleteOne",
  async (id, thunkAPI) => {
    try {
      const response = await lessonsApi.deleteLesson(id);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  }
);