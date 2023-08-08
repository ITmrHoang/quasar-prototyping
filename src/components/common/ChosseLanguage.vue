<template>
  <div :class="flag ? '' : 'q-mt-xs q-pa-xs'" style="max-width: 300px">
    <q-select
      dense
      v-model="lang"
      borderless
      :options="langs"
      :label="showLael && !flag ? $t('chosseLanguage') : ''"
      :hide-dropdown-icon="flag"
    >
      <template v-slot:option="scope">
        <q-item v-bind="scope.itemProps">
          <q-item-section>
            <q-item-label caption>{{ scope.opt.label }}</q-item-label>
          </q-item-section>
          <q-item-section avatar>
            <q-icon :name="scope.opt.icon" />
          </q-item-section>
        </q-item>
      </template>
      <template v-if="flag" v-slot:selected>
        <q-icon
          style="
            position: relative;
            width: 20px;
            height: 20px;
            transform: translate(-19%, -26%);
          "
          v-if="lang"
          :name="lang.icon"
        />
        <q-badge v-else>locale</q-badge>
      </template>
    </q-select>
  </div>
</template>

<script>
import { useI18n } from "vue-i18n";
import { ref } from "vue";
import MyStorage from "src/services/MyStorage";

export default {
  name: "ChosseLanguage",
  props: {
    showLael: Boolean,
    flag: Boolean,
  },
  data() {
    const { locale } = useI18n({ useScope: "global" });
    // set value for compoent
    return {
      locale,
    };
  },
  watch: {
    lang(val, oldVal) {
      this.locale = val.key;
      MyStorage.lang.setLang(val.key);
    },
  },
  created() {
    const language = MyStorage.lang.getLang();
    this.locale = language;
  },
  setup() {
    let { locale } = useI18n({ useScope: "global" });
    const langs = [
      { key: "en-US", label: "English", icon: "img:icons/language-uk.png" },
      { key: "vi-VN", label: "Việt Nam", icon: "img:icons/language-vi.png" },
    ];
    const language = MyStorage.lang.getLang();

    const item_lang = langs.find((item) => item.key == language);
    const lang = ref(item_lang);

    // return data and method for compent

    return {
      lang,
      langs,
    };
  },
};
</script>

<style></style>
