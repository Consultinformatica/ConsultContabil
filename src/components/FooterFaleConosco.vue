<template>
    <div class="relative bg-orange-800 text-white h-80 flex items-center justify-center">
        <div class="absolute inset-0">
            <img src="@/assets/images/our-girl.webp" alt="Imagem de fundo"
                class="w-full h-full object-cover opacity-10" />
        </div>

        <div class="relative z-10 items-center flex flex-col justify-center h-48 p-6">
            <h1 class="text-4xl font-bold">
                Busque o sucesso da sua empresa com a Consult Contábil
            </h1>
            <button @click="toContatos()"
                class="text-lg mt-4 w-60 inline-block bg-white text-yellow-600 font-bold py-2 px-6 rounded-full shadow-md hover:bg-yellow-100">
                Fale com o contador
            </button>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'FooterFaleConosco',
    methods: {
        toContatos() {
            window.location.assign('#/contatos')
        }
    }
}
</script>