import axios, { AxiosInstance } from "axios";

export const ApiService: AxiosInstance = axios.create({
  baseURL: 'https://api.mailjet.com/v3.1',
  headers: {'Content-Type': 'application/json'},
  auth: {username: process.env.USERNAME??'', password: process.env.PASSWORD??''},
});