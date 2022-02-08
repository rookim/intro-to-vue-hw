/* global Vue*/
var App = {
  data: function () {
    return {
      message: "Hello from JavaScript!",
      movies: ["Demon Slayer: Infinity Train", "Sword of the Stranger", "Guardians of the Galaxy"],
      newMovie: "",
    };
  },
  methods: {
    addMovie: function () {
      this.movies.push(this.newMovie);
      this.newMovie = "";
    },
  },
};

Vue.createApp(App).mount("#app");
