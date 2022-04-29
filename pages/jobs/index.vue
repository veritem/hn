<script setup>
const { data } = useFetch("https://api.hnpwa.com/v0/news/1.json")
</script>

<template>
    <div>

        <Head>
            <Title>Jobs</Title>
        </Head>
        <h1>Jobs page</h1>
    </div>
</template>
