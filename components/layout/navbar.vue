<template>
  <div>
    <nav
      class="w-full flex justify-between items-center shadow-sm py-4 px-6 md:px-28 fixed top-0 z-10 bg-white"
    >
      <nuxt-link href="/"><LayoutBrandLogo /></nuxt-link>
      <Menu class="hidden lg:flex" />
      <div class="flex gap-4 hidden lg:flex">
        <nuxt-link href="/get-started">
          <button
            class="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white shadow-lg"
          >
            Get Started
          </button>
        </nuxt-link>
        <nuxt-link href="/hire-an-expert">
          <button
            class="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white shadow-lg"
          >
            Hire an Expert
          </button>
        </nuxt-link>
      </div>
      <!-- Drawer Toggle Button for Small Screens -->
      <div>
        <button
          @click="toggleDrawer"
          class="lg:hidden text-blue-950 font-bold border-2 p-2"
        >
          <i class="material-icons menu-icon">menu</i>
        </button>
      </div>
    </nav>

    <!-- Drawer for Small Screens -->
    <div
      :class="[
        'duration-1000 ease-in-out fixed inset-0 z-50 transition-transform transform',
        { 'translate-x-0': isDrawerOpen, 'translate-x-full': !isDrawerOpen },
        'lg:translate-x-0 lg:static lg:flex',
      ]"
    >
      <div
        class="bg-white shadow-lg rounded-lg p-4 w-fit lg:hidden fixed right-0 top-0 h-full transition-transform transform"
        :class="{
          'translate-x-0': isDrawerOpen,
          'translate-x-full': !isDrawerOpen,
        }"
      >
        <!-- Close Button for Drawer -->
        <div class="flex justify-end">
          <button
            @click="toggleDrawer"
            class="text-red-500 font-bold p-2"
          >
            X
          </button>
        </div>

        <!-- Drawer Items -->
        <div class="space-y-1 w-[300px] h-screen overflow-y-auto thin-scrollbar">
          <!-- Products Dropdown -->
          <details class="group">
            <summary
              class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Products
            </summary>
            <div class="pl-4 space-y-1">
              <nuxt-link
                v-for="product in products"
                :key="product"
                :href="`/products/${formatLink(product)}`"
              >
                <button
                  class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {{ product }}
                </button>
              </nuxt-link>
            </div>
          </details>

          <!-- Services Dropdown -->
          <details class="group">
            <summary
              class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Services
            </summary>
            <div class="pl-4 space-y-1">
              <nuxt-link href="/services/shop-proprietorship-registration">
                <button
                  class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Registration
                </button>
              </nuxt-link>
              <nuxt-link href="/services/annual-mca-return-filing">
                <button
                  class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Compliance
                </button>
              </nuxt-link>
              <nuxt-link href="/services/itr-1">
                <button
                  class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Taxation
                </button>
              </nuxt-link>
              <nuxt-link href="/services/trademark-registration">
                <button
                  class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Intellectual Property
                </button>
              </nuxt-link>
              <nuxt-link href="/services/pf-registration">
                <button
                  class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  Licenses & Others
                </button>
              </nuxt-link>
            </div>
          </details>

          <!-- Resources Dropdown -->
          <details class="group">
            <summary
              class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Resources
            </summary>
            <div class="pl-4 space-y-1">
              <details v-for="item in resources" :key="item.title" class="group">
                <summary class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer">
                  {{ item.title }}
                </summary>
                <div class="pl-4 space-y-1" v-if="item.menuItems && item.menuItems.length">
                  <nuxt-link
                    v-for="subItem in item.menuItems"
                    :key="subItem"
                    :href="`/resources/tools/${formatLink(subItem)}`"
                  >
                    <button class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors">
                      {{ subItem }}
                    </button>
                  </nuxt-link>
                </div>
              </details>
            </div>
          </details>

          <!-- Company Dropdown -->
          <details class="group">
            <summary
              class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
            >
              Company
            </summary>
            <div class="pl-4 space-y-1">
              <nuxt-link
                v-for="companyItem in company"
                :key="companyItem"
                :href="`/company/${formatLink(companyItem)}`"
              >
                <button
                  class="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors"
                >
                  {{ companyItem }}
                </button>
              </nuxt-link>
            </div>
          </details>

          <div class="flex-col space-y-8 mt-4">
            <!-- Get Started -->
            <div class="mt-[10px]">
              <nuxt-link href="/get-started">
                <button
                  class="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white shadow-lg"
                >
                  Get Started
                </button>
              </nuxt-link>
            </div>

            <!-- Hire an Expert -->
            <div class="mt-8">
              <nuxt-link href="/hire-an-expert">
                <button
                  class="px-4 py-2 bg-blue-950 hover:bg-blue-900 text-white shadow-lg"
                >
                  Hire an Expert
                </button>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import menu from '@/assets/config/menu.json';

const isDrawerOpen = ref(false);

function toggleDrawer() {
  isDrawerOpen.value = !isDrawerOpen.value;
}

const products = menu.find(item => item.title === 'Products')?.menuItems || [];
const resources = menu.find(item => item.title === 'Resources')?.menuItems || [];
const company = menu.find(item => item.title === 'Company')?.menuItems || [];

function formatLink(title: string) {
  return title.toLowerCase().replace(/\s+/g, '-');
}
</script>

<style scoped>
/* Add any additional styling here */
</style>
