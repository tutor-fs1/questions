import axios from "axios";

axios.defaults.baseURL = "https://64e49d81c555638029137fa3.mockapi.io/";

const getLessons = () => {
  return axios.get("lesson/");
}

const addLesson = (name) => axios.post("lesson/", { name: name });
const deleteLesson = (id) => axios.delete("lesson/" + id);

const lessonsApi = {
  getLessons,
  addLesson,
  deleteLesson
};

export default lessonsApi;