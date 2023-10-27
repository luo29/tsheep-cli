import axios from "axios";

const BASE_URL = "http://127.0.0.1:7001";

const request = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
});

function onSuccess(response) {
  return response.data;
}
function onFailed(error) {
  return Promise.reject(error);
}

request.interceptors.response.use(onSuccess, onFailed);

export default request
