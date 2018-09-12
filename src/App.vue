<template>
  <div id="app" class="text-center container mx-auto">
    <div class="my-12">
      <img alt="Github Emojis" src="./assets/logo.png">
      <h1 class="mb-2">Github Emojis</h1>
      <p>A list of all the emojis that can be used in Github flavourd Markdown.</p>
    </div>

    <div class="container mx-auto mb-12 flex flex-col items-center">
      <input type="search" placeholder="Search an emoji..." class="shadow appearance-none border rounded w-1/2 pt-3 pb-2 px-3 text-grey-darker" v-model="search">
    </div>

    <!-- Two columns -->
    <section class="flex mb-4 bg-grey-lighter rounded-lg p-4">
      <div class="text-center flex flex-wrap">
          <div v-for="emoji in filteredList" v-bind:key="emoji.name" class="p-4 w-1/2 flex items-center cursor-pointer" @click="doCopy(emoji)">
            <img :src="emoji.img" :alt="emoji.name" class="w-12 h-12 ml-24 mr-12">
            <div class="text-center bg-grey-light py-1 px-3 rounded-sm text-grey-dark"><pre class="">{{ ':' + emoji.name + ':'}}</pre></div>
          </div>
      </div>
    </section>

    <footer class="my-12">
      <p>A fun product by <a href="https://www.khurafat.desi">Khurafat.desi</a></p>
    </footer>

    <img src="./assets/khurafat.png" alt="Khurafat" class="watermark fixed" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default {
  name: "app",
  components: {
    HelloWorld
  },
  data() {
    return {
      emojis: [],
      search: ""
    };
  },
  mounted() {
    axios.get("https://api.github.com/emojis").then(response => {
      this.emojis = Object.entries(response.data).map(([key, value]) => ({
        name: key,
        img: value
      }));
    });
  },
  computed: {
    filteredList() {
      return this.emojis.filter(emoji => {
        return emoji.name.includes(this.search.toLowerCase());
      });
    }
  },
  methods: {
    doCopy: function(emoji) {
      this.$copyText(":" + emoji.name + ":").then(
        e => {
          alert("Copied");
        },
        e => {
          alert("Can not copy");
        }
      );
    }
  }
};
</script>

<style>
/* body {
  background-color: #fff;
  background-image: url("./assets/khurafat.png");
  background-position: right bottom;
  background-repeat: no-repeat;
} */
.watermark {
  right: -2rem;
  bottom: -0.75rem;
  width: 10rem;
}
</style>
