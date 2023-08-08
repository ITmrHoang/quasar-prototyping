//action type
export const LOGIN = "login";
export const LOGOUT = "logout";
export const CHECK_AUTH = "check_auth";

// mutations
export const SET_AUTH = "set_auth";
export const PURGE_AUTH = "purge_auth";
export const SET_ERROR = "set_error";
export const SET_IS_AUTH = "set_is_auth";
import MyStorage from "src/services/MyStorage";
//  service api
import authApi from "src/services/api/authApi.js";

const state = () => {
  return {
    errors: null,
    user: null,
    token: null,
    isAuthenticated: true,
    // isAuthenticated: !!MyStorage.auth.getToken(),
  };
};

const getters = {
  currentUser(state) {
    return state.user;
  },
  isAuthenticated(state) {
    return state.isAuthenticated;
  },
  getErrors(state) {
    return state.errors;
  },
};

const actions = {
  [LOGIN](context, credentials) {
    return new Promise((resolve, rej) => {
      authApi
        .login(credentials)
        .then((data) => {
          context.commit(SET_AUTH, data);
          MyStorage.auth.saveToken(data);
          resolve(data);
        })
        .catch((er) => {
          context.commit(SET_ERROR, er);
          rej(er);
        });
    });
  },
  [LOGOUT](context) {
    context.commit(PURGE_AUTH);
  },
  [CHECK_AUTH](context) {
    if (!!MyStorage.auth.getToken()) {
      authApi
        .checkAuth()
        .then((result) => {
          context.commit(SET_IS_AUTH, result);
        })
        .catch(() => context.commit(PURGE_AUTH));
    } else {
      context.commit(PURGE_AUTH);
    }
  },
};

const mutations = {
  [SET_ERROR](state, error) {
    state.errors = error;
    // state.isAuthenticated = false;
  },
  [SET_AUTH](state, token) {
    state.isAuthenticated = true;
    state.token = token;
    state.errors = null;
  },
  [SET_IS_AUTH](state, payload) {
    state.isAuthenticated = payload.data;
    state.errors = payload.errors;
  },
  [PURGE_AUTH](state) {
    // state.isAuthenticated = false;
    state.user = null;
    state.errors = null;
    state.token = null;
    MyStorage.auth.destroyToken();
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
