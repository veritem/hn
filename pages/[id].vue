<script setup lang="ts">

import { Article } from '~/components/ArticleList.vue';

const route = useRoute()


const { data } = await useFetch<Article[]>(`https://api.hnpwa.com/v0/news/${route.params.id}.json`);

definePageMeta({
    layout: "default"
})
</script>
   
<template>
    <section>
        <ArticleList :articles="data" />
        <div class="flex justify-between text-blue-500 block py-12">
            <NuxtLink :to="`/${route.params.id > 1 ? route.params.id - 1 : ''}`">
                <p> Back</p>
            </NuxtLink>
            <NuxtLink :to="`/${Number(route.params.id) + 1}`">
                <p>
                    Next
                </p>
            </NuxtLink>
        </div>
    </section>
</template>
