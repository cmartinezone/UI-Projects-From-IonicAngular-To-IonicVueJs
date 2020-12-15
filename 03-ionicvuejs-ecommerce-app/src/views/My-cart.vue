<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-buttons class="backbtn">
            <ion-button routerLink="/home" routerDirection="back">
              <img src="assets/back-dark.svg" />
            </ion-button>
          </ion-buttons>
        </ion-buttons>

        <ion-buttons slot="end">
          <ion-button class="notification">
            <ion-icon :icon="notificationsOutline" color="dark"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <h1 class="title">Cart</h1>

      <div class="cart-items">
        <ion-card mode="ios">
          <ion-card-content>
            <div class="item-img">
              <img src="assets/cart/cart1.png" />
            </div>

            <div class="item-info">
              <p>Women t-shirt</p>
              <p>Lotto.LTD</p>
              <p>$34.00</p>

              <div class="qty-selector">
                <ion-button fill="clear">-</ion-button>
                <ion-label>1</ion-label>
                <ion-button fill="clear">+</ion-button>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-card mode="ios">
          <ion-card-content>
            <div class="item-img">
              <img src="assets/cart/cart2.png" />
            </div>

            <div class="item-info">
              <p>Female t-shirt</p>
              <p>Bata</p>
              <p>$44.00</p>

              <div class="qty-selector">
                <ion-button fill="clear">-</ion-button>
                <ion-label>1</ion-label>
                <ion-button fill="clear">+</ion-button>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-card mode="ios">
          <ion-card-content>
            <div class="item-img">
              <img src="assets/cart/cart3.png" />
            </div>

            <div class="item-info">
              <p>Shirt</p>
              <p>Next</p>
              <p>$54.00</p>

              <div class="qty-selector">
                <ion-button fill="clear">-</ion-button>
                <ion-label>1</ion-label>
                <ion-button fill="clear">+</ion-button>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-card mode="ios">
          <ion-card-content>
            <div class="item-img">
              <img src="assets/cart/cart4.png" />
            </div>

            <div class="item-info">
              <p>Women shirt</p>
              <p>Plus Point</p>
              <p>$34.00</p>

              <div class="qty-selector">
                <ion-button fill="clear">-</ion-button>
                <ion-label>1</ion-label>
                <ion-button fill="clear">+</ion-button>
              </div>
            </div>
          </ion-card-content>
        </ion-card>

        <ion-card mode="ios">
          <ion-card-content>
            <div class="item-img">
              <img src="assets/cart/cart5.png" />
            </div>

            <div class="item-info">
              <p>Shirt</p>
              <p>Cat's Eye</p>
              <p>$44.00</p>

              <div class="qty-selector">
                <ion-button fill="clear">-</ion-button>
                <ion-label>1</ion-label>
                <ion-button fill="clear">+</ion-button>
              </div>
            </div>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
    <ion-footer translucent="true" class="ion-no-border" mode="md">
      <ion-toolbar color="translucent">
        <ion-button expand="block" class="main-button">Continue</ion-button>
      </ion-toolbar>
    </ion-footer>
  </ion-page>
</template>

<script>
import {
  IonContent,
  IonHeader,
  IonPage,
  IonToolbar,
  IonButtons,
  IonButton,
  IonIcon,
  IonCard,
  IonCardContent,
  IonLabel,
  IonFooter,
} from "@ionic/vue";

import { notificationsOutline, funnelOutline, searchOutline } from "ionicons/icons";

import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  components: {
    IonContent,
    IonHeader,
    IonPage,
    IonToolbar,
    IonButtons,
    IonButton,
    IonIcon,
    IonCard,
    IonCardContent,
    IonLabel,
    IonFooter,
  },

  data() {
    return {
      notificationsOutline,
      funnelOutline,
      searchOutline,
    };
  },
});
</script>

<style lang="scss">
.backbtn {
  margin-left: 15px;
}

.notification {
  margin-right: 15px;
}

ion-content {
  --padding-top: 16px;
  --padding-bottom: 16px;
  --padding-start: 26px;
  --padding-end: 26px;
}

.title {
  margin-top: 0;
  color: #434343;
}

.cart-items {
  ion-card {
    margin-left: 0;
    margin-right: 0;
    border-radius: 0;

    ion-card-content {
      display: flex;
      position: relative;

      .item-img {
        display: flex;
        align-items: center;
        margin-right: 16px;

        img {
          object-fit: cover;
          width: 110px;
          height: 110px;
          box-shadow: 0px 10px 30px 0px rgba(0, 0, 0, 0.16);
        }
      }

      .item-info {
        p {
          font-size: 16px;
        }

        p:nth-child(1) {
          color: #434343;
        }
        p:nth-child(2) {
          color: #919191;
        }
        p:nth-child(3) {
          color: var(--ion-color-primary);
        }

        .qty-selector {
          display: flex;
          justify-content: center;
          align-items: center;
          background: #f6f6f6;
          border-radius: 5px;
          margin-top: 10px;

          ion-button {
            --color: #565656;
            font-size: 16px;
            margin-left: 8px;
            margin-right: 8px;
          }

          ion-label {
            color: #565656 !important;
            font-size: 16px;
          }
        }
      }
    }
  }
}

ion-footer {
  padding-left: 20px;
  padding-right: 20px;

  .main-button::after {
    box-shadow: none !important;
  }
}
</style>
