<template>
  <ion-page>
    <ion-content class="ion-padding ion-text-center" color="primary">
      <img src="assets/logo.png" class="logo" />

      <div class="title">
        <h2>Welcome</h2>
        <p>Enjoy the Code Crafts App</p>
      </div>

      <div class="ion-margin-top">
        <ion-button
          expand="block"
          class="ion-margin-top"
          @click="register()"
          fill="outline"
          color="white"
          >SIGN UP</ion-button
        >
        <ion-button expand="block" class="ion-margin-top" @click="login()" color="white"
          >LOGIN</ion-button
        >
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonButton, modalController } from "@ionic/vue";
import { defineComponent } from "vue";
import RegisterPage from "@/views/Register";
import LoginPage from "@/views/Login";

export default defineComponent({
  name: "Welcome",
  components: {
    IonContent,
    IonPage,
    IonButton,
  },

  setup() {
    const login = async () => {
      const modal = await modalController.create({
        component: LoginPage,
        animated: true,
        mode: "ios",
        showBackdrop: false,
        cssClass: "login-modal",
      });
      return modal.present();
    };

    const register = async () => {
      const modal = await modalController.create({
        component: RegisterPage,
        animated: true,
        mode: "ios",
        showBackdrop: false,
        cssClass: "register-modal",
      });
      return modal.present();
    };

    return {
      register,
      login,
    };
  },
});
</script>

<style scoped>
.logo {
  width: 50%;
  margin: 20% 0 20% 0;
}

.title {
  margin-bottom: 30px;
}

.title p {
  margin-top: 0 !important;
}
</style>
