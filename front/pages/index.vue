<template>
  <div>
    <div
      class="contenedor"
      :style="{ backgroundImage: `url(${backgroundImagePath})` }"
    >
      <!-- <img src="@/assets/bg.jpg" class="image" alt=""> -->
      <div class="text-bg">
        <p><img :src="Icono" alt="" /></p>
        <h1>Grand Oasis Cancún</h1>
      </div>
    </div>

    <section class="section-hoteles">
      <template>
        <Carrusel :items="hoteles" />
      </template>
    </section>

    <section>
      <div class="container">
        <b-tabs content-class="mt-3" fill>
          <b-tab title="Restaurantes" active></b-tab>
          <b-tab title="Bares"></b-tab>
        </b-tabs>
      </div>
    </section>
  </div>
</template>

<script>
import backgroundImagePath from "@/assets/oasis.jpg";
import Icono from "@/assets/icon.png";
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return { backgroundImagePath, hoteles: [], Icono };
  },
  methods: {
    ...mapActions({
      obtenerHoteles: "hoteles/obtenerHoteles",
    }),
    obtenerNombre(idPropiedad) {
      let propiedad = this.items.propiedades.find(
        (item) => item.id == idPropiedad
      );
      if (propiedad) {
        return propiedad.nombre;
      } else {
        return "";
      }
    },
  },
  computed: {
    ...mapState({
      items: (state) => state.hoteles.hoteles,
    }),
  },
  async created() {
    await this.obtenerHoteles();
    console.log(this.items, "Prueba");
    this.items.hoteles.map((item) => {
      if (item.nombre == "Grand Oasis Cancún") {
        this.hoteles.push({
          ...item,
          nombrePropiedad: this.obtenerNombre(item.propiedad_id),
        });
      }
    });
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap");
.contenedor {
  height: 100vh;
  width: 100%;
  background-color: rgba(17, 16, 16, 0.3);
  text-align: center;
  position: relative;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.contenedor:before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
}
.text-bg {
  z-index: 9999;
}
.text-bg h1 {
  color: white;
}
.section-hoteles {
  width: 100%;
  padding: 20px;
  height: auto;
  margin: 0 auto;
}
.section-hoteles h1 {
  text-align: center;
  text-transform: uppercase;
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  margin: 20px 0px;
}

.nav-tabs .nav-link:not(.active) {
  background-color: rgb(228, 213, 213) !important;
  color: white;
}

.nav-tabs .nav-link {
  background-color: rgb(57, 110, 226) !important;
  border: none;
}
.nav-tabs .nav-link.active {
  color: white;
}

.tab-content > .tab-pane {
  border: 1px solid;
  border-left: 0px none;
}
</style>
