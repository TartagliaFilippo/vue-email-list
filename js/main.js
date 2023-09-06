const { createApp } = Vue;

createApp({
  data() {
    return {
      emails: [],
    };
  },

  mounted() {
    for (let i = 0; i < 10; i++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          const randomEmail = response.data.response;
          this.emails.push(randomEmail);
          //console.log(response.data.response);
          //console.log(this.emails);
        });
    }
  },
}).mount("#app");
