<script setup lang="ts">
import { Article } from "./ArticleList.vue";

defineProps<{
	article: Article;
}>();
</script>

<template>
	<div class="py-6 px-2 md:py-4 lg:py-4">
		<NuxtLink :to="article.url" target="_blank">
			<div class="flex gap-4">
				<h3>{{ article.title }}</h3>
				<p class="text-sm text-gray-500 hidden md:inline-block" v-if="article.domain">({{ article.domain }})</p>
			</div>
		</NuxtLink>

		<div class="flex items-center gap-2 md:text-sm lg:text-sm text-xs text-gray-400 font-bold" v-if="article.user">
			<p>{{ article.points }} points</p>
			<p>
				by
				<NuxtLink :to="`/user/${article.user}`" class="underline">
					{{ article.user }}
				</NuxtLink>

				{{ article.time_ago }}
			</p>
			<span class="hidden md:inline-block lg:inline-block">|</span>
			<p class="hidden md:inline-block lg:inline-block">{{ article.comments_count }} comments</p>
		</div>
	</div>
</template>
