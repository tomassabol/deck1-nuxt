<template>
  <div class="w-max my-8" :class="minimized ? 'ml-5' : ''">
    <div
      class="flex flex-col justify-between items-center h-full bg-rose-50 px-4 rounded-xl"
    >
      <!-- <div
      class="flex w-max px-4 bg-rose-50 h-screen flex-col justify-between items-center mb-4"
    > -->
      <NuxtLink to="/" class="mt-10">
        <img
          v-if="!minimized"
          :src="`/images/deck1-logo.svg`"
          class="initial loading w-64"
          data-was-processed="true"
        />
        <img
          v-else
          :src="`/images/deck1-mini.svg`"
          class="initial loading w-12"
          data-was-processed="true"
        />
      </NuxtLink>
      <div class="flex flex-col gap-1.5 font-bold text-2xl w-max px-2">
        <NuxtLink
          to="/"
          class="flex items-center w-full"
          :class="[
            route.path === '/' ? 'bg-stone-800 text-slate-100 rounded-lg' : '',
            minimized ? '' : 'pr-4',
          ]"
          ><img
            :src="
              route.path === '/'
                ? '/icons/dashboard-selected.svg'
                : '/icons/dashboard.svg'
            "
            class="w-10 p-2"
          /><span v-if="!minimized">Dashboard</span></NuxtLink
        >
        <NuxtLink
          to="/flights"
          class="flex items-center w-full"
          :class="[
            route.path === '/flights'
              ? 'bg-stone-800 text-slate-100 rounded-lg'
              : '',
            minimized ? '' : 'pr-4',
          ]"
          ><img
            :src="
              route.path === '/flights'
                ? '/icons/flights-selected.svg'
                : '/icons/flights.svg'
            "
            class="w-10 p-2"
          /><span v-if="!minimized">Flights</span></NuxtLink
        >
        <NuxtLink
          to="/dailyReports"
          class="flex items-center w-full"
          :class="[
            route.path === '/dailyReports'
              ? 'bg-stone-800 text-slate-100 rounded-lg'
              : '',
            minimized ? '' : 'pr-4',
          ]"
          ><img
            :src="
              route.path === '/dailyReports'
                ? '/icons/dailyReports-selected.svg'
                : '/icons/dailyReports.svg'
            "
            class="w-10 p-2"
          /><span v-if="!minimized">Daily Reports</span></NuxtLink
        >
        <NuxtLink
          to="/dailyUpdates"
          class="flex items-center w-full"
          :class="[
            route.path === '/dailyUpdates'
              ? 'bg-stone-800 text-slate-100 rounded-lg'
              : '',
            minimized ? '' : 'pr-4',
          ]"
          ><img
            :src="
              route.path === '/dailyUpdates'
                ? '/icons/dailyUpdates-selected.svg'
                : '/icons/dailyUpdates.svg'
            "
            class="w-10 p-2"
          /><span v-if="!minimized">Daily Updates</span></NuxtLink
        >
        <NuxtLink
          to="/locations"
          class="flex items-center w-full"
          :class="[
            route.path === '/locations'
              ? 'bg-stone-800 text-slate-100 rounded-lg'
              : '',
            minimized ? '' : 'pr-4',
          ]"
          ><img
            :src="
              route.path === '/locations'
                ? '/icons/Sites-selected.svg'
                : '/icons/Sites.svg'
            "
            class="w-10 p-2"
          /><span v-if="!minimized">Locations</span></NuxtLink
        >
        <NuxtLink
          to="/user"
          class="flex items-center w-full"
          :class="[
            route.path === '/user'
              ? 'bg-stone-800 text-slate-100 rounded-lg'
              : '',
            minimized ? '' : 'pr-4',
          ]"
          ><img
            :src="
              route.path === '/user'
                ? '/icons/profile-selected.svg'
                : '/icons/profile.svg'
            "
            class="w-10 p-2"
          /><span v-if="!minimized">Profile</span></NuxtLink
        >
      </div>
      <div class="flex flex-col mb-8 items-center gap-6">
        <NuxtLink to="/" v-if="!minimized">
          <div
            class="flex gap-2 items-center text-2xl font-bold hover:text-stone-700 hover:bg-violet-200 hover:shadow-md p-1 px-3 rounded-md"
          >
            <Icon name="ion:arrow-left-c" />
            <span v-if="!minimized">Log Out</span>
          </div>
        </NuxtLink>
        <Icon
          name="icon-park-outline:hamburger-button"
          class="cursor-pointer"
          :class="minimized ? 'opacity-100' : 'opacity-50 hover:opacity-100'"
          @click.prevent="minimized = !minimized"
        />
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
const minimized = ref(true);
</script>
