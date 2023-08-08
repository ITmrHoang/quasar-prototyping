<template>
  <q-layout view="lHh Lpr lff">
    <!-- reveal hiển thị elevated  viền bóng -dải phân cách -->
    <q-header reveal elevated class="header_background--color text-white">
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          <q-avatar>
            <img src="src" />
          </q-avatar>
          heade
        </q-toolbar-title>
        <!-- <q-btn flat round dense icon="search" class="q-mr-xs" /> -->
        <q-btn-dropdown stretch flat label="">
          <q-list>
            <q-item-label class="q-py-xs" header>Header</q-item-label>
            <q-item
              v-for="n in 3"
              :key="`x.${n}`"
              clickable
              v-close-popup
              tabindex="0"
              class="q-py-none"
            >
              <q-item-section>
                <q-item-label>Photos</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="info" />
              </q-item-section>
            </q-item>
            <q-separator inset spaced />
            <q-item
              clickable
              v-close-popup
              tabindex="0"
              @click.prevent="HandleLogout"
            >
              <q-item-section>
                <q-item-label class="text-center">{{
                  $t("auth.logout")
                }}</q-item-label>
              </q-item-section>
              <q-item-section side>
                <q-icon name="exit_to_app" />
              </q-item-section>
            </q-item>
          </q-list>
        </q-btn-dropdown>
        <ChosseLanguage flag />

        <q-btn flat round dense icon="group_add" />
      </q-toolbar>
    </q-header>
    <!--overlay chế độ lớp phủ-->
    <!--

      @click.capture="drawerClick"
      @mouseover="miniState = false"
      @mouseout="miniState = true"
     -->
    <q-drawer
      v-model="leftDrawerOpen"
      :mini="hover ? false : miniState"
      :breakpoint="500"
      show-if-above
      bordered
    >
      <DrawerPrivateHasIcon
        @miniHover="hover = true"
        @miniUnHover="hover = false"
        @miniClick="miniState = false"
      ></DrawerPrivateHasIcon>
      <div class="q-mini-drawer-hide absolute" style="top: 10px; right: 0px">
        <q-btn
          class="rotate-270"
          dense
          round
          unelevated
          size="12px"
          color="primary"
          icon="navigation"
          @click="miniState = true"
        ></q-btn>
      </div>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg" />
          </q-avatar>
          footer
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>
  </q-layout>
</template>

<script>
import { defineComponent, ref, computed, watch } from "vue";
import ChosseLanguage from "src/components/common/ChosseLanguage.vue";
import DrawerPrivateHasIcon from "./DrawerPrivateHasIcon.vue";
import { LOGOUT } from "src/store/auth.module";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default defineComponent({
  name: "PrivateLayout",
  components: { ChosseLanguage, DrawerPrivateHasIcon },
  setup() {
    const store = useStore();
    const router = useRouter();
    const leftDrawerOpen = ref(false);
    const miniState = ref(false);
    const hover = ref(false);

    const isAuth = computed(() => {
      return store.getters.isAuthenticated;
    });
    watch(isAuth, (newIsAuth) => {
      if (!newIsAuth) {
        router.push({ name: "signin" });
      }
    });
    const HandleLogout = () => {
      store.dispatch(LOGOUT).finally(() => {
        router.push({ path: "/login" });
      });
    };

    return {
      hover,
      isAuth,
      leftDrawerOpen,
      miniState,
      HandleLogout,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      drawerClick(e) {
        // if in "mini" state and user
        // click on drawer, we switch it to "normal" mode
        if (miniState.value) {
          miniState.value = false;

          // notice we have registered an event with capture flag;
          // we need to stop further propagation as this click is
          // intended for switching drawer to "normal" mode only
          e.stopPropagation();
        }
      },
    };
  },
});
</script>

<style scoped></style>
