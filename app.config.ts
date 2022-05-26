import "dotenv/config";

export default {
  expo: {
    name: "desafio-mob4pay",
    slug: "desafio-mob4pay",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#F4F4F5",
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: ["**/*"],
    ios: {
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#F4F4F5",
      },
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      apiURL: process.env.API_URL,
    },
  },
};
