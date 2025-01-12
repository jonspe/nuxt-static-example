<template>
  <nav>
    <div>
      <img id="logo" alt="" src="/favicon.ico" />
      <NuxtLink href="/">Koti</NuxtLink>
      <NuxtLink href="/blog">Blogi</NuxtLink>
      <NuxtLink href="/about">Tietoja</NuxtLink>
    </div>
  </nav>
  <main>
    <slot></slot>
  </main>
</template>
