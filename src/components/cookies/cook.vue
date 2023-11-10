<template>
  <div v-if="!isAccepted" class="cookies-banner">
    <div class="container">
      <p>
        We use cookies to enhance your experience. By continuing to use our site, you agree to our
        <a href="/privacy-policy">privacy policy</a> and
        <a href="/terms-of-service">terms of service</a>.
      </p>
      <button @click="acceptCookies">Accept</button>
      <button @click="rejectCookies">Reject</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isAccepted: false,
    };
  },
  mounted() {
    const cookiesAccepted = this.getCookie('cookiesAccepted');
    if (cookiesAccepted) {
      this.isAccepted = true;
    }
  },
  methods: {
    acceptCookies() {
      this.setCookie('cookiesAccepted', 'true', 365); // Set cookie for 365 days
      this.isAccepted = true;
    },
    rejectCookies() {
      // Add actions for rejecting cookies (if desired)
    },
    setCookie(name, value, days) {
      const date = new Date();
      date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
      const expires = 'expires=' + date.toUTCString();
      document.cookie = name + '=' + value + '; ' + expires + '; path=/';
    },
    getCookie(name) {
      const cookieName = name + '=';
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i];
        while (cookie.charAt(0) === ' ') {
          cookie = cookie.substring(1);
        }
        if (cookie.indexOf(cookieName) === 0) {
          return cookie.substring(cookieName.length, cookie.length);
        }
      }
      return '';
    },
  },
};
</script>

<style scoped>
.cookies-banner {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: #333;
  color: #fff;
  padding: 10px;
  text-align: center;
  z-index: 1000;
}

button {
  margin: 0 10px;
  padding: 5px 10px;
  background: #007BFF;
  color: #fff;
  border: none;
  cursor: pointer;
}

button:hover {
  background: #0056b3;
}
</style>
