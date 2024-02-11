import axios from "axios";
import {
  requestInterceptor,
  requestErrorInterceptor,
  responseInterceptor,
  responseErrorInterceptor,
} from "./interceptors";

const masterInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

masterInstance.interceptors.request.use(
  (config) => requestInterceptor(config, masterInstance),
  (error) => requestErrorInterceptor(error, masterInstance)
);

masterInstance.interceptors.response.use(
  (response) => responseInterceptor(response, masterInstance),
  (error) => responseErrorInterceptor(error, masterInstance)
);


export default masterInstance;