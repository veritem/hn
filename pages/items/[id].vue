<script setup lang="ts">
const route = useRoute();

type Item = {
  url: string;
  title: string;
  domain: string;
  points: number;
  user: string;
  time_ago: string;
  content: string;
};


const { data } = useFetch<Item>(
  `https://api.hnpwa.com/v0/item/${route.params.id}.json`
);

definePageMeta({
  title: data.value.title,
});
</script>

<template>
  <section>
    <NuxtLink :to="data.url">
      <h1>{{ data.title }}</h1>
      <small>{{ data.domain }}</small>
    </NuxtLink>

    <p>
      {{ data.points }} points by
      <NuxtLink :to="`/user/${data.user}`">{{ data.user }}</NuxtLink>
      {{ data.time_ago }}
    </p>

    <div v-if="data.content" class="prose">
      <span v-html="data.content"></span>
    </div>
  </section>
</template>
