<template>
  <ion-app>
    <ion-router-outlet />
    <side-menu></side-menu>
  </ion-app>
</template>

<script>
import { IonApp, IonRouterOutlet } from "@ionic/vue";
import { defineComponent } from "vue";
import SideMenu from "./components/Side-menu.vue";

export default defineComponent({
  name: "App",
  components: {
    IonApp,
    IonRouterOutlet,
    SideMenu,
  },
});
</script>
