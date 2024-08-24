<template>
  <div>
    <v-col>
      <v-card align="center">
        <v-col cols="10">
          <v-row justify="space-between">
            <v-card-title> POSTS </v-card-title>
            <v-col cols="8">
              <v-row justify="space-between">
                <v-btn color="primary" rounded="lg" @click="add()">
                  New Post
                </v-btn>
                <v-btn color="primary" rounded="lg" @click="loadPosts()">
                  Reload Posts
                </v-btn>
              </v-row>
            </v-col>
          </v-row>
        </v-col>
      </v-card>
    </v-col>

    <v-col>
      <v-card align="center">
        <v-progress-circular v-if="loading" indeterminate></v-progress-circular>
        <v-list v-else lines="two">
          <post-item
            v-for="(post, i) in posts"
            :key="i"
            :post="post"
            @onDelete="deletePost(post.id)"
            @onEdit="edit(post)"
          />
        </v-list>
      </v-card>
    </v-col>
  </div>
</template>

<script lang="ts" setup>
import { Post } from "../model/post";
import { postApiCalls } from "../api/post/index";
import { useDialogStore } from "../stores/dialog";
import { ConfirmResult } from "@/components/models";

//? Store
const dialogStore = useDialogStore();

//? Models
const posts = ref<Post>([]);
const loading = ref(false);

//? Functions
const loadPosts = () => {
  loading.value = true;
  postApiCalls
    .getAll()
    .then((res) => {
      posts.value = res;
    })
    .finally(() => (loading.value = false));
};

const deletePost = (id: string) => {
  dialogStore.showConfirm({
    title: "delete post",
    text: "are you sure to delete post",
    agreeText: "Yes",
    disagreeText: "No",
    data: {
      id: id,
    },
  });
};

watch(
  () => dialogStore.confirmDialogResult,
  (res: ConfirmResult) => {
    if (res.agree) {
      deleteConfirm(res.data.id);
    }
  }
);

const deleteConfirm = (id: string) => {
  postApiCalls.delete(id).then((res) => {
    loadPosts();
  });
};

const add = () => {
  dialogStore.showModal({
    title: "Create post",
    color: "primary",
    content: {
      component: defineAsyncComponent(
        () => import("../components/post/Upsert.vue")
      ),
      props: {},
      emits: {
        onSubmit,
      },
    },
  });
};

const edit = (post: Post) => {
  dialogStore.showModal({
    title: "Edit post",
    color: "warning",
    content: {
      component: defineAsyncComponent(
        () => import("../components/post/Upsert.vue")
      ),
      props: {
        post: post,
      },
      emits: {
        onSubmit,
      },
    },
  });
};

const onSubmit = (post: Post) => {
  if (post.id == "") {
    postApiCalls.create(post).then((res) => {
      loadPosts();
      dialogStore.hideModal();
    });
  } else {
    postApiCalls.update(post.id, post).then((res) => {
      loadPosts();
      dialogStore.hideModal();
    });
  }
};

loadPosts();
</script>
