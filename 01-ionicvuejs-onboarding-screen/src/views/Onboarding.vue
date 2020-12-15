<template>
  <ion-page>
    <ion-content class="ion-padding" :fullscreen="true">
      <ion-slides ref="slides" pager="true">
        <ion-slide class="ion-padding">
          <img src="assets/slide1.png" />

          <div class="slider-text">
            <h2>Easy Exchange!</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies,
              erat vitae porta consequat.
            </p>
          </div>

          <div class="navigator">
            <ion-button color="primary" fill="clear" @click="skip()">SKIP</ion-button>
            <ion-button color="primary" fill="clear" @click="next()">NEXT</ion-button>
          </div>
        </ion-slide>
        <ion-slide class="ion-padding">
          <img src="assets/slide2.png" />

          <div class="slider-text">
            <h2>Easy to Use!</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies,
              erat vitae porta consequat.
            </p>
          </div>

          <div class="navigator">
            <ion-button color="primary" fill="clear" @click="skip()">SKIP</ion-button>
            <ion-button color="primary" fill="clear" @click="next()">NEXT</ion-button>
          </div>
        </ion-slide>
        <ion-slide class="ion-padding">
          <img src="assets/slide3.png" />

          <div class="slider-text">
            <h2>Connect with Others</h2>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ultricies,
              erat vitae porta consequat.
            </p>
          </div>

          <ion-button color="primary ">GET STARTED</ion-button>
          <br />
        </ion-slide>
      </ion-slides>
    </ion-content>
  </ion-page>
</template>

<script>
import { IonContent, IonPage, IonButton, IonSlides, IonSlide } from "@ionic/vue";
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Welcome",
  components: {
    IonContent,
    IonPage,
    IonButton,
    IonSlides,
    IonSlide,
  },

  setup() {
    let slides = ref(null);

    const skip = () => {
      console.log("skipe slide");
    };
    const next = () => {
      slides.value.$el.slideNext();
    };
    return {
      skip,
      next,
      slides,
    };
  },
});
</script>

<style scoped>
ion-slides {
  height: 100%;
}

ion-slide {
  display: block;
}

ion-slide img {
  padding: 15%;
}

.slider-text {
  padding-top: 20%;
}

.slider-text h2 {
  font-family: "SF UI Display Semibold";
}

.navigator {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  left: 0;
  bottom: 0;
}
</style>
