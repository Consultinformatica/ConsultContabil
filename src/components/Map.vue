<template>
  <div ref="mapContainer" class="lg:h-[400px] h-[200px] w-full"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'

const mapContainer = ref(null)

onMounted(() => {
  const map = L.map(mapContainer.value, {
    scrollWheelZoom: false,
    doubleClickZoom: false,
    touchZoom: false,
    boxZoom: false,
    dragging: true
  }).setView([-6.0936464, -39.4543204], 15);

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
  }).addTo(map);

  const data = {
    cep: "63560000",
    state: "CE",
    city: "Acopiara",
    neighborhood: null,
    street: null,
    service: "open-cep",
    location: {
      type: "Point",
      coordinates: {
        longitude: "-39.4543204",
        latitude: "-6.0936464"
      }
    }
  };

  const { latitude, longitude } = data.location.coordinates;

  L.marker([latitude, longitude])
    .addTo(map)
    .bindPopup(`
    <b>CEP:</b> ${data.cep}<br>
    <b>Cidade:</b> ${data.city}<br>
    <b>Estado:</b> ${data.state}<br>
  `);

  mapContainer.value.addEventListener('wheel', (event) => {
    if (event.ctrlKey) {
      event.preventDefault();
      if (event.deltaY < 0) {
        map.zoomIn();
      } else {
        map.zoomOut();
      }
    } else {
      event.preventDefault();
    }
  });
})
</script>