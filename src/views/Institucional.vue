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

    <div class="container mx-auto p-4 pt-20">
        <div class="flex justify-center">
            <div class="shadow-lg shadow-gray-400 card p-2 md:p-6 rounded-2xl">
                <div class="md:flex justify-center">
                    <div class="w-80 pt-6">
                        <h2 class="text-xl font-bold mb-2">Sobre nós</h2>
                        <p class="text-gray-600 text-lg">
                            A Consult Contábil é uma empresa de contabilidade que oferece serviços de alta qualidade
                            para indivíduos e empresas. Nossa equipe é composta por profissionais experientes e
                            comprometidos com a satisfação dos nossos clientes.
                        </p>
                    </div>

                    <div class="flex justify-center mt-5 md:justify-end md:mt-0 w-96">
                        <img src="@/assets/images/our-girl.webp" alt="Sobre nós"
                            class="w-full md:w-72 h-72 object-cover rounded-lg" />
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-12 mb-10">
            <div class="grid md:pl-16 md:pr-16 pr-0 pl-0 grid-cols-1 md:grid-cols-3 gap-4">
                <div class="shadow-lg shadow-gray-400 card w-full p-6 rounded-2xl">
                    <h2 class="text-lg font-bold mb-2">Missão</h2>
                    <p class="text-gray-600 text-sm">
                        “Fornecer ao cliente toda estrutura necessária para que ele se concentre somente na
                        administração do seu negócio.”
                    </p>
                </div>
                <div class="shadow-lg shadow-gray-400 card w-full p-6 rounded-2xl">
                    <h2 class="text-lg font-bold mb-2">Visão</h2>
                    <p class="text-gray-600 text-sm">
                        “Estabelecimento de parceria com nossos clientes e responsabilidade profissional como
                        principal objetivo”
                    </p>
                </div>
                <div class="shadow-lg shadow-gray-400 card w-full p-6 rounded-2xl">
                    <h2 class="text-lg font-bold mb-2">Valores</h2>
                    <p class="text-gray-600 text-sm">
                        Qualidade e Transparência.
                    </p>
                </div>
            </div>
        </div>
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
import ImageCarousel from '@/components/ImageCarousel.vue'
import FooterFaleConosco from '@/components/FooterFaleConosco.vue'

export default {
    name: 'Institucional',
    components: {
        TopBar,
        NavMenu,
        Footer,
        ChatBox,
        ImageCarousel,
        FooterFaleConosco
    },
}
</script>
