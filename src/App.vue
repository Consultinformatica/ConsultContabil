<template>
	<div class="flex flex-col min-h-screen">
		<header class="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div class="mx-auto flex h-16 items-center px-4">
				<router-link to="/" class="flex items-center space-x-2">
					<img
						src="./assets/favicon.png"
						alt="Consult Contabil Logo"
						width="32"
						height="32"
						class="h-8 w-auto"
					/>
				</router-link>
				<nav class="ml-auto flex gap-4">
					<button @click="scrollToSection('sobre')" class="text-lg text-orange-600 hover:text-orange-700">Sobre</button>
					<button @click="scrollToSection('servicos')" class="text-lg text-orange-600 hover:text-orange-700">Serviços</button>
					<button @click="scrollToSection('preco')" class="text-lg text-orange-600 hover:text-orange-700">Preços</button>
					<button @click="scrollToSection('contato')" class="text-lg text-orange-600 hover:text-orange-700">Contato</button>
				</nav>
			</div>
		</header>
		<main class="flex-1">
			<section class="w-full py-12 md:py-24 lg:py-32 xl:py-48">
				<div class="mx-auto px-4 md:px-6">
					<div class="flex flex-col items-center space-y-4 text-center">
						<h1 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
							Departamento Contábil, Fiscal e Pessoal
						</h1>
						<p class="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
							Soluções completas em contabilidade, fiscal e departamento pessoal
							para o seu negócio. Simplifique sua gestão empresarial conosco.
						</p>
						<button
							@click="scrollToSection('contato')"
							class="bg-orange-500 text-white hover:bg-orange-600 rounded-lg px-4 py-1.5">
							Fale conosco
						</button>
					</div>
				</div>
			</section>
			
			<section id="sobre" class="px-[25%] py-12 md:py-24 lg:py-32 bg-orange-50 border-y border-orange-200">
				<div class="mx-auto px-4 md:px-6">
					<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8 text-left">
						Sobre Nós
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
						<div>
							<p class="text-muted-foreground md:text-lg">
								Somos uma empresa especializada em contabilidade e emissão de
								certificados digitais. Com anos de experiência, oferecemos
								soluções personalizadas para empresas de todos os tamanhos.
							</p>
						</div>
						<div class="grid grid-cols-2 gap-4">
							<img src="/placeholder.svg" alt="Escritório" class="rounded-lg" />
							<img src="/placeholder.svg" alt="Equipe" class="rounded-lg" />
							<img src="/placeholder.svg" alt="Atendimento" class="rounded-lg" />
							<img src="/placeholder.svg" alt="Tecnologia" class="rounded-lg" />
						</div>
					</div>
				</div>
			</section>
			
			<section id="servicos" class="px-[25%] py-12 md:py-24 lg:py-32">
				<div class="mx-auto px-4 md:px-6">
					<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
						Nossos Serviços
					</h2>
					<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
						<div class="bg-orange-100 p-6 rounded-lg">
							<h3 class="text-xl font-semibold mb-4">Serviços Contábeis</h3>
							<p>
								Oferecemos uma gama completa de serviços contábeis para manter
								sua empresa em conformidade e otimizar suas operações financeiras.
							</p>
						</div>
						<div class="bg-orange-100 p-6 rounded-lg">
							<h3 class="text-xl font-semibold mb-4">Planejamento Tributário</h3>
							<p>
								Desenvolvemos estratégias personalizadas para minimizar sua carga
								tributária e maximizar seus resultados financeiros.
							</p>
						</div>
						<div class="bg-orange-100 p-6 rounded-lg">
							<h3 class="text-xl font-semibold mb-4">Empresas de Lucro Presumido</h3>
							<p>
								Oferecemos suporte especializado para empresas que optam pelo
								regime de Lucro Presumido, garantindo conformidade e eficiência.
							</p>
						</div>
						<div class="bg-orange-100 p-6 rounded-lg">
							<h3 class="text-xl font-semibold mb-4">Empresas de Lucro Real</h3>
							<p>
								Fornecemos assessoria completa para empresas no regime de Lucro
								Real, ajudando a otimizar resultados e cumprir obrigações fiscais.
							</p>
						</div>
					</div>
				</div>
			</section>
			
			<section id="precos" class="px-[25%] py-12 md:py-24 lg:py-32">
				<div class="mx-auto px-4 md:px-6">
					<h2 class="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
						Nossos Preços
					</h2>
					<div class="w-full mx-auto grid grid-cols-1">
						<table class="table-auto">
							<thead>
								<tr>
									<th class="text-white bg-orange-500 font-semibold hover:bg-orange-500 py-2 text-left px-4">
										Serviço
									</th>
									<th class="text-white bg-orange-500 font-semibold hover:bg-orange-500 py-2 text-left px-4">
										Descrição
									</th>
									<th class="text-white bg-orange-500 font-semibold hover:bg-orange-500 py-2 text-left px-4">
										Preço
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<td class="px-4 py-2">Certificado Digital A1</td>
									<td class="px-4 py-2">Validade de 1 ano</td>
									<td class="px-4 py-2">R$ 199</td>
								</tr>
								<tr>
									<td class="px-4 py-2">Certificado Digital A3</td>
									<td class="px-4 py-2">Validade de 3 anos</td>
									<td class="px-4 py-2">R$ 299</td>
								</tr>
								<tr>
									<td class="px-4 py-2">Contabilidade Personalizada</td>
									<td class="px-4 py-2">Ideal para empresas de todos os seguimentos</td>
									<td class="px-4 py-2">
										Consulte-nos via WhatsApp
										<a
											href="https://api.whatsapp.com/send?phone=5588994282608&text=Ol%C3%A1%2C%20gostaria%20de%20mais%20detalhes%20dos%20pre%C3%A7os%20da%20contabilidade%3F"
											target="_blank"
											rel="noopener noreferrer"
										>
											<message-circle class="h-6 w-6" />
										</a>
									</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
			</section>
			
			<section id="contato" class="px-[25%] py-6 md:py-24 lg:py-20 bg-orange-50 border-y border-orange-200">
				<div class="mx-auto px-4 md:px-6">
					<h2 class="px-[10%] lg:px-[10%] text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-8">
						Entre em Contato
					</h2>
					<div class="flex flex-col items-center space-y-4 px-[10%] lg:px-[10%]">
						<p class="text-muted-foreground md:text-lg text-center">
							Estamos aqui para ajudar. Entre em contato conosco através das
							nossas redes sociais ou WhatsApp.
						</p>
						<div class="flex space-x-4">
							<a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
								<facebook class="h-6 w-6" />
							</a>
							<a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
								<instagram class="h-6 w-6" />
							</a>
							<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
								<linkedin class="h-6 w-6" />
							</a>
							<a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
								<twitter class="h-6 w-6" />
							</a>
						</div>
					</div>
				</div>
			</section>
		</main>
		<footer class="w-full py-6 bg-background">
			<div class="mx-auto px-4 md:px-6">
				<div class="flex flex-col items-center justify-between gap-4 md:flex-row">
					<p class="text-sm text-muted-foreground">
						© 2024 Consult Contábil. Todos os direitos reservados.
					</p>
					<nav class="flex gap-4">
						<router-link to="#" class="text-sm font-medium text-orange-600 hover:text-orange-700">
							Termos de Serviço
						</router-link>
						<router-link to="#" class="text-sm font-medium text-orange-600 hover:text-orange-700">
							Política de Privacidade
						</router-link>
					</nav>
				</div>
			</div>
		</footer>
		<a
			href="https://wa.me/88994282608"
			target="_blank"
			rel="noopener noreferrer"
			class="fixed bottom-4
 right-4 bg-orange-500 text-white p-4 rounded-full shadow-lg hover:bg-orange-600 transition-colors"
		>
			<message-circle class="h-6 w-6" />
			<span class="sr-only">Fale conosco no WhatsApp</span>
		</a>
	</div>
</template>
<script>
export default {
	name: "LandingPage",
	data() {
		return {
			colors: {
				primary: "bg-orange-500 text-white hover:bg-orange-600",
				secondary: "bg-orange-100 text-orange-800 hover:bg-orange-200",
				accent: "text-orange-600 hover:text-orange-700",
			},
		};
	},
	methods: {
		scrollToSection(elementId) {
			const element = document.getElementById(elementId);
			if (element) {
				element.scrollIntoView({ behavior: 'smooth' });
			}
		},
	},
};
</script>
<style scoped>
	
</style>