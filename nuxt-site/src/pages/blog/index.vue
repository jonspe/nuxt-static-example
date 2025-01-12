<script setup>
const { data: posts } = useFetch("https://jsonplaceholder.typicode.com/posts")

const postsPerPage = 10
const currentPostIndex = ref(0)

const paginated = computed(() => posts.value.slice(currentPostIndex.value, currentPostIndex.value + postsPerPage))

const previous = function () {
  if (currentPostIndex.value - postsPerPage < 0) {
    currentPostIndex.value = 0
  } else {
    currentPostIndex.value -= postsPerPage
  }
}

const next = function () {
  if (currentPostIndex.value + postsPerPage >= posts.value.length - postsPerPage) {
    currentPostIndex.value = posts.value.length - postsPerPage
  } else {
    currentPostIndex.value += postsPerPage
  }
}
</script>

<template>
  <h1>Blogi</h1>
  <p>
    Tämä data on haettu sivuston rakentamisen aikana osoitteesta
    <a href="https://jsonplaceholder.typicode.com/">jsonplaceholder.typicode.com</a>
  </p>
  <ol>
    <li v-for="post in paginated" :value="post.id" :key="post.id">
      <NuxtLink :href="`/blog/${post.id}`">{{ post.title }}</NuxtLink>
    </li>
  </ol>
  <button @click="previous">Taakse</button>
  <button @click="next">Seuraava</button>
</template>
