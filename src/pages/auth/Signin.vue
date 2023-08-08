<template>
  <q-layout>
    <q-page-container>
      <q-page
        class="window-height window-width row justify-center items-center"
        style="background: linear-gradient(135deg, #f6f6f6 0%, #3f52e3 100%)"
      >
        <div class="column">
          <div class="row" style="justify-content: center">
            <q-card
              bordered
              class="q-pa-md q-ma-none no-shadow"
              style="width: 360px; max-height: 98vh; overflow: scroll"
            >
              <q-img
                spinner-color="white"
                style="max-height: 236px; max-width: 384px"
              />
              <q-card-section>
                <div class="text-center text-grey-5">
                  {{ $t("auth.enterSignin") }}
                </div>
              </q-card-section>
              <q-card-section>
                <q-form class="q-gutter-md" @submit="onLogin" id="form_login">
                  <q-input
                    dense
                    filled
                    clearable
                    autofocus
                    v-model="username"
                    type="text"
                    :rules="[(val) => !!val || $t('validations.required')]"
                    :label="$t('auth.username')"
                  >
                    <template v-slot:prepend>
                      <q-icon name="email" />
                    </template>
                  </q-input>
                  <q-input
                    dense
                    filled
                    clearable
                    v-model="password"
                    :rules="[(val) => !!val || $t('validations.required')]"
                    :type="show ? 'text' : 'password'"
                    :label="$t('auth.password')"
                  >
                    <template v-slot:prepend>
                      <q-icon name="lock" />
                    </template>
                    <template v-slot:append>
                      <q-icon
                        @click="show = !show"
                        :name="show ? 'visibility' : 'visibility_off'"
                      />
                    </template>
                  </q-input>
                </q-form>
              </q-card-section>
              <q-card-actions>
                <div class="row full-width items-center">
                  <div class="col-12">
                    <q-btn
                      outline
                      rounded
                      size="md"
                      color="red-6"
                      class="full-width text-white"
                      :label="$t('auth.signin')"
                      type="submit"
                      form="form_login"
                      f
                    />
                  </div>
                  <div class="col-7">
                    <ChosseLanguage showLael />
                  </div>
                  <div class="col-5">
                    <p
                      class="q-mt-xs text-no-wrap text-grey text-caption text-right"
                      style="margin: auto auto"
                    >
                      {{ $t("auth.forgotPassword") }}
                    </p>
                  </div>
                </div>
              </q-card-actions>
              <q-card-section>
                <p class="text-caption text-weight-light text-grey"></p>
              </q-card-section>
            </q-card>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { useI18n } from "vue-i18n";
import ChosseLanguage from "components/common/ChosseLanguage.vue";
import { ref } from "vue";
import MyStorage from "src/services/MyStorage.js";
import { mapGetters } from "vuex";

import { LOGIN, CHECK_AUTH } from "src/store/auth.module.js";
import { Notify } from "quasar";

Notify.create({
  message: "Wellcome!",
});
export default {
  name: "SiginFrom",
  data() {
    const { locale } = useI18n({ useScope: "global" });
    return {
      username: "",
      password: "",
    };
  },
  components: {
    ChosseLanguage,
  },
  methods: {
    onLogin() {
      this.$store
        .dispatch(LOGIN, {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          const redirect = this.$route.query?.redirect;
          if (redirect) {
            this.$router.push({ path: redirect });
          } else {
            this.$router.push({ name: "home" });
          }
        });
    },
  },
  computed: {
    ...mapGetters({
      isAuth: "isAuthenticated",
    }),
  },
  mounted() {
    if (this.$store.getters.isAuthenticated) {
      const redirect = this.$route.query?.redirect;
      if (redirect) {
        this.$router.push({ path: redirect });
      } else {
        this.$router.push({ name: "home" });
      }
    }
  },
  watch: {
    isAuth() {
      if (this.$store.getters.isAuthenticated) {
        const redirect = this.$route.query?.redirect;
        if (redirect) {
          this.$router.push({ path: redirect });
        } else {
          this.$router.push({ name: "home" });
        }
      }
    },
  },
  setup() {
    const { locale } = useI18n({ useScope: "global" });
    const show = ref(false);

    // thiết lập data và method
    return {
      locale,
      show,
      langs: [
        { key: "en-US", label: "English" },
        { key: "vi-VN", label: "Việt Nam" },
      ],
    };
  },
};
</script>

<style></style>
