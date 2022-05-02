<script setup lang="ts">
import { Article } from "~/components/ArticleList.vue";
const route = useRoute();

const { data, error, pending } = await useFetch<Article[]>(
  "https://api.hnpwa.com/v0/news/1.json"
);
</script>

<template>
  <section>
    <ArticleList :articles="data" />
    <NuxtLink v-if="$route.params.id" :to="'/' + route.params.id + 1">
      <p>{{ route.params.id + 1 }}</p>
    </NuxtLink>
    <div class="text-right">
      <NuxtLink to="/2">
        <p class="text-blue-500">Next</p>
      </NuxtLink>
    </div>

    <section v-if="error">
      <p>{{ JSON.stringify(error, null, 2) }}</p>
    </section>
  </section>
</template>
