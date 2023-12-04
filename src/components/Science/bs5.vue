<template lang="">
  <div class="col-lg-12 mb-3">
    <div class="col-lg-12" v-for="(item, index) in uniqueArticles.slice(33)" :key="index">
      <div class="row news-lg mx-0 mb-3">
        <div class="col-md-6 h-100 px-0">
          <img class="img-fluid h-100" v-if="item.urlToImage" :src="item.urlToImage" style="object-fit: cover;">
          <img class="img-fluid h-100" v-else :src="image" style="object-fit: cover;">
        </div>
        <div class="col-md-6 d-flex flex-column bg-white h-100 px-0">
          <div class="mt-auto p-4">
            <div class="mb-2">
              <a class="badge badge-info text-white text-uppercase font-weight-semi-bold p-2 mr-2" href="#">Science</a>
              <span class="text-body"><small>{{ formatDateTime(item.publishedAt) }}</small></span>
            </div>
            <a class=" d-block mb-3 text-secondary text-uppercase font-weight-bold" :href="item.url" target="_blank">{{ item.title }}</a>
          </div>
          <div class="d-flex justify-content-between bg-white mt-auto p-4">
            <div class="d-flex align-items-center"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: 'https://as2.ftcdn.net/v2/jpg/05/79/64/29/1000_F_579642932_z3CUhYjjYWcGIWJtO30pMyYVFpDyoa1W.jpg',
      uniqueArticles: [],
    };
  },
  methods: {
    formatDateTime(dateTime) {
      const options = {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      };
      return new Date(dateTime).toLocaleString(undefined, options);
    },
    async getData() {
      const pageSize = 49;

      try {
        const response = await fetch(
          `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=9&Language=14&Page=1&PageSize=${pageSize}`
        );
        const data = await response.json();
        return data.items;
      } catch (error) {
        console.error('Error fetching news:', error);
        return [];
      }
    },
    async fetchNews() {
      const articles = await this.getData();
      const uniqueArticlesSet = new Set();

      this.uniqueArticles = articles.filter((article) => {
        const identifier = `${article.title}${article.content}${article.urlToImage}`;
        if (!uniqueArticlesSet.has(identifier)) {
          uniqueArticlesSet.add(identifier);
          return true;
        }
        return false;
      });
    },
  },
  mounted() {
    this.fetchNews();
  },
};
</script>

<style lang="scss" scoped>
.page-numbers {
  margin-top: 20px;
}

a {
  text-decoration: none;
  color: black;
}

a:hover {
  text-decoration: underline;
}

.next-bt,
.prev-bt {
  margin: 13px;
  background-color: white;
  color: rgb(248, 2, 2);
  box-shadow: 0 0 20px 0 rgb(0 0 0 / 50%);
  border-radius: 2px;
  padding: 7px;
  font-weight: bold;
}

.next-bt:hover,
.prev-bt:hover {
  background-image: linear-gradient(to right, #040d1d, #053684);
  color: white;
}

a {
  text-decoration: none;
  color: rgb(246, 243, 243);
  font-weight: bold;
}

a:hover {
  text-decoration: underline;
}

.card {
  position: relative;
  filter: brightness(50%);
}

.card-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  filter: brightness(0.5); /* Adjust the brightness value to control the darkness */
  z-index: 1;
}

.card .d-flex {
  position: relative;
  z-index: 2;
}

.card .d-flex h2 {
  color: #fff; /* Set the color for the bright h2 title */
}

h2 {
  position: relative;
  z-index: 3;
}
</style>
