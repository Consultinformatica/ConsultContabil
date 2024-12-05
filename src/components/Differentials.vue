<template>
	<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-black">
		<div v-for="differential in differentials" :key="differential.title"
			class="bg-white w-80 shadow-md drop-shadow-md shadow-orange-500 rounded-2xl text-center">
			<img :src="differential.icon" alt="Icon"
				class="mx-auto mb-4 w-full rounded-2xl rounded-br-[120px]" />
			<h3 class="text-xl font-semibold p-3">{{ differential.title }}</h3>
			<p class="p-7 pt-0">{{ differential.description }}</p>
		</div>
	</div>
</template>

<script lang="ts">
const imgEquipeQualificada = new URL(`/src/assets/images/img-equipe-qualificada.jpg`, import.meta.url).href;
const imgAgilidade = new URL(`/src/assets/images/img-agilidade.jpg`, import.meta.url).href;
const imgEstrategia = new URL(`/src/assets/images/img-estrategia.jpg`, import.meta.url).href;


export default {
	name: 'Differentials',
	data() {
		const differentials = [
			{ title: 'Equipe qualificada', description: 'Profissionais experientes com mais de 10 anos de experiência', icon: imgEquipeQualificada },
			{ title: 'Agilidade', description: 'Tenha atenção no que é mais importante no seu negócio, com mais tempo e agilidade para cativar e inovar com seus clientes.', icon: imgAgilidade },
			{ title: 'Estratégia', description: 'Crescimento sustentável e de maneira estratégica. Com soluções para sua gestão, desenvolvendo as estratégias em vendas, finanças, pessoas e processos', icon: imgEstrategia },
		];
		return {
			differentials,
		};
	},
};
</script>