import { createStore } from 'vuex';

const store = createStore({
  modules: {},

  state: {
    isMenuEnabled: false,

    cetegories: [
      { id: 1, name: 'Womens', image: 'assets/categories/category-1.png' },
      { id: 2, name: 'Mens', image: 'assets/categories/category-2.png' },
      { id: 3, name: 'Kids', image: 'assets/categories/category-3.png' },
    ],

    featuredProducts: [
      {
        id: 1,
        name: 'Womens T-Shirt',
        price: 55,
        image: 'assets/products/prod-1.png',
      },
      {
        id: 2,
        name: 'Mens T-Shirt',
        price: 34,
        image: 'assets/products/prod-2.png',
      },
      {
        id: 1,
        name: 'Womens T-Shirt',
        price: 40,
        image: 'assets/products/prod-3.png',
      },
    ],

    bestSellProducts: [
      {
        id: 1,
        name: 'Womens T-Shirt',
        price: 55,
        image: 'assets/products/prod-4.png',
      },
      {
        id: 2,
        name: 'Mens T-Shirt',
        price: 34,
        image: 'assets/products/prod-5.png',
      },
      {
        id: 1,
        name: 'Womens T-Shirt',
        price: 40,
        image: 'assets/products/prod-6.png',
      },
    ],
  },
  getters: {},
  mutations: {},
  actions: {},
});

export default store;
