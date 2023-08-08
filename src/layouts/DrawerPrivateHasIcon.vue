<template>
  <q-scroll-area
    class="scrollArea--backgroundImage"
    @mouseover="$emit('miniHover')"
    @mouseout="$emit('miniUnHover')"
  >
    <q-list padding @click="$emit('miniClick')">
      <ExpandsionItem
        v-for="node in nodes"
        :key="node.id"
        :node="node"
        @miniClick="$emit('miniClick')"
        @miniHover="$emit('miniHover')"
        @miniUnHover="$emit('miniUnHover')"
      />
    </q-list>
  </q-scroll-area>
  <!-- logo header menu -->
  <q-img
    class="absolute-top header_container"
    src="https://cdn.quasar.dev/img/material.png"
    @mouseover="$emit('miniHover')"
    @mouseout="$emit('miniUnHover')"
  >
    <div class="absolute-bottom bg-transparent header_div">
      <q-avatar size="56px" class="q-mb-sm header_avatar">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png" />
      </q-avatar>
      <div class="header_text">Name</div>
      <div class="infor_text">infor</div>
    </div>
  </q-img>
</template>

<script>
const listmenu = [
  {
    id: "dardboard",
    label: "Dardboard",
    icon: "drafts",
    route: { name: "home" },
  },
  {
    id: "managements",
    label: "Management",
    icon: "settings_suggest",
    route: null,
    childrens: [
      {
        id: "agents",
        label: "Agents",
        icon: "groups",
        route: null,
        childrens: [
          {
            id: "install",
            label: "Agents.Install",
            icon: "engineering",
            route: { name: "agents_install" },
          },
        ],
      },
      {
        id: "dardboard3",
        label: "Dardboard3",
        icon: "drafts",
        route: { path: "/home3" },
      },
    ],
  },
];

import ExpandsionItem from "/src/layouts/ExpandsionItem.vue";
import { ref } from "vue";
export default {
  name: "DrawerPrivateIcon",
  components: {
    ExpandsionItem,
  },
  emits: ["miniHover", "miniUnHover", "miniClick"],
  setup() {
    const nodes = ref(listmenu);
    console.log(nodes.value);
    return { nodes };
  },
};
</script>

<style scoped>
.header_container {
  height: 150px;
}
a {
  text-decoration: none;
  color: white;
}

.q-drawer--mini .header_container {
  height: 50px !important;
}

.q-drawer--mini .header_text,
.q-drawer--mini .infor_text {
  display: none;
}

.q-drawer--mini .header_div {
  padding: 0px;
}
.q-drawer--mini .header_avatar {
  font-size: 50px !important;
  margin: 3px 0px 0px 3px;
}

.q-drawer--mini .scrollArea--backgroundImage {
  margin-top: 50px;
  height: calc(100% - 50px);
}
</style>
<style global>
.scrollArea--backgroundImage {
  height: calc(100% - 150px);
  margin-top: 150px;
  color: white;
  background-color: #2ca8ff;
  background-repeat: repeat-y;
  background-origin: padding-box;
  background-size: 300px;
}
.scrollArea--backgroundImage .q-focusable,
.scrollArea--backgroundImage .q-hoverable {
  background-color: transparent;
}
.scrollArea--backgroundImage .expand-icon {
  color: white;
}
.menu--active {
  background-color: #44b1fe !important;
  color: white;
}
.menu_exact--active {
  background-color: #ffffff !important;
  color: #70c8ff;
  border-radius: 3px;
  margin-right: 1px;
  margin-left: 1px;
}
.header_background--color {
  background: linear-gradient(90deg, #0c2646 0, #204065 60%, #2a5788);
}

.menu_partent:has(.menu--active) {
  color: rgb(225, 225, 101);
}

.menu_children:has(.menu--active) {
  color: rgb(225, 225, 101);
}

.menu_partent .q-expansion-item__content {
  color: white !important;
}
</style>
