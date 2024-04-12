import axios from "axios";

export const apiDevPerformance = axios.create({
  baseURL: "http://localhost:3001",
});
