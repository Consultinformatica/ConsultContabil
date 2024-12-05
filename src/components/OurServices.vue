<template>
    <div class="grid grid-cols-1 lg:grid-cols-2">
        <div class="flex justify-end m-16 mr-0 sml:-mr-16 sm:mr-32 sm:ml-0">
            <div class="flex flex-col justify-start w-80">
                <p class="text-3xl font-bold text-black">Bem vindo a contabilidade!</p>
                <p class="text-xl mt-5">
                    Nossos especialistas se encarregam de organizar e processar os registros contábeis, aperfeiçoar
                    relatórios, solucionar problemas de RH e segurança do trabalho. Não se preocupe em apresentar os
                    relatórios – iremos apresentá-los a tempo! Depende de você expandir seus negócios e ganhar dinheiro
                </p>
                <button class="text-xl mt-5 text-start text-orange-400 hover:text-orange-600 underline" @click="toContatos()">Saiba mais sobre ></button>
            </div>
        </div>
        <div class="grid grid-cols-1 gap-16 lg:gap-x-20 lg:grid-cols-2 w-fit -ml-20 sm:ml-0 opacity-95">
            <div v-for="service in services" :key="service.title"
                class="relative bg-orange-50 h-56 w-56 xl:w-80 shadow-md shadow-gray-400 p-7 rounded-2xl text-center">
                <div
                    class="absolute flex items-center justify-center w-16 h-16 -top-6 -left-4 bg-yellow-500 shadow-md shadow-orange-300 rounded-full">
                    <font-awesome-icon :icon="service.icon" class="h-10" />
                </div>
                <h3 class="text-2xl font-bold mb-2">{{ service.title }}</h3>
                <p>{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'OurServices',
    data() {
        const services = [
            { title: 'Contabilidade', description: 'Nosso departamento contábil está pronto para atender as necessidades legais da sua empresa.', icon: 'building' },
            { title: 'Abertura de Empresa', description: 'Abra sua empresa com a estrutura societária mais adequada, sempre com foco na economia tributária.', icon: 'chart-pie' },
            { title: 'Fiscal', description: 'Sua empresa com uma assessoria completa para atender a todas as obrigações fiscais.', icon: 'calendar-week' },
            { title: 'Financeiro', description: 'Terceirização do Financeiro permite que você mantenha-se focado na gestão dos seus negócios.', icon: 'calculator' },
        ];

        return {
            services,
        };
    },
    methods: {
        toContatos() {
            this.$router.push('/contatos');
        },
    },
};
</script>