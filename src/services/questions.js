import axios from "axios";
axios.defaults.baseURL = "https://64e49d81c555638029137fa3.mockapi.io/";

const getQuestions = (lessonId) => axios.get("question/?lesson_id=" + lessonId);
const addQuestion = (question) => {
  return axios.post("question/", { text: question.text, user: question.user, lesson_id: question.lesson_id, answers: [] })
};
const deleteQuestion = (id) => axios.delete("question/" + id);

const updateQuestion = (question) => axios.put("question/" + question.id, question);

const questionsApi = {
  getQuestions,
  addQuestion,
  deleteQuestion,
  updateQuestion
}

export default questionsApi;