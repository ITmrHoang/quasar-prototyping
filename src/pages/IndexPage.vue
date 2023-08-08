<template>
  <q-page class="">
    <div v-for="i in 20" :key="i">
      a <br />
      ba
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "IndexPage",
});
</script>
