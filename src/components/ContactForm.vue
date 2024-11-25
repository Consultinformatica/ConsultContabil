<template>
  <div class="bg-white p-8 rounded-lg shadow-md">
    <h2 class="text-2xl font-bold mb-6">Gostou?</h2>
    <p class="text-gray-600 mb-6">Preencha o formulário que entraremos em contato</p>
    
    <form @submit.prevent="handleSubmit" class="space-y-4">
      <div>
        <input 
          type="text" 
          v-model="form.name"
          placeholder="Nome" 
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
      </div>
      
      <div>
        <input 
          type="email" 
          v-model="form.email"
          placeholder="E-mail" 
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
      </div>
      
      <div>
        <input 
          type="text" 
          v-model="form.subject"
          placeholder="Assunto" 
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        >
      </div>
      
      <div>
        <textarea 
          v-model="form.message"
          placeholder="Mensagem" 
          rows="4"
          class="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
        ></textarea>
      </div>

      <p class="text-sm text-gray-500">*Os dados pessoais coletados neste formulário têm por finalidade o retorno à mensagem enviada. Referidos dados não serão utilizados para outra finalidade. Qualquer dúvida, basta entrar em contato com a Governança.</p>
      
      <button 
        type="submit"
        class="w-full bg-primary text-white py-3 px-6 rounded-md hover:bg-primary/90 transition-colors"
      >
        QUERO FALAR COM O CONTADOR
      </button>
    </form>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  subject: '',
  message: ''
})

const handleSubmit = () => {
  console.log('Form submitted:', form)
  // Add your form submission logic here
}
</script>