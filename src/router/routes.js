const PublicLayout = () =>
  import(/* webpackChunkName: "layout" */ "layouts/PublicLayout.vue");
const PrivateLayout = () =>
  import(/* webpackChunkName: "group-user" */ "layouts/PrivateLayout.vue");
const Signin = () =>
  import(/* webpackChunkName: "auth" */ "pages/auth/Signin.vue");

const routes = [
  {
    path: "/signin",
    name: "signin",
    component: Signin,
    alias: ["/login", "/logon"],
  },
  {
    path: "/",
    component: PrivateLayout,
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("pages/IndexPage.vue"),
        alias: ["/"],
      },
    ],
    meta: { requiresAuth: true },
  },
  {
    path: "/agents",
    name: "agents",
    component: PrivateLayout,
    children: [
      {
        path: "install",
        name: "agents_install",
        component: () => import("pages/agents/Install.vue"),
      },
    ],
    meta: { requiresAuth: true },
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
