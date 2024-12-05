<template>
  <nav
    :class="{ 'fixed top-2 z-50 rounded-full transition-shadow duration-300': isScrolled, 'sticky md:top-[65px] z-50 rounded-full transition-shadow duration-300': true }">
    <div class="container mx-auto px-4 flex justify-center">
      <div class="flex justify-between items-center">

        <div class="flex items-center">

          <div v-if="!isMobileMenuOpen" class="hidden md:flex bg-white rounded-full shadow-md items-center">
            <div class="flex items-center ml-6 px-8 py-3">
              <img src="/src/assets/logo.png" alt="Logo" class="h-10 ">
            </div>
            <button @click="toInicio()" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">
              Início
            </button>
            <button @click="toSobre()" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">
              Institucional
            </button>
            <button @click="toServicos()" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">
              Serviços
            </button>
            <button @click="toContatos()" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">
              Fale conosco
            </button>
          </div>
        </div>
      </div>

      <div class="md:hidden flex items-center justify-between py-2"
        :class="{ 'bg-white shadow-lg rounded-full': isScrolled }">
        <div class="flex items-center px-8 py-3">
          <img src="/src/assets/logo.png" alt="Logo" class="h-10 ">
        </div>
        <button
          class="text-gray-700 bg-white rounded-full shadow-md flex items-center justify-center mr-5 w-10 h-10 hover:bg-gray-200"
          @click="toggleMobileMenu">
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>

      <div v-if="isMobileMenuOpen" class="absolute rounded-lg top-15 w-72 bg-white shadow-lg">
        <div class="flex justify-between items-center p-4">
          <h2 class="text-lg font-bold">Menu</h2>
          <button @click="toggleMobileMenu" class="text-gray-700">
            &times;
          </button>
        </div>
        <button @click="toInicio()" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">
          Início
        </button>
        <button @click="toSobre()" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">
          Institucional
        </button>
        <button @click="toServicos()" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">
          Serviços
        </button>
        <button @click="toContatos()" class="px-6 py-3 text-gray-700 hover:text-primary transition-colors">
          Fale conosco
        </button>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: 'NavMenu',
  data() {
    return {
      isScrolled: false,
      isMobileMenuOpen: false
    }
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 0;
    },

    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    scrollTo(id: string) {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    },
    toInicio() {
      this.$router.push('/');
    },
    toSobre() {
      this.$router.push('/sobre');
    },
    toServicos() {
      this.$router.push('/servicos');
    },
    toContatos() {
      this.$router.push('/contatos');
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped>
.fixed {
  position: fixed;
  top: 10px;
  width: calc(100% - 20px);
}
</style>