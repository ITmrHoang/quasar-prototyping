<template>
  <div v-if="hasChildren">
    <q-expansion-item
      expand-separator
      :content-inset-level="0.3"
      :label="$t(node.label)"
      :icon="node.icon"
      :to="node.route ?? null"
      :class="isChildren ? 'menu_children' : 'menu_partent'"
      active-class="menu--active"
      exact-active-class="menu_exact--active"
      expand-icon-class="expand-icon"
    >
      <ExpandsionItem
        v-for="child in node.childrens"
        :key="child.id"
        :node="child"
        isChildren
        @miniClick="$emit('miniClick')"
        @miniHover="$emit('miniHover')"
        @miniUnHover="$emit('miniUnHover')"
      />
    </q-expansion-item>
  </div>
  <div v-else @click="$emit('miniClick')">
    <q-item
      clickable
      v-ripple
      :to="node.route ?? ''"
      active-class="menu--active"
      exact-active-class="menu_exact--active"
    >
      <!-- <q-btn flat> -->
      <q-item-section avatar>
        <q-icon :name="node.icon" />
      </q-item-section>
      <q-item-section> {{ $t(node.label) }} </q-item-section>
      <!-- </q-btn> -->
    </q-item>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";
export default {
  name: "ExpandsionItem",
  props: {
    node: {
      type: Object,
      required: true,
    },
    isChildren: {
      type: Boolean,
    },
  },
  emits: ["miniHover", "miniUnHover", "miniClick"],

  computed: {
    nodeMargin() {
      return {
        "margin-left": `${this.spacing}px`,
      };
    },
    hasChildren() {
      const { childrens } = this.node;
      return childrens && childrens.length > 0;
    },
  },
};
</script>
