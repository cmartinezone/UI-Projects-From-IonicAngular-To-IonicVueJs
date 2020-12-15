<template>
  <ion-page>
    <ion-content :scrollY="false" class="ion-padding">
      <div class="title">
        <h4>Signup</h4>
        <p>Register with Code Crafts to get started</p>
      </div>

      <ion-input placeholder="Full Name" class="primary-input"></ion-input>
      <ion-input placeholder="Username" class="primary-input"></ion-input>
      <ion-input placeholder="Password" type="password" class="primary-input"></ion-input>

      <p>By signing up you're agreed to our Terms & Conditions</p>

      <div class="ion-margin-top">
        <ion-button expand="block">SIGN UP</ion-button>
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

p {
  font-size: small;
  color: #999999;
}
/* ion-content {
  --background: white;
}
 */
</style>
