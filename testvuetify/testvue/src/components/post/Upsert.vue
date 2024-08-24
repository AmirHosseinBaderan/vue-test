<template>
  <v-col cols="12">
    <v-text-field
      variant="outlined"
      label="Title"
      placeholder="Title"
      clearable
      rounded="lg"
      v-model="localPost.title"
    />
    <v-text-field
      variant="outlined"
      label="Views"
      placeholder="Views"
      type="number"
      clearable
      rounded="lg"
      v-model="localPost.views"
    />
    <v-row justify="space-between">
      <v-col cols="6">
        <v-btn block :color="post ? 'warning' : 'primary'" @click="submit()">
          {{ post ? "Edit" : "Create" }}
        </v-btn>
      </v-col>
      <v-col cols="6">
        <v-btn block color="error"> Close </v-btn>
      </v-col>
    </v-row>
  </v-col>
</template>


<script setup lang="ts">
import { Post } from "@/model/post";

//? Emits
const emits = defineEmits(["onSubmit"]);

//? Props
const props = defineProps(["post"]);

//? Models
const localPost = ref<Post>({});

const submit = () => {
  emits("onSubmit", localPost.value);
};

const checkProps = () => {
  if (props.post) {
    localPost.value = {
      id: props.post.id,
      title: props.post.title,
      views: props.post.views,
    };
  }
};

checkProps();
</script>