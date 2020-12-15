<template>
  <ion-page>
    <ion-content class="ion-padding">
      <div class="title">
        <h4>Login</h4>
        <p>Lets get started</p>
      </div>

      <ion-input placeholder="Username" class="primary-input"></ion-input>
      <ion-input placeholder="Password" type="password" class="primary-input"></ion-input>

      <div class="ion-margin-top ion-text-right forget">
        <a>Forgot Password?</a>
      </div>

      <div class="ion-margin-top">
        <ion-button expand="block">LOGIN</ion-button>
      </div>

      <div class="ion-margin-top ion-text-center">
        <a @click="dismiss()">Close</a>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonPage, IonContent, IonInput, IonButton, modalController } from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonButton,
  },

  methods: {
    async dismiss() {
      await modalController.dismiss();
    },
  },
};
</script>

<style scoped>
.title {
  margin-bottom: 30px;
}

.title h4 {
  color: var(--ion-color-primary);
}

.title p {
  margin-top: 0 !important;
  color: #999999;
  font-size: small;
}

.forget a {
  font-size: small !important;
}
/* ion-content {
  --background: white;
} */
</style>
