<template>
    <div>
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

        <section class="relative ml-10 mr-10 lg:ml-20 lg:mr-20 -mt-20 mb-16">
            <div class="container mx-auto flex justify-center">
                <ServicesGrid />
            </div>
        </section>

        <section class="bg-opacity-50 py-16 text-black">
            <!-- <div class="absolute inset-0">
                <img src="@/assets/images/image3.webp" alt="Consult Contabil"
                    class="w-full h-full object-cover opacity-10 mb-4" />
            </div> -->

            <div class=" container mx-auto text-center">
                <h2 class="text-5xl font-bold mb-8">Por que escolher a Consult contábil?</h2>
                <p class="mb-8 text-3xl">Nossos diferenciais</p>
                <Differentials />
            </div>
        </section>

        <FooterFaleConosco />

        <ChatBox />
        <Footer />
    </div>
</template>

<script lang="ts">
import TopBar from '@/components/TopBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import Footer from '@/components/Footer.vue'
import ChatBox from '@/components/ChatBox.vue'
import ImageCarousel from '@/components/ImageCarousel.vue'
import ServicesGrid from '@/components/ServicesGrid.vue'
import Differentials from '@/components/Differentials.vue'
import FooterFaleConosco from '@/components/FooterFaleConosco.vue'

export default {
    name: "Início",
    components: {
        TopBar,
        NavMenu,
        Footer,
        ChatBox,
        ServicesGrid,
        ImageCarousel,
        Differentials,
        FooterFaleConosco
    }
}
</script>