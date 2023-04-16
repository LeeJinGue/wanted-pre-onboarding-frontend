import axios from "axios";
const baseURL = 'https://www.pre-onboarding-selection-task.shop/'
const instance = axios.create({
  baseURL,
  timeout: 1000,
  headers: {"Content-Type": "application/json"},
})
export default instance