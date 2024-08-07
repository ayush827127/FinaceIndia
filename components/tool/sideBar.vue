<template>
  <div>
    <!-- Tool Button for Small Screens -->
    <div
      class="flex justify-center bg-white mt-5 sm:flex md:hidden absolute z-100 top-[5rem] left-[32px]"
    >
      <button
        @click="toggleSidebar"
        class="text-blue-950 font-bold border-2 p-2"
      >
        <i class="material-icons">apps</i>
      </button>
    </div>

    <!-- Sidebar for Medium Screens and Larger, Drawer for Small Screens -->
    <div
      :class="[
        'duration-1000 ease-in-out fixed inset-0 bg-transparent z-50 transition-transform transform',
        { 'translate-x-0': isSidebarOpen, '-translate-x-full': !isSidebarOpen },
        'md:translate-x-0 md:static md:flex',
      ]"
    >
      <div class="bg-white p-4 md:w-72 w-fit">
        <!-- Close Button for Drawer -->
        <div class="md:hidden flex justify-end">
          <button @click="toggleSidebar" class="text-red-500 font-bold p-2">
            X
          </button>
        </div>

        <!-- Search Bar -->
        <div class="flex justify-center mt-5 p-2 pr-8">
          <input
            v-model="searchTerm"
            type="text"
            placeholder="Search tools..."
            class="border-2 border-gray-300 rounded-md px-3 py-2 w-full max-w-xs"
          />
        </div>

        <!-- Sidebar Items -->
        <div
          class="space-y-1 overflow-y-auto thin-scrollbar h-full lg:h-[72vh] pr-5"
        >
          <template v-for="(group, index) in filteredSidebarItems" :key="index">
            <div>
              <template v-for="(item, subIndex) in group.items" :key="subIndex">
                <router-link v-if="item.route" :to="item.route" custom>
                  <a
                    @click.prevent="navigate(item.route)"
                    :class="[
                      'flex items-center px-4 py-3 rounded-lg transition-colors cursor-pointer sidebarItem',
                      {
                        'bg-blue-950 text-white': selectedRoute === item.route,
                        'hover:bg-gray-200': selectedRoute !== item.route,
                      },
                    ]"
                  >
                    <i class="material-icons">{{ item.icon }}</i>
                    <span class="ml-3 text-sm font-medium">{{
                      item.label
                    }}</span>
                  </a>
                </router-link>
                <a
                  v-else
                  :href="item.url"
                  :target="item.target"
                  class="flex items-center px-4 py-3 rounded-lg hover:bg-gray-200 transition-colors sidebarItem"
                >
                  <i class="material-icons">{{ item.icon }}</i>
                  <span class="ml-3 text-sm font-medium">{{ item.label }}</span>
                </a>
              </template>
            </div>
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";

const SideBarItems = ref([
  {
    label: "EMI Calculator",
    icon: "calculate",
    route: "/resources/tools/emi-calculator",
  },
  {
    label: "PostOffice Scheme",
    icon: "local_post_office",
    route: "/resources/tools/postoffice-scheme",
  },
  {
    label: "SIP Calculator",
    icon: "savings",
    route: "/resources/tools/sip-calculator",
  },
  {
    label: "Income Tax Calculator",
    icon: "account_balance",
    route: "/resources/tools/income-tax-calculator",
  },
  {
    label: "Old & New Regime Calculator",
    icon: "calculate",
    route: "/resources/tools/old-new-regime",
  },
  {
    label: "PPF Calculator",
    icon: "account_balance_wallet",
    route: "/resources/tools/ppf-calculator",
  },
  {
    label: "HRA Calculator",
    icon: "home_work",
    route: "/resources/tools/hra-calculator",
  },
  {
    label: "Gratuity Calculator",
    icon: "currency_rupee",
    route: "/resources/tools/gratuity-calculator",
  },
  {
    label: "SWP Calculator",
    icon: "trending_up",
    route: "/resources/tools/swp-calculator",
  },
  {
    label: "ELSS Calculator",
    icon: "show_chart",
    route: "/resources/tools/elss-calculator",
  },
  {
    label: "Zero coupon bond Calculator",
    icon: "receipt_long",
    route: "/resources/tools/zero-coupon-bond",
  },
  {
    label: "Real Estate Calculator",
    icon: "bar_chart",
    route: "/resources/tools/real-estate",
  },
]);

const sortedSidebarItems = computed(() => {
  return [...SideBarItems.value].sort((a, b) => a.label.localeCompare(b.label));
});

const groupedSidebarItems = computed(() => {
  const groups = [];
  let currentLetter = "";

  sortedSidebarItems.value.forEach((item) => {
    const itemLetter = item.label.charAt(0).toUpperCase();
    if (itemLetter !== currentLetter) {
      currentLetter = itemLetter;
      groups.push({ letter: currentLetter, items: [] });
    }
    groups[groups.length - 1].items.push(item);
  });

  return groups;
});

const isSidebarOpen = ref(false);
const router = useRouter();
const route = useRoute();
const searchTerm = ref("");
const selectedRoute = ref("");

onMounted(() => {
  if (typeof window !== "undefined") {
    selectedRoute.value = window.location.pathname;
  }
});

function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value;
}

function navigate(route) {
  router.push(route);
  isSidebarOpen.value = false; // Close sidebar after navigation
  selectedRoute.value = route;
}

// Filtered sidebar items based on search term
const filteredSidebarItems = computed(() => {
  if (!searchTerm.value.trim()) {
    return groupedSidebarItems.value;
  }

  const filteredGroups = groupedSidebarItems.value.map((group) => {
    const filteredItems = group.items.filter((item) =>
      item.label.toLowerCase().includes(searchTerm.value.trim().toLowerCase())
    );
    return { letter: group.letter, items: filteredItems };
  });

  return filteredGroups.filter((group) => group.items.length > 0);
});
</script>

<style scoped>
.sidebarItem {
  border-bottom: 1px solid #e5e5e5;
}
</style>
