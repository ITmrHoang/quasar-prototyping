import { store } from "quasar/wrappers";
import { createStore } from "vuex";
import auth from "src/store/auth.module.js";

// import example from './module-example'

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */
const myLoger = (store) => {
  // called when the store is initialized
  store.subscribe((mutation, state) => {
    console.log(
      `logerStore \n state: ${JSON.stringify(state, null, 2)} \n\n muation:
       \n ${JSON.stringify(mutation, null, 2)}`
    );
    // called after every mutation.
    // The mutation comes in the format of `{ type, payload }`.
  });

  // store.subscribeAction((action, state) => {
  //   console.log(
  //     `logerAction \n state: ${JSON.stringify(state, null, 2)} \n\n action:
  //      \n ${JSON.stringify(mutation, null, 2)}`
  //   );
  // });
  store.subscribeAction({
    before: (action, state) => {
      console.log(`before action \n state: ${JSON.stringify(
        state,
        null,
        2
      )} \n\n action:
      \n ${JSON.stringify(action, null, 2)}`);
    },
    after: (action, state) => {
      console.log(`after action state: ${JSON.stringify(
        state,
        null,
        2
      )} \n\n action:
      \n ${JSON.stringify(action, null, 2)}`);
    },
  });
};
export default store(function (/* { ssrContext } */) {
  const Store = createStore({
    modules: {
      auth,
      // examples
    },
    // plugin middleware
    plugins: [myLoger],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING,
  });

  return Store;
});
