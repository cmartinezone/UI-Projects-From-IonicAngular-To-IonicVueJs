<template>
  <ion-menu
    contentId="main-content"
    menu-id="main-content"
    type="overlay"
    :disabled="!isMenuEnabled"
  >
    <ion-content>
      <div class="main-list">
        <ion-list id="inbox-list">
          <ion-menu-toggle :auto-hide="false">
            <ion-item
              lines="none"
              @click="navegateTo({ index: 1, path: 'home' })"
              detail="false"
              class="ion-text-center"
              :class="{ selected: stateMenu.selectedIndex == 1 }"
            >
              <ion-label>Home</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle :auto-hide="false">
            <ion-item
              lines="none"
              detail="false"
              @click="navegateTo({ index: 2 })"
              class="ion-text-center"
              :class="{ selected: stateMenu.selectedIndex == 2 }"
            >
              <ion-label>Profile</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle :auto-hide="false">
            <ion-item
              lines="none"
              @click="navegateTo({ index: 3, path: '/my-cart' })"
              detail="false"
              class="ion-text-center"
              :class="{ selected: stateMenu.selectedIndex == 3 }"
            >
              <ion-label>My Cart</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle :auto-hide="false">
            <ion-item
              lines="none"
              @click="navegateTo({ index: 4 })"
              detail="false"
              class="ion-text-center"
              :class="{ selected: stateMenu.selectedIndex == 4 }"
            >
              <ion-label>Favorite</ion-label>
            </ion-item>
          </ion-menu-toggle>
          <ion-menu-toggle :auto-hide="false">
            <ion-item
              lines="none"
              @click="navegateTo({ index: 5 })"
              detail="false"
              class="ion-text-center"
              :class="{ selected: stateMenu.selectedIndex == 5 }"
            >
              <ion-label>My Orders</ion-label>
            </ion-item>
          </ion-menu-toggle>
        </ion-list>

        <!-- Close Button -->
        <ion-button fill="clear" color="dark" @click="closeMenu()">
          <ion-icon :icon="closeCircleOutline"></ion-icon>
        </ion-button>
      </div>
    </ion-content>
  </ion-menu>
  <ion-router-outlet id="main-content"></ion-router-outlet>
</template>

<script>
import {
  IonContent,
  IonItem,
  IonList,
  IonMenu,
  IonRouterOutlet,
  menuController,
  // IonSplitPane,
  IonLabel,
  IonMenuToggle,
  IonIcon,
  IonButton,
} from "@ionic/vue";
import { defineComponent, reactive, ref } from "vue";

import { closeCircleOutline } from "ionicons/icons";
import { useRouter } from "vue-router";

export default defineComponent({
  components: {
    IonContent,
    IonItem,
    IonList,
    IonMenu,
    IonRouterOutlet,
    // IonSplitPane,
    IonLabel,
    IonMenuToggle,
    IonIcon,
    IonButton,
  },

  setup() {
    let isMenuEnabled = ref(false);
    let stateMenu = reactive({ selectedIndex: 1, route: "home" });
    const router = useRouter();
    const navegateTo = (data) => {
      if (data.path) {
        router.push(data.path);
      }

      stateMenu.selectedIndex = data.index;
      // console.log(data);
    };

    return {
      isMenuEnabled,
      closeCircleOutline,
      stateMenu,
      navegateTo,
    };
  },

  methods: {
    openMenu() {
      menuController.enable(true, "main-content");
      menuController.open("main-content");
    },

    closeMenu() {
      /*   menuController.enable(false, "main-content");
      menuController.close("main-content"); */
      menuController.toggle();
    },
  },
});
</script>

<style lang="scss" scoped>
ion-menu {
  --width: 100%;
}

.main-list {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  ion-list {
    width: 100%;

    ion-item {
      font-size: 18px;
      font-weight: 100;
    }

    .selected {
      border-left: 5px solid var(--ion-color-primary);
      color: var(--ion-color-primary);
    }
  }

  ion-button {
    position: absolute;
    bottom: 10%;
    right: 10%;
    font-size: 24px;
    --ripple-color: transparent;
  }
}
</style>
