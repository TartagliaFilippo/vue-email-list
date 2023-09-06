const { createApp } = Vue;

createApp({
  data() {
    return {
      email: "",
    };
  },

  mounted() {
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const randomEmail = response.data.response;
        this.email = randomEmail;
        //console.log(response.data.response);
      });
  },
}).mount("#app");
