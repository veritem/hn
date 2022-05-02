<script setup lang="ts">
import { Article } from "./ArticleList.vue";

defineProps<{
  article: Article;
}>();
</script>

<template>
  <div class="py-4">
    <NuxtLink :to="article.url" target="_blank">
      <div class="flex gap-4">
        <h3>{{ article.title }}</h3>
        <p class="text-sm text-gray-500">({{ article.domain }})</p>
      </div>
    </NuxtLink>

    <div class="flex items-center gap-2 text-sm text-gray-400 font-bold" v-if="article.user">
      <p>{{ article.points }} points</p>
      <p>
        by
        <NuxtLink :to="`/user/${article.user}`" class="underline">
          {{ article.user }}
        </NuxtLink>

        {{ article.time_ago }}
      </p>
      <span>|</span>
      <p>{{ article.comments_count }} comments</p>
    </div>
  </div>
</template>
