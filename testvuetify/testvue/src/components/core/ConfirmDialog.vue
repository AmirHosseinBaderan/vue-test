<script setup lang="ts">
import { useDialogStore } from "../../stores/dialog";

// Store
const dialogStore = useDialogStore();

// Function
const action = (res: boolean) => {
  if (res) {
    dialogStore.confirmResponse({
      agree: true,
      data: dialogStore.confirmDialog.data,
    });
  }
  dialogStore.hideConfirm();
};
</script>

<template>
    <v-dialog v-model="dialogStore.confirmVisible" persistent max-width="290">
      <v-card>
        <v-card-title class="text-h5">
          {{ dialogStore.confirmDialog.title }}
        </v-card-title>
        <v-card-text>{{ dialogStore.confirmDialog.text }}</v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" variant="text" @click="action(false)">
            {{ dialogStore.confirmDialog.disagreeText }}
          </v-btn>
          <v-btn color="success" variant="text" @click="action(true)">
            {{ dialogStore.confirmDialog.agreeText }}
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
</template>