<template>
    <div>
        <button @click="toggleChat" class="chat-button">
            <img src="/src/assets/whatsapp.png" alt="WhatsApp" />
        </button>
        <div v-if="isChatOpen">
            <div class="whatsapp-float cardcontainer">
                <div class="chat-header">
                    <p>WhatsApp</p>
                    <button @click="toggleChat" class="rounded-full p-3 pt-2 pb-2 bg-gray-800 font-bold">✖</button>
                </div>
                <div class="thought-bubble">
                    <p>Olá 👋!</p>
                    <p>Como posso ajudar?</p>
                </div>
                <button class="whatsapp-button flex justify-between items-center" @click="whatsappLink">
                    <span class="flex-1">Iniciar conversa</span>
                    <img class="w-10 h-10 ml-2" src="/src/assets/send.gif"/>
                </button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    data() {
        return {
            isChatOpen: false,
            whatsappNumber: '5588994282608',
            whatsappMessage: 'Olá, gostaria de ajuda!?',
        };
    },
    methods: {
        whatsappLink() {
            window.open(`https://api.whatsapp.com/send?phone=${this.whatsappNumber}&text=${encodeURIComponent(this.whatsappMessage)}`, '_blank');
        },
        toggleChat() {
            this.isChatOpen = !this.isChatOpen;
        },
    },
};
</script>

<style scoped>


@keyframes zoominoutsinglefeatured {
    0% {
        transform: scale(0,0);
    }
    50% {
        transform: scale(1.1,1.1);
    }
    100% {
        transform: scale(1,1);
    }
}

.cardcontainer  {
    animation: zoominoutsinglefeatured 0.5s normal;
}

.chat-button {
    position: fixed;
    bottom: 20px;
    right: 20px;
    border: none;
    border-radius: 50%;
    background-color: #25d366;
    width: 60px;
    height: 60px;
    padding: 6px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    z-index: 9999;
}

.chat-header {
  background-color: #25D366;
  color: white;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px 8px 0 0;
}

.thought-bubble {
  position: relative;
  background: #252525;
  color: white;
  padding: 10px;
  border-radius: 8px;
  margin: 10px;
}

.thought-bubble:after {
  content: '';
  position: absolute;
  top: 20px;
  right: 100%;
  border-width: 10px;
  border-style: solid;
  border-color: transparent #252525 transparent transparent;
}

.whatsapp-float {
    position: fixed;
    bottom: 20px;
    right: 20px;
    background-color: #25d366;
    padding: 16px;
    border-radius: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    width: 280px;
    color: white;
    z-index: 9999;
}

.whatsapp-chat {
    background-color: #202124;
    color: white;
    padding: 12px;
    border-radius: 8px;
    margin-bottom: 10px;
    font-size: 14px;
}

.whatsapp-chat p {
    margin: 0;
    margin-bottom: 5px;
}

.whatsapp-button {
    background-color: white;
    color: #25d366;
    border: none;
    padding: 10px 16px;
    font-size: 16px;
    font-weight: bold;
    border-radius: 60px;
    cursor: pointer;
    width: 100%;
}

.whatsapp-button:hover {
    background-color: #e8e8e8;
}
</style>
