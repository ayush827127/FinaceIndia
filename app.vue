<script setup>
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import "./style.css"
const app = ref(null)

if (document)
  document.title = "Finace India"
</script>
<template>
  <div ref="app" class="!text-neutral-600 bg-white">
    <LayoutNavbar />
    <NuxtPage />
      <LayoutFooter />

  </div>
</template>
<style>

html {
  font-family: "Poppins", sans-serif
}
</style>