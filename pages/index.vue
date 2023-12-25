<script setup lang="ts">
import { ref } from 'vue'
import { Article } from '~/components/ArticleList.vue';
import ArticleComponent from '~/components/Article.vue';


const counter = ref(1)

const { data } = await useFetch<Article[]>(`https://api.hnpwa.com/v0/news/${counter.value}.json`);


</script>

<template>
	<div>
		<div v-for="(item, index) in  data ">
			<ArticleComponent :article="item" :key="index" />
		</div>

		<div v-if="!data">
			Loading...
		</div>
	</div>
</template>