<script setup lang="ts">

import { Article } from '~/components/ArticleList.vue';


const { data } = await useFetch<Article[]>("https://api.hnpwa.com/v0/news/1.json");

const route = useRoute()


// definePageMeta({
//   layout: "home"
// })

</script>

<template>
  <section class="px-64 py-20 font-sans">
    <ArticleList :articles="data" />
    <NuxtLink v-if="$route.params.id" :to="'/' + route.params.id + 1">
      <p>{{ route.params.id + 1 }}</p>
    </NuxtLink>
    <div class="text-right">
      <NuxtLink to="/2">
        <p class="text-blue-500">Next</p>
      </NuxtLink>
    </div>
  </section>
</template>
