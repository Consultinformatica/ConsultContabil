<template>
  <footer class="bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <div class="text-2xl font-bold text-primary mb-6">Contabilidade</div>
          <div class="flex space-x-4">
            <a href="#" class="hover:text-primary">
              <font-awesome-icon :icon="['fab', 'facebook']" />
            </a>
            <a href="#" class="hover:text-primary">
              <font-awesome-icon :icon="['fab', 'instagram']" />
            </a>
            <a href="#" class="hover:text-primary">
              <font-awesome-icon :icon="['fab', 'linkedin']" />
            </a>
          </div>
        </div>
        
        <div>
          <h3 class="text-xl font-bold mb-4">Dados de contato</h3>
          <div class="space-y-2">
            <p>R. XV de Novembro, 3557 Sala 704</p>
            <p>Centro São José do Rio Preto</p>
            <p>(88)9 9961-2726</p>
            <p class="underline"><a href="mailto:consultcontabil549@gmail.com">consultcontabil549@gmail.com</a></p>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Links úteis</h3>
          <ul class="space-y-2">
            <li><a href="#" class="hover:text-primary">Agenda tributária</a></li>
            <li><a href="#" class="hover:text-primary">Tabelas práticas</a></li>
            <li><a href="#" class="hover:text-primary">Formulários Diversos</a></li>
            <li><a href="#" class="hover:text-primary">Facilidade Contábil</a></li>
            <li><a href="#" class="hover:text-primary">Certidões negativas</a></li>
            <li><a href="#" class="hover:text-primary">Modelos de documentos</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>