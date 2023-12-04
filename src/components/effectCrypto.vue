<template>
  <div>
    <h4 class="animated-heading"><router-link @click="closedBusiness" to="/Business/Crypto">CRYPTO</router-link></h4>
  </div>
</template>

<script>
export default {
  methods: {
    closedBusiness() {
      setTimeout(() => {
    const closeHome = document.getElementById('home');
    if (closeHome) {
      closeHome.style.display = "none";
    }
  }, 0);
      setTimeout(() => {
        const closeBusiness = document.getElementById('business');
        if (closeBusiness) {
          closeBusiness.style.display = "none";
        }
      }, 0);
    },
  },
  mounted() {
    // Добавленный код
    const heading = document.querySelector('.animated-heading');
    heading.style.animation = 'flicker 1.5s infinite, colorChange 5s infinite';
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.animated-heading {
  animation: flicker 1.5s infinite, colorChange 5s infinite;
}

@keyframes flicker {
  0%, 100% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
  }
}

@keyframes colorChange {
  0%, 100% {
    color: #fdfbfa; /* белый цвет */
  }
  25% {
    color: #fa0202; /* красный цвет */
  }
  50% {
    color: #ffd700; /* золотой цвет */
  }
  75% {
    color: #fa0202; /* красный цвет */
  }
}
</style>
