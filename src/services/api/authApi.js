import { axios, api } from "src/boot/axios";
// list uri
const LOGIN_URI = "/security/user/authenticate";
const CHECK_AUTH = "/";

const login = (credentials) => {
  return new Promise((resolve, reject) => {
    api
      .post(LOGIN_URI, null, {
        auth: credentials,
      })
      .then((res) => {
        resolve(res.data.token);
      })
      .catch((er) => {
        console.log(er);
        reject(er?.response?.data?.detail ?? "System have error");
      });
  });
};

const checkAuth = () => {
  return new Promise((resolve, reject) => {
    api
      .get(CHECK_AUTH)
      .then((res) => {
        return resolve({ data: true, errors: null });
      })
      .catch((er) => {
        reject({
          data: false,
          errors: er?.response?.data?.detail ?? "System have error",
        });
      });
  });
};
// case 2 return api
// const checkAuth = async () => {
//   try {
//     const { data } = await api.get(CHECK_AUTH);
//     if (data) {
//       return await Promise.resolve({ data: true, errors: null });
//     } else {
//       return await Promise.reject({
//         data: false,
//         errors: er?.response?.data?.detail ?? "System have error",
//       });
//     }
//   } catch (er) {
//     return await Promise.reject({
//       data: false,
//       errors: er?.response?.data?.detail ?? "System have error",
//     });
//   }
// };
export default {
  login,
  checkAuth,
};
