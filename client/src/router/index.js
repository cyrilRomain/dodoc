import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Accueil",
    component: () =>
      import(/* webpackChunkName: "HomeView" */ "../views/HomeView.vue"),
  },
  {
    path: "/spaces/:space_slug",
    name: "Espace",
    component: () =>
      import(/* webpackChunkName: "SpaceView" */ "../views/SpaceView.vue"),
  },
  {
    path: "/spaces/:space_slug/projects/:project_slug",
    name: "Projet",
    component: () =>
      import(/* webpackChunkName: "ProjectView" */ "../views/ProjectView.vue"),
  },
  {
    path: "/spaces/:space_slug/projects/:project_slug/publications/:publication_slug",
    name: "Publication",
    component: () =>
      import(
        /* webpackChunkName: "PublicationView" */ "../views/PublicationView.vue"
      ),
  },
];

const router = new VueRouter({
  mode: "history",
  base: "/",
  routes,
});

export default router;
