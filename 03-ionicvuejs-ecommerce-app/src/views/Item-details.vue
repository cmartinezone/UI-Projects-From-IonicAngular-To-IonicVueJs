<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-button
            color="primary"
            class="backbtn"
            routerLink="/home"
            routerDirection="back"
          >
            <img src="assets/back-dark.svg" />
          </ion-button>
        </ion-buttons>

        <ion-buttons slot="end">
          <ion-button>
            <ion-icon :icon="searchOutline" color="dark"></ion-icon>
          </ion-button>
          <ion-button class="notification">
            <ion-icon :icon="notificationsOutline" color="dark"></ion-icon>
            <span>&nbsp;</span>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-slides :pager="true" class="product-slider">
        <ion-slide>
          <img src="assets/product-slider/prod-slide1.png" />
        </ion-slide>
        <ion-slide>
          <img src="assets/product-slider/prod-slide1.png" />
        </ion-slide>
        <ion-slide>
          <img src="assets/product-slider/prod-slide1.png" />
        </ion-slide>
      </ion-slides>

      <div class="ion-padding-vertical">
        <h1 class="item-name">Black turtleneck top</h1>

        <h4 class="price">
          $42
          <span class="real-price">$62</span>
        </h4>
      </div>

      <div class="seperator">
        <hr />
      </div>

      <div class="review">
        <ion-row>
          <ion-col size="6">
            <div class="rating">4.5</div>

            Very Good
          </ion-col>
          <ion-col size="6">
            <div class="count">49 Reviews</div>
          </ion-col>
        </ion-row>
      </div>

      <div class="seperator">
        <hr />
      </div>

      <div class="description">
        <h5>Description</h5>

        <p>
          A wonderful serenity has taken possession of my entire soul, like these sweet
          mornings of spring which I enjoy with my whole heart. I am alone, and feel the
          charm of existence in this spot, which was created for the bliss of souls like
          mine.
        </p>
      </div>

      <div class="seperator">
        <hr />
      </div>

      <div class="variation">
        <ion-segment @ionChange="segmentChanged($event)" :value="activeVariation">
          <ion-segment-button value="size">
            <ion-label>Select Size</ion-label>
          </ion-segment-button>
          <ion-segment-button value="color">
            <ion-label>Select Color</ion-label>
          </ion-segment-button>
        </ion-segment>
      </div>

      <div class="seperator">
        <hr />
      </div>

      <div class="variation-selector">
        <div class="sizes" :class="{ 'active-variation': activeVariation == 'size' }">
          <div :class="{ active: selectedSize == 1 }" @click="changeSize(1)">S</div>
          <div :class="{ active: selectedSize == 2 }" @click="changeSize(2)">M</div>
          <div :class="{ active: selectedSize == 3 }" @click="changeSize(3)">L</div>
          <div :class="{ active: selectedSize == 4 }" @click="changeSize(4)">XL</div>
        </div>

        <div class="colors" :class="{ 'active-variation': activeVariation == 'color' }">
          <div :class="{ active: selectedColor == 1 }" @click="changeColor(1)">BLACK</div>
          <div :class="{ active: selectedColor == 2 }" @click="changeColor(2)">GREEN</div>
          <div :class="{ active: selectedColor == 3 }" @click="changeColor(3)">BLUE</div>
        </div>
      </div>
    </ion-content>
    <ion-footer>
      <ion-row>
        <ion-col size="6">
          <ion-button expand="full" color="light">Add to cart</ion-button>
        </ion-col>
        <ion-col size="6">
          <ion-button expand="full">Buy now</ion-button>
        </ion-col>
      </ion-row>
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
  IonSlides,
  IonSlide,
  IonCol,
  IonRow,
  IonLabel,
  IonSegmentButton,
  IonSegment,
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
    IonSlides,
    IonSlide,
    IonCol,
    IonRow,
    IonLabel,
    IonSegmentButton,
    IonSegment,
    IonFooter,
  },

  data() {
    return {
      notificationsOutline,
      funnelOutline,
      searchOutline,
      selectedSize: null,
      selectedColor: null,
      activeVariation: "size",
    };
  },
  methods: {
    segmentChanged(event) {
      // console.log(event.target.value);
      this.activeVariation = event.target.value;
    },
    changeSize(size) {
      this.selectedSize = size;
    },

    changeColor(color) {
      this.selectedColor = color;
    },
  },

  mounted() {
    // this.activeVariation = "size";
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

.item-name {
  color: #2a2a2a;
}

.price {
  color: var(--ion-color-primary);

  span {
    color: #2a2a2a;
    text-decoration: line-through;
    margin-left: 20px;
    font-size: medium;
    vertical-align: top;
  }
}

.seperator {
  hr {
    position: absolute;
    left: 0;
    width: 100%;
    background: #e2e2e2;
  }
}

.review {
  margin-top: 16px;
  color: #2a2a2a;

  .rating {
    display: inline-block;
    color: #ffffff;
    background: var(--ion-color-primary);
    padding: 10px 20px 10px 20px;
    border-radius: 5px;
    margin-right: 10px;
  }

  .count {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    color: var(--ion-color-primary);
  }
}

.description {
  h5 {
    color: #2a2a2a;
    padding-top: 10px;
  }

  p {
    color: #656565;
  }
}

.variation {
  padding-top: 16px;

  ion-segment-button {
    color: #2a2a2a;
  }
}

.variation-selector {
  margin-top: 30px;
  display: flex;
  position: relative;

  .active-variation {
    opacity: 1 !important;
    z-index: 1 !important;
  }

  .sizes {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    opacity: 0;
    z-index: 0;
    padding-bottom: 30px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f3f3f3;
      width: 50px;
      height: 50px;
      margin-right: 8px;
      transition: 0.5s ease-in-out;
    }

    .active {
      color: #ffffff;
      background-color: var(--ion-color-primary);
    }
  }

  .colors {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    width: 100%;
    opacity: 0;
    z-index: 0;
    padding-bottom: 30px;

    div {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #f3f3f3;
      width: 70px;
      height: 50px;
      margin-right: 8px;
      transition: 0.5s ease-in-out;
    }

    .active {
      color: #ffffff;
      background-color: var(--ion-color-primary);
    }
  }
}

ion-footer {
  ion-row {
    padding: 0;

    ion-col {
      padding: 0;

      ion-button {
        margin: 0;
        height: 50px;
        font-size: 18px;
        box-shadow: none;
      }
    }
  }
}

// This will remove footer shadow on android
.footer-md::before {
  background-image: none !important;
}
</style>
