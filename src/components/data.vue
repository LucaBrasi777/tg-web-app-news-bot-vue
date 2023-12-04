
   <template>
    <div>
      <v-select
      class="mySelect"
        clearable
        chips
        label="News and articles filter by country"
        :items="country.map(item => item.name)"
        v-model="selectedCountryNames"
        multiple
        variant="underlined"
      ></v-select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        country: [
          {
            name: 'USA',
            id: 51,
          },
          {
            name: 'RU',
            id: 41,
          },
          {
            name: 'UA',
            id: 50,
          },
        ],
        selectedCountryNames: [],
      };
    },
    watch: {
      selectedCountryNames(newSelectedCountryNames) {
        // Save the IDs instead of names in local storage
        const selectedCountryIds = newSelectedCountryNames.map(name => {
          const country = this.country.find(country => country.name === name);
          return country ? country.id : null;
        });
        // Filter out null values before saving to localStorage
        localStorage.setItem('selectedCountry', JSON.stringify(selectedCountryIds.filter(Boolean)));
        localStorage.test = 2;
      },
    },
    
    mounted() {
      // Load the saved IDs from local storage

      const savedSelectedCountryIds = localStorage.getItem('selectedCountry');
      if (savedSelectedCountryIds) {
        // Convert the IDs back to names
        const selectedCountryNames = JSON.parse(savedSelectedCountryIds).map(id => {
          const country = this.country.find(country => country.id === id);
          return country ? country.name : null;
        });
        this.selectedCountryNames = selectedCountryNames.filter(Boolean); // Remove null values
      }
    },
  };
  </script>
  <style scoped lang="scss">
  .mySelect::v-deep .v-chip {
background-color:rgb(136, 132, 132);
color: white;
border:2px solid white;
font-weight: bold;
button {
  color: white;
}
}
  </style>
  