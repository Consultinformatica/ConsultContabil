<template>
    <TopBar />
    <NavMenu />

    <div class="relative w-full h-[400px] bg-black">
        <ImageCarousel />
        <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
        <div class="absolute inset-0 flex items-center justify-center text-white">
            <div class="text-center">
                <h1 class="text-5xl font-bold mb-4">Institucional</h1>
                <div class="flex items-center justify-center space-x-2">
                    <a href="/" class="hover:text-primary">Início</a>
                    <span>›</span>
                    <span>Institucional</span>
                </div>
            </div>
        </div>
    </div>

    <div class="flex justify-center m-20 ml-32 mr-32">
        <OurServices />
    </div>

    <FooterFaleConosco />

    <ChatBox />
    <Footer />
</template>


<script lang="ts">
import TopBar from '@/components/TopBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import Footer from '@/components/Footer.vue'
import ChatBox from '@/components/ChatBox.vue'
import OurServices from '@/components/OurServices.vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import FooterFaleConosco from '@/components/FooterFaleConosco.vue'

export default {
    name: 'Servicos',
    components: {
        TopBar,
        NavMenu,
        Footer,
        ChatBox,
        OurServices,
        ImageCarousel,
        FooterFaleConosco
    }
}
</script>

<style scoped>
/* Estilos aqui */
</style>