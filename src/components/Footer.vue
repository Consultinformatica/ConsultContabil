<template>
	<footer class="bg-gray-900 text-white py-12">
		<div class="container mx-auto px-4">
			<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
				<div>
					<div class="text-2xl text-[#f97316] mb-6 flex space-x-4 font-normal " style="font-family: Montserrat;">
						<img src="/src/assets/logo.png" alt="Logo" class="h-8 mr-2">
						Consult Contábil
					</div>
					<div class="flex space-x-4">
						<!-- <a href="#" class="hover:text-primary">
							<font-awesome-icon :icon="['fab', 'facebook']" />
						</a>
						<a href="#" class="hover:text-primary">
							<font-awesome-icon :icon="['fab', 'instagram']" />
						</a>
						<a href="#" class="hover:text-primary">
							<font-awesome-icon :icon="['fab', 'linkedin']" />
						</a> -->
					</div>
				</div>

				<div>
					<h3 class="text-xl font-bold mb-4">Dados de contato</h3>
					<div class="space-y-2">
						<p>
							<font-awesome-icon class="pr-3" :icon="['fas', 'location-dot']" />
							R. 10 R Lindoval Jose De Lima, 366
							<br />
							Centro, Acopiara CE
						</p>
						<p class="flex">
							<img src="/src/assets/whatsapp.png" class="filter-image h-4 mt-1  mr-3" alt="WhatsApp" />
							<p>
								(88)9 9428-2608
							</p>
						</p>
						<p class="flex">
							<font-awesome-icon class="pr-3 mt-1" :icon="['fas', 'phone']" />
							<p>
								(88) 2152-0679
							</p>
						</p>
						<p class="underline flex">
							<font-awesome-icon class="pr-3 mt-1" :icon="['fas', 'envelope']" />
							<a href="mailto:consultcontabil549@gmail.com">consultcontabil549@gmail.com</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script lang="ts">
export default {
	name: 'Footer',
	data() {
		return {
			year: new Date().getFullYear(),
			month: new Date().getMonth() + 1,
		};
	},
};
</script>

<style scoped>
.filter-image {
	filter: invert()
}
</style>