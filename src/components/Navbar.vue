<template>
  <div>
    <div>
      <nav class="uk-navbar-container" uk-navbar>
        <div class="uk-navbar-left">
          <ul class="uk-navbar-nav">
            <li>
              <g-link to="/">{{ $static.strapi.global.data.attributes.siteName }}</g-link>
            </li>
          </ul>
        </div>
        <div class="uk-navbar-right">
          <button
            class="uk-button uk-button-default uk-margin-right"
            type="button"
          >
            Categories
          </button>
          <div
            uk-dropdown="animation: uk-animation-slide-top-small; duration: 300"
          >
            <ul class="uk-nav uk-dropdown-nav">
              <li
                v-for="(category, index) in $static.strapi.categories.data"
                :key="index"
              >
                <!-- <g-link :to="'/category/' + category.data.attributes.slug">{{
                  category.data.attributes.name
                }}</g-link> -->
                {{category.attributes.name}}
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>

<static-query>
query {
  strapi {
    categories {
      data {
        id
        attributes {
          name
          slug
        }
      }
    }
    global {
      data {
        attributes {
          siteName
        }
      }
    }
  }
}
</static-query>
