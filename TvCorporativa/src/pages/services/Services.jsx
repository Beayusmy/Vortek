import axios from "axios";

const apiPortaHttps = "7048";

const baseURL = `https://localhost:${apiPortaHttps}/api/`;

const api = axios.create({
  baseURL,
});

export default api;
