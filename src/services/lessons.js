import axios from "axios";

axios.defaults.baseURL = "https://64e49d81c555638029137fa3.mockapi.io/lesson";

const getLessons = () => axios.get("/");
const addLesson = (name) => axios.post("/", { name: name });
const deleteLesson = (id) => axios.delete("/" + id);

const lessonsApi = {
  getLessons,
  addLesson,
  deleteLesson
};

export default lessonsApi;