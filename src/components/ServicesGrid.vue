<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-fit opacity-90">
        <div v-for="service in services" :key="service.title"
            class="bg-white h-52 w-80 shadow-md shadow-gray-400 p-8 rounded-2xl text-center">
            <h3 class="text-2xl font-bold mb-2">{{ service.title }}</h3>
            <p>{{ service.description }}</p>
        </div>
    </div>
</template>

<script lang="ts">

export default {
    name: 'ServicesGrid',
    data() {
        const services = [
            { title: 'Contabilidade', description: 'Nosso departamento contábil está pronto para atender as necessidades legais da sua empresa.' },
            { title: 'Abertura de Empresa', description: 'Abra sua empresa com a estrutura societária mais adequada, sempre com foco na economia tributária.' },
            { title: 'Dpto Pessoal', description: 'Imprescindível para qualquer empresa, sendo responsável pela execução de toda a rotina de departamento de pessoal.' },
            { title: 'Fiscal', description: 'Sua empresa com uma assessoria completa para atender a todas as obrigações fiscais.' },
            { title: 'Financeiro', description: 'Terceirização do Financeiro permite que você mantenha-se focado na gestão dos seus negócios.' },
            { title: 'Societário', description: 'Serviços completos em questões que envolvem a parte legal (administrativa) das empresas junto aos órgãos públicos e privados.' },
        ];
        
        return {
            services,
        };
    },
};
</script>