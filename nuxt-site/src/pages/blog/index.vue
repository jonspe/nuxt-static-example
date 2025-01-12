<script setup>
const { data } = await useFetch("https://jsonplaceholder.typicode.com/posts")
</script>

<template>
  <h1>Blogi</h1>
  <p>
    Tämä data on haettu sivuston rakentamisen aikana osoitteesta
    <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder.typicode.com</a>
  </p>
  <ol>
    <li v-for="post in data" :value="post.id">
      <NuxtLink :href="`/blog/${post.id}`">{{ post.title }}</NuxtLink>
    </li>
  </ol>
</template>
