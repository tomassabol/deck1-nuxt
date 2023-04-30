// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@vite-pwa/nuxt",
    "@nuxtjs/apollo",
  ],
  pwa: {
    manifest: {
      name: "DECK1 Dispatch App",
      short_name: "DECK1 Dispatch App",
      description: "DECK1 Dispatch App",
      lang: "en",
    },
    devOptions: {
      enabled: true,
      type: "module",
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: "https://api.deck1.sk",
      },
    },
  },

  app: {
    head: {
      charset: "utf-16",
      title: "DECK1 Dispatch App",
      meta: [
        {
          name: "description",
          content: "DECK1 Dispatch App",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      dsn: process.env.SENTRY_DSN,
      env: process.env.SENTRY_ENV,
    },
  },
});
