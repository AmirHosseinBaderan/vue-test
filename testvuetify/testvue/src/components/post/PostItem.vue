<template>
  <v-list-item :subtitle="post.views" :title="post.title">
    <template v-slot:append>
      <v-col>
        <v-row>
          <v-btn
            color="error"
            icon="mdi-delete"
            variant="text"
            @click="$emit('onDelete', post.id)"
          ></v-btn>
          <v-btn color="warning" icon="mdi-pencil" variant="text"  @click="$emit('onEdit', post)"></v-btn>
        </v-row>
      </v-col>
    </template>
  </v-list-item>
</template>

<script setup lang="ts">
//? props
const props = defineProps(["post"]);

defineEmits(["onDelete","onEdit"]);
</script>