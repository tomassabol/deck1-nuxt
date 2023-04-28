<template>{{ data }}</template>
<script lang="ts" setup>
import query from "~/api/flights";
const { data } = await useAsyncQuery(query);
</script>
