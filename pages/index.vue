<script setup lang="ts">
import { ref } from 'vue'
import { vInfiniteScroll } from '@vueuse/components'
import { Article } from '~/components/ArticleList.vue';
import ArticleComponent from '~/components/Article.vue';


const counter = ref(1)
const items = ref<Article[]>([])

const { data, error } = await useFetch<Article[]>(`https://api.hnpwa.com/v0/news/${counter.value}.json`);

function onLoadMore() {
	counter.value += 1
}

</script>

<template>
	<div v-infinite-scroll="[onLoadMore, { distance: 1000 }]">
		<div v-for="(item, index) in  data ">
			<ArticleComponent :article="item" :key="index" />
		</div>
	</div>
</template>