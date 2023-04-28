<template>
  <div
    class="flex w-max px-4 bg-purple-50 h-screen flex-col justify-between items-center sticky top-0"
  >
    <NuxtLink to="/" class="mt-10">
      <img
        :src="`/images/deck1-logo.svg`"
        class="initial loading w-64"
        data-was-processed="true"
      />
    </NuxtLink>
    <div class="flex flex-col gap-1.5 font-bold text-2xl w-max px-2">
      <NuxtLink
        to="/"
        class="flex items-center w-full pr-4"
        :class="
          route.path === '/' ? 'bg-gray-800 text-white rounded-lg pr-1' : ''
        "
        ><img src="/icons/dashboard.svg" class="w-10 p-2" />Dashboard</NuxtLink
      >
      <NuxtLink
        to="/flights"
        class="flex items-center w-full pr-4"
        :class="
          route.path === '/flights'
            ? 'bg-gray-800 text-white rounded-lg pr-1'
            : ''
        "
        ><img src="/icons/dailyReports.svg" class="w-10 p-2" />Flights</NuxtLink
      >
      <NuxtLink
        to="/dailyReports"
        class="flex items-center w-full pr-4"
        :class="
          route.path === '/dailyReports'
            ? 'bg-gray-800 text-white rounded-lg'
            : ''
        "
        ><img src="/icons/dailyReports.svg" class="w-10 p-2" />Daily
        Reports</NuxtLink
      >
      <NuxtLink
        to="/dailyUpdates"
        class="flex items-center w-full pr-4"
        :class="
          route.path === '/dailyUpdates'
            ? 'bg-gray-800 text-white rounded-lg'
            : ''
        "
        ><img src="/icons/dailyUpdates.svg" class="w-10 p-2" />Daily
        Updates</NuxtLink
      >
      <NuxtLink
        to="/locations"
        class="flex items-center w-full pr-4"
        :class="
          route.path === '/locations' ? 'bg-gray-800 text-white rounded-lg' : ''
        "
        ><img src="/icons/sites.svg" class="w-10 p-2" />Locations</NuxtLink
      >
      <NuxtLink
        to="/user"
        class="flex items-center w-full pr-4"
        :class="
          route.path === '/user' ? 'bg-gray-800 text-white rounded-lg' : ''
        "
        ><img src="/icons/profile.svg" class="w-10 p-2" />Account</NuxtLink
      >
    </div>
    <NuxtLink to="/">
      <div class="flex gap-2 items-center text-2xl mb-14 font-bold">
        <Icon name="ion:arrow-left-c" />
        <span>Log Out</span>
      </div>
    </NuxtLink>
  </div>
</template>
<script setup lang="ts">
const route = useRoute();
</script>
