<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start" @click="openMenu()">
          <ion-menu-button :auto-hide="false">
            <img src="assets/menu_bar.svg" />
          </ion-menu-button>
        </ion-buttons>
        <ion-buttons slot="end">
          <ion-button class="notification">
            <ion-icon :icon="notificationsOutline" color="dark"></ion-icon>
            <span>&nbsp;</span>
          </ion-button>
          <ion-button class="filter">
            <ion-icon :icon="funnelOutline" color="dark"></ion-icon>
          </ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <div class="search ion-padding">
        <ion-item lines="none">
          <ion-input placeholder="Search Your Product"></ion-input>
          <ion-icon name="search-outline" slot="start"></ion-icon>
        </ion-item>
      </div>

      <div class="title ion-padding">
        <h2>Categories</h2>
        <p>See all</p>
      </div>

      <div class="category-slider ion-padding-start">
        <ion-slides :options="{ slidesPerView: 'auto', zoom: false, grabCursor: true }">
          <ion-slide v-for="category in $store.state.cetegories" :key="category.id">
            <ion-col>
              <h4>{{ category.name }}</h4>
              <img :src="category.image" />
            </ion-col>
          </ion-slide>
        </ion-slides>
      </div>

      <div class="title ion-padding">
        <h2 class="font-bold">Featured</h2>
        <p>See all</p>
      </div>

      <div class="product-slider ion-padding-start">
        <ion-slides :options="{ slidesPerView: 'auto', zoom: false, grabCursor: true }">
          <ion-slide v-for="product in $store.state.featuredProducts" :key="product.id">
            <ion-col
              class="ion-text-left"
              @click="$router.push({ path: '/item-details' })"
            >
              <img :src="product.image" />
              <p>${{ product.price }}</p>
              <h6>{{ product.name }}</h6>
            </ion-col>
          </ion-slide>
        </ion-slides>
      </div>

      <div class="title ion-padding">
        <h2 class="font-bold">Best Sell</h2>
        <p>See all</p>
      </div>

      <div class="product-slider ion-padding-start">
        <ion-slides :options="{ slidesPerView: 'auto', zoom: false, grabCursor: true }">
          <ion-slide v-for="product in $store.state.bestSellProducts" :key="product.id">
            <ion-col
              class="ion-text-left"
              @click="$router.push({ path: '/item-details' })"
            >
              <img :src="product.image" />
              <p>${{ product.price }}</p>
              <h6>{{ product.name }}</h6>
            </ion-col>
          </ion-slide>
        </ion-slides>
      </div>
    </ion-content>
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
  IonItem,
  IonInput,
  IonSlides,
  IonSlide,
  IonCol,
  menuController,
  IonMenuButton,
} from "@ionic/vue";

import { notificationsOutline, funnelOutline } from "ionicons/icons";

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
    IonItem,
    IonInput,
    IonSlides,
    IonSlide,
    IonCol,
    IonMenuButton,
  },

  data() {
    return {
      notificationsOutline,
      funnelOutline,
    };
  },
  methods: {
    openMenu() {
      menuController.enable(true, "main-content");
      menuController.open("main-content");
    },

    /*     closeMenu() {
      menuController.enable(false, "main-content");
      menuController.close("main-content");
    },
 */
  },
});
</script>

<style lang="scss">
ion-menu-button {
  margin-left: 10px;
}

.filter {
  margin-right: 10px;
}

.search {
  margin-bottom: 20px;

  ion-item {
    border-radius: 10px;
    box-shadow: 0px 13px 30px 0px rgba(0, 0, 0, 0.09);
    padding: 8px;

    ion-icon {
      margin-right: 16px;
    }

    ion-input {
      padding-left: 10px !important;
      border-left: 1px solid #f4f4f4;
    }
  }
}

.title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 32px;

  h2 {
    margin: 0 0 0 16px;
    color: #434343;
  }

  p {
    margin: 0 16px 0 0;
    color: #656565;
  }
}

.category-slider {
  ion-slide {
    width: 150px;
    height: 100px;
    margin-right: 10px;
    margin-left: 20px;
    margin-bottom: 30px;

    ion-col {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      h4 {
        color: #ffffff;
        margin: 0;
      }

      img {
        position: absolute;
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
        top: 0;
        left: 0;
        z-index: -1;
        box-shadow: 0px 15px 20px 0px rgba(0, 0, 0, 0.16);
      }
    }
  }
}

.font-bold {
  font-weight: bold;
}

.product-slider {
  margin-bottom: 30px;

  ion-slide {
    width: 150px;
    height: auto;
    margin-left: 20px;
    margin-right: 10px;

    ion-col {
      img {
        width: 100%;
        height: 180px;
        object-fit: cover;
        border-radius: 8px;
      }

      p {
        margin-top: 5px;
        margin-bottom: 0;
      }

      h6 {
        margin-top: 5px;
        margin-bottom: 0;
      }
    }
  }
}

/* Removing highlight when focused/clicked on product */
ion-slide:focus {
  outline: none !important;
}

ion-col:focus {
  outline: none !important;
}
</style>
