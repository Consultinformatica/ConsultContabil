<template>
  <div ref="mapContainer" class="lg:h-[400px] h-[200px] w-full"></div>
</template>

<script lang="ts">
import 'leaflet/dist/leaflet.css'
import L from 'leaflet';

export default {
  data() {
    return {
      map: null as any,
      data: {
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
      },
      markers: [] as any[]
    }
  },
  mounted() {
    const map = L.map(this.$refs.mapContainer as any, {
      scrollWheelZoom: false,
      doubleClickZoom: false,
      touchZoom: false,
      boxZoom: false,
      dragging: true
    }).setView([-6.0936464, -39.4543204], 15);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: ' OpenStreetMap contributors'
    }).addTo(map);

    const { latitude, longitude } = this.data.location.coordinates;

    this.markers.push((L as any).marker([latitude, longitude]).addTo(map).bindPopup(`
      <b>CEP:</b> ${this.data.cep}<br>
      <b>Cidade:</b> ${this.data.city}<br>
      <b>Estado:</b> ${this.data.state}<br>
    `));

    (this.$refs.mapContainer as any).addEventListener('wheel', (event: any) => {
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
  },
  beforeUnmount() {
    try {
      this.map.off('wheel');
    } catch (error) {
      console.error(error);
    }
  }
}
</script>