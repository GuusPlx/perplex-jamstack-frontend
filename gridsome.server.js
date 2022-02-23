// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// module.exports = function (api) {
//   api.createPages(async ({ graphql, createPage }) => {
//     const data = await graphql(`
//       strapi {
//         articles {
//           data {
//             attributes {
//               slug
//             }
//           }
//         }
//         categories {
//           data {
//             attributes {
//               slug
//             }
//           }
//         }
//       }
//     `);

//     // Create blog articles pages.

//     const articles = data.articles;
//     const categories = data.categories;

//     articles.forEach((article) => {
//       createPage({
//         path: `/article/${article.slug}`,
//         component: "./src/templates/Article.vue",
//         context: {
//           slug: article.slug,
//         },
//       });
//     });

//     categories.forEach((category) => {
//       createPage({
//         path: `/category/${category.slug}`,
//         component: "./src/templates/Category.vue",
//         context: {
//           slug: category.slug,
//         },
//       });
//     });
//   });
// };
