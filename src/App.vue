<template>
  <router-view />
</template>

<script>
import { computed, defineComponent } from "vue";
import MyStorage from "src/services/MyStorage";
import store from "./store";
import { mapGetters, useStore } from "vuex";
import { CHECK_AUTH } from "src/store/auth.module.js";
import { ref, watch } from "vue";

export default defineComponent({
  name: "App",
  beforeCreate() {
    this.$store.dispatch(CHECK_AUTH);
  },
});
</script>
