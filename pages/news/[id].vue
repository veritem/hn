<script setup>
const route = useRoute()

const { data } = await useFetch(`https://api.hnpwa.com/v0/news/${route.params.id}.json`)

</script>


<template>
    <section>

        <Head>
            <Title>{{ $route.params.id }} - Page </Title>
        </Head>
        <h1>
            {{ $route.params.id }}
        </h1>
    </section>
</template>
