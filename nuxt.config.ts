// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  pages: true,
  modules: [
    [
      "@pinia/nuxt",
      {
        autoImports: [
          // automatically imports `defineStore`
          "defineStore",
        ],
      },
    ],
    "@sidebase/nuxt-auth",
  ],
  auth: {
    provider: {
      type: "local",
    },
  },
  ssr: false,
});

// export default defineNuxtConfig({
//   ssr: false,

//   modules: [
//     // ...
//     [
//       '@pinia/nuxt',
//       {
//         autoImports: [
//           // automatically imports `defineStore`
//           'defineStore',
//         ],
//       },
//     ],
//   ],
// });
