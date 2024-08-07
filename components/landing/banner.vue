
<script setup lang="ts">

const sliders = [
  {
    title: 'Services',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    actions : ['Get Started', 'Hire An Expert'],
    lottieUrl: 'https://lottie.host/embed/9037067a-4c58-46ff-b65d-a5dce754d02a/rSew60dptQ.json'
  },
  {
    title: 'Investment',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    actions : ['Know More'],
    lottieUrl: 'https://lottie.host/embed/4451bfc7-94ad-4b53-bea6-b6b991415ba0/Hcqhsu2kPQ.json'
  },
  {
    title: 'Capital',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    actions : ['Know More'],
    lottieUrl: 'https://lottie.host/embed/d1874276-62db-4028-8201-1da3ed257883/WI3y8q6bEX.json'
  },
  {
    title: 'Foundation',
    caption: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ',
    lottieUrl: 'https://lottie.host/embed/3044d8df-bbd6-41d2-9420-262bc97afaf9/PIeEp6UFF6.json'
  }
]
const carouselRef = ref()

onMounted(() => {
  setInterval(() => {
    if (!carouselRef.value) return

    if (carouselRef.value.page === carouselRef.value.pages) {
      return carouselRef.value.select(0)
    }

    carouselRef.value.next()
  }, 7000)
})
</script>
<template>
    <div class="">        
        <UCarousel
            ref="carouselRef"
            v-slot="{ item }"
            :items="sliders"
            :ui="{ item: 'basis-full' }"
            class="overflow-hidden"
            arrows
        >
          <div class="p-28 grid grid-cols-2 gap-4">
            <div class="flex flex-col justify-between py-8">
              <div class="flex flex-col gap-4">
                <div class="flex gap-2">
                  <span class="text-3xl font-semibold text-blue-950">Finace India</span>
                  <span class="text-3xl font-semibold text-orange-500">{{item.title}}</span>
                </div>
                <span class="text-sm text-gray-600">{{item.caption}}</span>
              </div>
              <div class="flex gap-4 pb-4">
                <nuxt-link :href="action.split(' ').join('-').toLowerCase()" target="_blank" v-for="action in item.actions">
                  <button class="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white shadow-lg">{{ action }}</button>
                </nuxt-link>
              </div>
            </div>
            <div>
              <iframe class="h-72 w-full" :src="item.lottieUrl"></iframe>
            </div>
          </div>
        </UCarousel>
    </div>
</template>