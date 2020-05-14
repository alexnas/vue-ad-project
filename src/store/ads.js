import * as fb from "firebase";

class Ad {
  constructor(
    title,
    description,
    ownerId,
    imageSrc = "",
    promo = false,
    id = null
  ) {
    (this.title = title),
      (this.description = description),
      (this.ownerId = ownerId),
      (this.imageSrc = imageSrc),
      (this.promo = promo),
      (this.id = id);
  }
}

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
  mutations: {
    createAd(state, payload) {
      state.ads.push(payload);
    }
  },
  actions: {
    async createAd({ commit, getters }, payload) {
      commit("clearError");
      commit("setLoading", true);

      try {
        // new Ad(
        const newAd = new Ad(
          payload.title,
          payload.description,
          getters.user.id,
          payload.imageSrc,
          payload.promo
        );

        const ad = await fb
          .database()
          .ref("ads")
          .push(newAd);

        // console.log("ad", ad);

        commit("setLoading", false);
        commit("createAd", {
          ...newAd,
          id: ad.key
        });
      } catch (error) {
        commit("setError", error.message);
        commit("setLoading", false);
        throw error;
      }
    }
  },
  getters: {
    ads(state) {
      return state.ads;
    },
    promoAds(state) {
      return state.ads.filter(ad => ad.promo);
    },
    myAds(state) {
      return state.ads; // TODO: to filter by user later
    },
    adById(state) {
      return adId => {
        return state.ads.find(ad => ad.id === adId);
      };
    }
  }
};
