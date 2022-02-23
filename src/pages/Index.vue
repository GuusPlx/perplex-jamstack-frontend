<template>
  <Layout>
    <div class="uk-section">
      <div class="uk-container uk-container-large">
        <h1>{{ $page.strapi.homepage.data.attributes.hero.title }}</h1>
        <Articles :articles="$page.strapi.articles.data" />
      </div>
    </div>
  </Layout>
</template>

<page-query>
query {
  strapi {
    global {
      data {
        attributes {
          siteName
          favicon {
            data {
              attributes {
                url
              }
            }
          }
          defaultSeo {
            metaTitle
            metaDescription
            shareImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
    homepage {
      data {
        attributes {
          hero {
            title
          }
          seo {
            metaTitle
            metaDescription
            shareImage {
              data {
                attributes {
                  url
                }
              }
            }
          }
        }
      }
    }
    articles {
      data {
        attributes {
          slug
          title
          category {
            data {
              attributes {
                name
              }
            }
          }
          image {
            data {
              attributes {
                url
              }
            }
          }
          author {
            data {
              attributes {
                name
                picture {
                  data {
                    attributes {
                      url
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
</page-query>

<script>
import Articles from "~/components/Articles";
import { getMetaTags } from "~/utils/seo";
import { getStrapiMedia } from "~/utils/medias";

export default {
  components: {
    Articles,
  },
  // metaInfo() {
  //   const { seo } = this.$page.strapi.homepage;
  //   const { defaultSeo, favicon } = this.$page.strapi.global;

  //   // Merge default and article-specific SEO data
  //   const fullSeo = {
  //     ...defaultSeo,
  //     ...seo,
  //   };

  //   return {
  //     title: fullSeo.metaTitle,
  //     meta: getMetaTags(fullSeo),
  //     link: [
  //       {
  //         rel: "favicon",
  //         href: getStrapiMedia(favicon.url),
  //       },
  //     ],
  //   };
  // },
};
</script>
