import axios from "axios";
axios.defaults.baseURL = "https://64e49d81c555638029137fa3.mockapi.io/question";

const getQuestions = (lessonId) => axios.get("/?lesson_id=" + lessonId);
const addQuestion = (text, user, lessonId) => axios.post("/", { text: text, user: user, lesson_id: lessonId, answers: [] });
const deleteQuestion = (id) => axios.delete("/" + id);
const updateQuestion = (question) => axios.put("/" + question.id, { ...question });

const questionsApi = {
  getQuestions,
  addQuestion,
  deleteQuestion,
  updateQuestion
}

export default questionsApi;