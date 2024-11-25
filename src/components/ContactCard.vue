<template>
  <div class="bg-white p-6 rounded-lg shadow-md">
    <div class="flex items-center justify-center w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full">
      <font-awesome-icon :icon="icon" class="text-2xl text-primary" />
    </div>
    <h3 class="text-xl font-bold text-center mb-4">{{ title }}</h3>
    <div class="text-center text-gray-600">
      <p v-for="(line, index) in info" :key="index">{{ line }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
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
})
</script>