export default {
  
    methods: {
      
  
      async getData(pageSize, category) {
        try {
          const response = await fetch(
            `https://api-epicnews404.azurewebsites.net/Articles/TopHeadlines?SiteId=1&CategoryId=${category}&Language=14&WithImageOnly=true&Page=1&PageSize=${pageSize}`
          );
          const data = await response.json();
          return data.items;
        } catch (error) {
          console.error("Error fetching news:", error);
          return [];
        }
      },
  
      
    },
  
   
  };