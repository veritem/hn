<script setup lang="ts">

export type Article = {
    id: string,
    title: string,
    time_ago: string,
    url: string,
    time: string
    user: string
    comments_count: string
}

defineProps<{
    articles: Article[]
}>()
</script>

<template>
    <div>
        <div v-for="article in articles" :key="article.id">
            <Article :article="article" />
        </div>
    </div>
</template>
