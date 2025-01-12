<script setup>
const route = useRoute()
const { data: post } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`)
const { data: comments } = await useFetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}/comments`)
</script>

<template>
  <h1>{{ post.title }}</h1>
  <section>{{ post.body }}</section>
  <button @click="() => $router.back()">&lt; Takaisin</button>
  <h2>Kommentit</h2>
  <ul>
    <li v-for="comment in comments">
      <b>{{ comment.email }}</b>
      <br />{{ comment.body }}<br />
    </li>
  </ul>
</template>
