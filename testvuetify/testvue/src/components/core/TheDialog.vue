<script setup lang="ts">
import { useDialogStore } from "../../stores/dialog";

const dialogStore = useDialogStore();

const hide = () => {
  dialogStore.modalVisible = false;
};
</script>

<template>
  <v-dialog
    transition="dialog-top-transition"
    v-model="dialogStore.modalVisible"
    max-width="800px"
    persistent
  >
    <v-card v-if="dialogStore.modalVisible">
      <v-toolbar elevation="4" :color="dialogStore.dialog.color" dark>
        <v-list-item-title>{{ dialogStore.dialog.title }}</v-list-item-title>
        <v-spacer></v-spacer>
        <v-btn icon @click="hide">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </v-toolbar>
      <component
        :is="dialogStore.dialog.content.component"
        v-bind="dialogStore.dialog.content.props"
        v-on="dialogStore.dialog.content.emits"
      />
    </v-card>
  </v-dialog>
</template>