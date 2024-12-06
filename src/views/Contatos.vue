<template>
    <div class="min-h-screen">
        <TopBar />
        <NavMenu />

        <div class="relative w-full h-[400px] bg-black">
            <ImageCarousel />
            <div class="absolute inset-0 bg-gradient-to-b from-black/50 to-black/70"></div>
            <div class="absolute inset-0 flex items-center justify-center text-white">
                <div class="text-center">
                    <h1 class="text-5xl font-bold mb-4">Contato</h1>
                    <div class="flex items-center justify-center space-x-2">
                        <a href="/" class="hover:text-primary">Início</a>
                        <span>›</span>
                        <span>Contato</span>
                    </div>
                </div>
            </div>
        </div>

        <div id="contato" class="relative flex justify-center ml-10 mr-10 lg:ml-20 lg:mr-20 -mt-20 mb-16">
            <div class="w-fit grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-20 opacity-95">
                <ContactCard title="Endereço" 
                    :info="['R. 10 R LINDOVAL JOSE DE LIMA, 366', 'Centro São José do Rio Preto', 'Acopiara, CE, 63560000']"
                    icon="location-dot" />
                <ContactCard title="Telefones" :info="['(88)9 9961-2726', '(88)9 9428-2608', '(88) 2152-0679']" icon="phone" />
                <ContactCard title="E-mail" :info="['consultcontabil549@gmail.com']" icon="envelope" />
            </div>
        </div>

        <main class="container mx-auto grid grid-cols-1 lg:grid-cols-2 px-4 py-12">
            <div class="lg:mr-10">
                <ContactForm />
            </div>

            <imageTemp />
        </main>

        <Map />

        <ChatBox />
        <Footer />
    </div>
</template>

<script lang="ts">
import TopBar from '@/components/TopBar.vue'
import NavMenu from '@/components/NavMenu.vue'
import ContactCard from '@/components/ContactCard.vue'
import ContactForm from '@/components/ContactForm.vue'
import Map from '@/components/Map.vue'
import Footer from '@/components/Footer.vue'
import ImageCarousel from '@/components/ImageCarousel.vue';
import ChatBox from '@/components/ChatBox.vue';
import imageTemp from '@/assets/images/image-temp.vue';

export default {
    name: 'Contatos',
    components: {
        TopBar,
        NavMenu,
        ContactCard,
        ContactForm,
        Map,
        Footer,
        ImageCarousel,
        ChatBox,
        imageTemp
    }
}
</script>