<template>
  <ion-page>
   <ion-content class="ion-padding ion-text-center">
  <div class="container">
    <div class="page-header">
      <h1>Welcome to Bolt</h1>
      <h3>Explore Us</h3>
    </div>

    <img src="assets/welcome.png" />

    <div class="button-container">
      <ion-button expand="block" class="main-button" routerLink="/login" routerDirection="forward">Log in</ion-button>
      <ion-button expand="block" color="dark" fill="clear" routerLink="/signup" routerDirection="forward">Signup</ion-button>
    </div>
  </div>
</ion-content>

  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonButton } from "@ionic/vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Welcome",
  components: {
    IonContent,
    IonPage,
    IonButton,
  },

  setup() {


    return {

    };
  },
});
</script>

<style scoped>
.container {
    height: 100%;
    display: grid;
    justify-content: center;
    align-items: center;
}

.page-header h1 {
    margin-top: 0;
}

.button-container {
    width: 80%;
    margin-left: auto;
    margin-right: auto;
}
</style>
