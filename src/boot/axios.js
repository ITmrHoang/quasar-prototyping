import { boot } from "quasar/wrappers";
import axios from "axios";
import MyStorage from "src/services/MyStorage";
import { isEmpty } from "src/services/Helper";

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)
const api = axios.create({ baseURL: process.env.BASE_URL });
// Add a request interceptor
api.interceptors.request.use(handleSendRequest, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// funtion handleSendRequest

function handleSendRequest(config) {
  const token = MyStorage.auth.getToken();
  // console.log(
  //   config,
  //   "interceptors request",
  //   token,
  //   typeof token,
  //   !isEmpty(token)
  // );
  if (!isEmpty(token)) {
    config.headers["Authorization"] = `Bearer ${token}`;
  }
  // Do something before request is sent
  return config;
}

// Add a response interceptor
api.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    response.headers["Access-Control-Allow-Origin"] = "*";
    return response?.data ?? response;
  },
  function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  }
);

// Override timeout default for the library
// Now all requests using this instance will wait 2.5 seconds before timing out
api.defaults.timeout = 2500;

export default boot(({ app }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios;
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api;
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
});

export { axios, api };
