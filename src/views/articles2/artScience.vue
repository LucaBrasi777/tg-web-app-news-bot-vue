<template lang="">
    <div class="mb-3" v-for="(item, index) in uniqueArticles" :key="index">
      <div class="section-title mb-0">
        <a class="m-0 text-uppercase font-weight-bold text-danger" :href="item.url" target="_blank">{{ item.title }}</a>
        
    </div>
    <div v-if="item.explanation"  >   <p class="a " style="font-size:16px" > {{item.explanation}}</p></div>
      <div class="bg-white text-center p-3">
        <img class="img-fluid" v-if="item.hdurl" :src="item.hdurl" style="object-fit: cover;">
        <img class="img-fluid" v-else :src="image" style="object-fit: cover;">
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        image: 'https://assets.weforum.org/community/image/3v8PB95CCSn86e5fowthRAybW4ajSY18z2FfVPi2spk.jpeg',
        articles: [],
        currentPage: 1,
        totalPages: 1,
        rows: 11,
        uniqueArticles: [],
      };
    },
    // computed: {
    //   paginatedArticles() {
    //     const start = (this.currentPage - 1) * this.rows;
    //     const end = start + this.rows;
    //     return this.articles.slice(start, end);
    //   },
    // },
    methods: {
      async getData() {
        const pageSize = 96;
  
        try {
          const response = await fetch(
            'https://api.nasa.gov/planetary/apod?api_key=0PkZxUqtBc8oHg5EYKxsHfldiFOTFkeOlHu0LCa4&count=12'
          );
          const data = await response.json();
          return data;
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
  a {
    text-decoration: none;
    color: white;
  }
  
  a:hover {
    text-decoration: underline;
  }
  </style>
  