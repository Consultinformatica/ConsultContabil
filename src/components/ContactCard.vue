<template>
  <div class="bg-white shadow-md shadow-gray-400 p-6 rounded-2xl border-2 border-solid border-opacity-50">
    <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full">
      <font-awesome-icon :icon="icon" class="text-2xl text-primary" />
    </div>
    <h3 class="text-xl font-bold text-center mb-4">{{ title }}</h3>
    <div class="text-center text-gray-600">
      <p v-for="(line, index) in info" :key="index" class="break-words text-wrap">{{ line }}</p>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'ContactCard',
  props: {
    title: {
      type: String,
      required: true
    },
    info: {
      type: Array,
      required: true
    },
    icon: {
      type: String,
      required: true
    }
  }
}
</script>