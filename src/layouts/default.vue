<template>
  <head>
    <title>Staattinen Nuxt.js Blogi</title>
  </head>
  <nav>
    <div>
      <img id="logo" alt="" src="/favicon.ico" />
      <NuxtLink href="/">Koti</NuxtLink>
      <NuxtLink href="/blog">Blogi</NuxtLink>
      <NuxtLink href="/about">Tietoja</NuxtLink>
    </div>
  </nav>
  <slot></slot>
</template>
