<script setup lang="ts">

const route = useRoute()

const { data } = await useFetch<{
	id: string
	title: string
	url: string
	points: number
	domain: string
	user: string
	time_ago: string
	content: string
}[]>(
	`https://api.hnpwa.com/v0/jobs/${route.params.id}.json`
)
</script>

<template>
	<section>
		<div v-for="job in data" :key="job.id" class="py-4 px-4 md:px-0 lg:px-0">
			<div class="flex gap-4">
				<p>
					<NuxtLink :to="job.url" target="_blank">
						{{ job.title }}
					</NuxtLink>
				</p>
				<p class="text-sm text-gray-400 hidden md:inline-block lg:inline-block" v-if="job.domain">({{ job.domain }})
				</p>
			</div>
			<p class="text-gray-500 text-sm py-1">{{ job.time_ago }}</p>
		</div>
	</section>
</template>
