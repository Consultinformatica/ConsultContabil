<template>
  <nav
    :class="{ 'fixed top-2 z-50 rounded-full transition-shadow duration-300': isScrolled, 'sticky md:top-[7%] z-50 rounded-full transition-shadow duration-300': true }">
    <div class="container mx-auto px-4 flex justify-center">
      <div class="flex justify-between items-center">

        <div class="flex items-center">

          <div v-if="!isMobileMenuOpen" class="hidden md:flex bg-white rounded-full shadow-md flex items-center">
            <div class="flex items-center py-2 ml-6 px-8 py-3">
              <img src="/src/assets/logo.png" alt="Logo" class="h-10 ">
            </div>
            <a href="#" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">Início</a>
            <a href="#" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">Institucional</a>
            <a href="#" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">Serviços</a>
            <div class="relative group px-6 py-3">
              <button class="text-gray-700 hover:text-primary transition-colors flex items-center">
                Conteúdo
                <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div class="absolute hidden group-hover:block w-48 bg-white shadow-lg py-2 rounded-md mt-3">
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 1</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 2</a>
                <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Item 3</a>
              </div>
            </div>
            <a href="#" @click.prevent="scrollTo('contato')" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">Fale conosco</a>
          </div>
        </div>
      </div>

      <div class="md:hidden flex items-center justify-between py-2">
        <div class="flex items-center py-2 ml-6 px-8 py-3">
          <img src="/src/assets/logo.png" alt="Logo" class="h-10 ">
        </div>
        <button
          class="text-gray-700 bg-white rounded-full shadow-md flex items-center justify-center w-10 h-10 hover:bg-gray-200"
          @click="toggleMobileMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div v-if="isMobileMenuOpen" class="absolute bg-white rounded shadow-md top-15 left-0 w-full bg-white shadow-lg">
        <div class="flex justify-between items-center p-4">
          <h2 class="text-lg font-bold">Menu</h2>
          <button @click="toggleMobileMenu" class="text-gray-700">
            &times;
          </button>
        </div>
        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Início</a>
        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Institucional</a>
        <a href="#" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Serviços</a>
        <a href="#" @click.prevent="scrollTo('contato')" class="block px-4 py-2 text-gray-700 hover:bg-gray-100">Fale conosco</a>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 0
}

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const scrollTo = (id) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.fixed {
  position: fixed;
  /* Fixa o menu ao topo */
  top: 10px;
  /* Margem de 10px do topo */
  width: calc(100% - 20px);
  /* Ajusta a largura para compensar a margem */
}
</style>