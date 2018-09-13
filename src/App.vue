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
    <section class="flex mb-4 bg-grey-lighter rounded-lg">
      <div class="text-center flex flex-wrap py-6">
          <div v-for="emoji in filteredList" v-bind:key="emoji.name" class="w-1/3 cursor-pointer" @click="doCopy(emoji)">
            <div class="py-4 flex items-center ">
              <img :src="emoji.img" :alt="emoji.name" class="w-12 h-12 ml-10 mr-6">
              <div class="text-center bg-grey-light py-1 px-3 rounded-sm text-grey-dark"><pre class="">{{ ':' + emoji.name + ':'}}</pre></div>
            </div>
          </div>
      </div>
    </section>

    <footer class="my-12">
      <p>A fun product by <a href="https://www.khurafat.desi">Khurafat.desi</a></p>
    </footer>

    <div class="copied bg-grey-light">
      <p class="text-grey font-bold">Tag Copied!</p>
      <div class="p-12">
        <img :src="copied.img" :alt="copied.name" class="mr-12 pt-8">
        <h3 class="py-4 px-8 align-top text-grey bg-grey-light">{{ ":" + copied.name + ":" }}</h3>
      </div>
    </div>

    <img src="./assets/khurafat.png" alt="Khurafat" class="watermark fixed" />
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "app",
  data() {
    return {
      emojis: [],
      copied: {
        img:
          "https://assets-cdn.github.com/images/icons/emoji/unicode/1f4af.png?v8",
        name: "100"
      },
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
        () => {
          this.copied = emoji;
          window
            .$(".copied")
            .show()
            .find("div")
            .addClass("animateIn");

          setTimeout(() => {
            window
              .$(".copied div")
              .removeClass("animateIn")
              .addClass("animateOut");

            window.$(".copied").fadeOut(() => {
              window.$(".copied div").removeClass("animateOut");
            });
          }, 1400);
        }
        // e => {
        //   alert("Can not copy");
        //   console.log(e);
        // }
      );
    }
  }
};
</script>

<style>
.watermark {
  right: -2rem;
  bottom: -0.75rem;
  width: 10rem;
}
.copied {
  position: fixed;
  width: 140%;
  height: 100%;
  text-align: center;
  z-index: 200;
  top: 0px;
  left: -20%;
  display: none;
  opacity: 1;
}

.copied p {
  font-size: 40px;
  margin-top: 7%;
}

.copied div {
  font-size: 120px;
  margin-top: 3%;
  text-shadow: 2px 2px #eee;
  background: rgba(255, 255, 255, 0.4);
}
.copied div img {
  display: inline-block;
}
.copied div h3 {
  display: inline-block;
  margin: 0;
}

.copied div.animateIn {
  -webkit-animation: copiedKeyFrames 0.4s ease !important;
  -moz-animation: copiedKeyFrames 0.4s ease !important;
  -ms-animation: copiedKeyFrames 0.4s ease !important;
  -o-animation: copiedKeyFrames 0.4s ease !important;
  animation: copiedKeyFrames 0.4s ease !important;
  -webkit-animation-fill-mode: forwards;
  /*Chrome 16+, Safari 4+*/
  -moz-animation-fill-mode: forwards;
  /*FF 5+*/
  -o-animation-fill-mode: forwards;
  /*Not implemented yet*/
  -ms-animation-fill-mode: forwards;
  /*IE 10+*/
  animation-fill-mode: forwards;
  /*when the spec is finished*/
}
.copied div.animateOut {
  -webkit-animation: copiedKeyFramesOut 0.4s ease !important;
  -moz-animation: copiedKeyFramesOut 0.4s ease !important;
  -ms-animation: copiedKeyFramesOut 0.4s ease !important;
  -o-animation: copiedKeyFramesOut 0.4s ease !important;
  animation: copiedKeyFramesOut 0.4s ease !important;
  -webkit-animation-fill-mode: forwards !important;
  /*Chrome 16+, Safari 4+*/
  -moz-animation-fill-mode: forwards;
  /*FF 5+*/
  -o-animation-fill-mode: forwards;
  /*Not implemented yet*/
  -ms-animation-fill-mode: forwards;
  /*IE 10+*/
  animation-fill-mode: forwards;
  /*when the spec is finished*/
}
@-webkit-keyframes copiedKeyFramesOut {
  0% {
    -webkit-transform: scale(1);
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(0.8);
    opacity: 0;
  }
}
@-moz-keyframes copiedKeyFramesOut {
  0% {
    -moz-transform: scale(1);
    opacity: 1;
  }
  100% {
    -moz-transform: scale(0.8);
    opacity: 0;
  }
}
@keyframes copiedKeyFramesOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  100% {
    transform: scale(0.8);
    opacity: 0;
  }
}
@-webkit-keyframes copiedKeyFrames {
  0% {
    -webkit-transform: scale(1.2);
    opacity: 0;
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 1;
  }
}
@-moz-keyframes copiedKeyFrames {
  0% {
    -moz-transform: scale(1.2);
    opacity: 0;
  }
  100% {
    -moz-transform: scale(1);
    opacity: 1;
  }
}
@keyframes copiedKeyFrames {
  0% {
    transform: scale(1.2);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
</style>
