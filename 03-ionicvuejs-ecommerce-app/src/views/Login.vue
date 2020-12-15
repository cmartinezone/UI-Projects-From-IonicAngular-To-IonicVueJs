<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button class="backbtn" routerLink="/welcome" routerDirection="back">
            <img src="assets/back.svg" />
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <div class="ion-padding container">
        <h1>Login</h1>

        <div class="form-container">
          <ion-item>
            <ion-label position="floating">Email</ion-label>
            <ion-input></ion-input>
          </ion-item>
          <ion-item>
            <ion-label position="floating">Password</ion-label>
            <ion-input type="password"></ion-input>
            <ion-icon name="eye" slot="end"></ion-icon>
          </ion-item>

          <ion-button expand="block" @click="login()" class="main-button"
            >Log in</ion-button
          >

          <div class="sign-up">
            Don't have an account?
            <ion-button
              color="dark"
              fill="clear"
              routerLink="/signup"
              routerDirection="forward"
              >Sign up</ion-button
            >
          </div>
        </div>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonPage,
  IonContent,
  IonInput,
  IonButton,
  IonItem,
  IonLabel,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonIcon,
} from "@ionic/vue";

export default {
  components: {
    IonPage,
    IonContent,
    IonInput,
    IonButton,
    IonItem,
    IonLabel,
    IonHeader,
    IonToolbar,
    IonButtons,
    IonIcon,
  },

  methods: {
    login() {
      this.$router.push("/home", { animationDirection: "forward" });
    },
  },
};
</script>

<style lang="scss" scoped>
/* This will remove iOS Header Line */
ion-toolbar {
  --border-width: 0 !important;
}

/*  Removing Android Header Line */
.header-md::after {
  background: none !important;
}

.container h1 {
  margin-top: 0;
}

.backbtn {
  margin-left: 20px;
}

.form-container {
  margin-top: 48px;
}

.form-container ion-item {
  --padding-start: 0;
  --border-color: #dadada;
}

.form-container ion-item ion-label {
  color: #a6a6a6;
}

.form-container ion-item ion-icon {
  margin-top: auto;
  color: #c6cbd4;
}

.form-container ion-button {
  margin-top: 48px;
}

.sign-up {
  display: flex;
  justify-content: center;
  align-items: center;
}

.sign-up ion-button {
  margin: 0;
}
</style>
