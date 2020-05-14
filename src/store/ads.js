export default {
  state: {
    ads: [
      {
        title: "First ad",
        description: "Hello this is a first picture",
        promo: false,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
        id: "123"
      },
      {
        title: "Second ad",
        description: "Somebody knows",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
        id: "124"
      },
      {
        title: "Third ad",
        description: "Porque no",
        promo: true,
        imageSrc: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        id: "125"
      }
    ]
  },
  mutations: {},
  actions: {},
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo);
    },
    myAds(state) {
      return state.ads; // TODO: to filter by user later
    }
  }
};
