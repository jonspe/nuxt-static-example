<template>
  <NuxtLayout>
    <Transition name="page">
      <NuxtPage />
    </Transition>
  </NuxtLayout>
</template>

<style>
.page-enter-active {
  transition: opacity 0.4s;
  opacity: 1;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
}
</style>
