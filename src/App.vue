<template>
  <div id="app" class="font-sans text-semi-black">
    <!-- <section class="pt-6 pl-10">
      <img alt="Github Emojis" src="./assets/logo.png" width="150px">
    </section>-->
    <div class="text-center container mx-auto">
      <header class="my-12">
        <!-- <h1 class="mb-2 text-6xl">Find your Emojis Here</h1>
        <p
          class="font-light text-sm mt-10"
        >A list of all the emojis that can be used in Github flavourd Markdown.</p>-->
        <div class="flex mb-4">
          <img class="logo" src="./assets/logo.png" alt="logo" align="left">
        </div>
        <div class="flex mb-4 heading text-center">
          <div class="w-full sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-full h-12 mx-auto h-24">
            <h1>Find your Emojis Here</h1>
            <h3>A list of all the emojis that can be used in Github flavoured markdown</h3>
          </div>
        </div>

        <div class="flex mb-4 mx-32 items-center border-b border-b-2 border-grey-darker py-2">
          <input
            class="appearance-none bg-transparent border-none w-full text-grey-darker mr-3 py-1 px-2 leading-tight focus:outline-none"
            type="text"
            placeholder="Search your favourite emoji"
          >
          <i class="fas fa-search"></i>
        </div>

        <div class="flex mb-4 mx-2">
          <div class="w-full sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-full h-12 leading-loose mx-auto">
            <h5
              class="sub-catogery"
            >ANIMAL | TRAVEL | HAPPY | ARROW | SPORTS | FLAGS | FOOD | EDUCATION | INDUSTRY</h5>
          </div>
        </div>
      </header>

      <!--  <div class="container mx-auto mb-12 flex flex-col items-center">
        <input
          type="search"
          placeholder="Search an emoji..."
          class="shadow appearance-none border rounded w-1/2 pt-3 pb-2 px-3 text-grey-darker"
          v-model="search"
        >

        <div class="flex mb-4 mx-2">
          <div class="w-full sm:w-4/5 md:w-4/5 lg:w-4/5 xl:w-full h-12 leading-loose mx-auto">
              <h5 class="sub-catogery">ANIMAL | TRAVEL | HAPPY | ARROW | SPORTS | FLAGS | FOOD | EDUCATION | INDUSTRY</h5>
          </div>
        </div>
      </div>-->
      <!-- Two columns -->
      <!-- <section class="flex mb-4 bg-grey-lighter rounded-lg">
        <div class="text-center flex flex-wrap py-6">
          <div
            v-for="emoji in filteredList"
            v-bind:key="emoji.name"
            class="w-1/3 cursor-pointer"
            @click="doCopy(emoji)"
          >
            <div class="py-4 flex items-center">
              <img :src="emoji.img" :alt="emoji.name" class="w-12 h-12 ml-10 mr-6">
              <div class="text-center bg-grey-light py-1 px-3 rounded-sm text-grey-dark">
                <pre class>{{ ':' + emoji.name + ':'}}</pre>
              </div>
            </div>
          </div>

        </div>
      </section>-->
      <section>
        <!--grid slider-->
        <div class="carousel-wrapper">
          <span id="item-1"></span>
          <span id="item-2"></span>
          <span id="item-3"></span>
          <div class="carousel-item item-1">
            <div class="w-3/4 sm:w-full md:w-full lg:w-full xl:w-3/4 mx-auto flex-auto">
              <div class="px-2">
                <div class="flex flex-wrap -mx-2">
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <a class="em em-truck"></a>
                      <div class="rectangle">
                        <p>:truck:</p>
                      </div>
                      <p class="tooltiptext">:truck:</p>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-bell"></i>
                      <div class="rectangle">
                        <p>:1st_place_med.</p>
                      </div>
                      <span class="tooltiptext">:1st_place_med.</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-100"></i>
                      <div class="rectangle">
                        <p>:1234:</p>
                      </div>
                      <span class="tooltiptext">:1234:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-aerial_tramway"></i>
                      <div class="rectangle">
                        <p>:construction ..</p>
                      </div>
                      <span class="tooltiptext">:construction ..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-beer"></i>
                      <div class="rectangle">
                        <p>:black_medium..</p>
                      </div>
                      <span class="tooltiptext">:black_medium..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-alarm_clock"></i>
                      <div class="rectangle">
                        <p>:bow_and_arr..</p>
                      </div>
                      <span class="tooltiptext">:bow_and_arr..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em---1"></i>
                      <div class="rectangle">
                        <p>:bridge_at_ni..</p>
                      </div>
                      <span class="tooltiptext">:bridge_at_ni..</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-2 p-2">
                <div class="flex flex-wrap -mx-2">
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-briefcase"></i>
                      <div class="rectangle">
                        <p>:truck:</p>
                      </div>
                      <span class="tooltiptext">:truck:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-calendar"></i>
                      <div class="rectangle">
                        <p>:1st_place_med.</p>
                      </div>
                      <span class="tooltiptext">:1st_place_med.</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-cactus"></i>
                      <div class="rectangle">
                        <p>:1234:</p>
                      </div>
                      <span class="tooltiptext">:1234:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-child"></i>
                      <div class="rectangle">
                        <p>:construction ..</p>
                      </div>
                      <span class="tooltiptext">:construction ..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-classical_building"></i>
                      <div class="rectangle">
                        <p>:black_medium..</p>
                      </div>
                      <span class="tooltiptext">:black_medium..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-coat"></i>
                      <div class="rectangle">
                        <p>:bow_and_arr..</p>
                      </div>
                      <span class="tooltiptext">:bow_and_arr..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-dancer"></i>
                      <div class="rectangle">
                        <p>:bridge_at_ni..</p>
                      </div>
                      <span class="tooltiptext">:bridge_at_ni..</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-2 p-4">
                <div class="flex flex-wrap -mx-2">
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-black_heart"></i>
                      <div class="rectangle">
                        <p>:truck:</p>
                      </div>
                      <span class="tooltiptext">:truck:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-birthday"></i>
                      <div class="rectangle">
                        <p>:1st_place_med.</p>
                      </div>
                      <span class="tooltiptext">:1st_place_med.</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-bikini"></i>
                      <div class="rectangle">
                        <p>:1234:</p>
                      </div>
                      <span class="tooltiptext">:1234:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-beetle"></i>
                      <div class="rectangle">
                        <p>:construction ..</p>
                      </div>
                      <span class="tooltiptext">:construction ..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-basketball"></i>
                      <div class="rectangle">
                        <p>:black_medium..</p>
                      </div>
                      <span class="tooltiptext">:black_medium..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-baseball"></i>
                      <div class="rectangle">
                        <p>:bow_and_arr..</p>
                      </div>
                      <span class="tooltiptext">:bow_and_arr..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-bath"></i>
                      <div class="rectangle">
                        <p>:bridge_at_ni..</p>
                      </div>
                      <span class="tooltiptext">:bridge_at_ni..</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="arrow arrow-prev" href="#item-3">
              <img src="./assets/img/Group 30.png" alt="prev">
            </a>
            <a class="arrow arrow-next" href="#item-2">
              <img src="./assets/img/Group 31.png" alt="next">
            </a>

            <li class="nav-dots">
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
            </li>
          </div>

          <div class="carousel-item item-2">
            <div class="w-3/4 sm:w-full md:w-full lg:w-full xl:w-3/4 mx-auto">
              <div class="px-2">
                <div class="flex flex-wrap -mx-2">
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-truck"></i>
                      <div class="rectangle">
                        <p>:truck:</p>
                      </div>
                      <span class="tooltiptext">:truck:</span>
                    </div>
                  </div>

                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-alarm_clock"></i>
                      <div class="rectangle">
                        <p>:bow_and_arr..</p>
                      </div>
                      <span class="tooltiptext">:bow_and_arr..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-bell"></i>
                      <div class="rectangle">
                        <p>:1st_place_med.</p>
                      </div>
                      <span class="tooltiptext">:1st_place_med.</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-100"></i>
                      <div class="rectangle">
                        <p>:1234:</p>
                      </div>
                      <span class="tooltiptext">:1234:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-aerial_tramway"></i>
                      <div class="rectangle">
                        <p>:construction ..</p>
                      </div>
                      <span class="tooltiptext">:construction ..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-beer"></i>
                      <div class="rectangle">
                        <p>:black_medium..</p>
                      </div>
                      <span class="tooltiptext">:black_medium..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em---1"></i>
                      <div class="rectangle">
                        <p>:bridge_at_ni..</p>
                      </div>
                      <span class="tooltiptext">:bridge_at_ni..</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-2 p-2">
                <div class="flex flex-wrap -mx-2">
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-briefcase"></i>
                      <div class="rectangle">
                        <p>:truck:</p>
                      </div>
                      <span class="tooltiptext">:truck:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-cactus"></i>
                      <div class="rectangle">
                        <p>:1234:</p>
                      </div>
                      <span class="tooltiptext">:1234:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-child"></i>
                      <div class="rectangle">
                        <p>:construction ..</p>
                      </div>
                      <span class="tooltiptext">:construction ..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-classical_building"></i>
                      <div class="rectangle">
                        <p>:black_medium..</p>
                      </div>
                      <span class="tooltiptext">:black_medium..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-coat"></i>
                      <div class="rectangle">
                        <p>:bow_and_arr..</p>
                      </div>
                      <span class="tooltiptext">:bow_and_arr..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-calendar"></i>
                      <div class="rectangle">
                        <p>:1st_place_med.</p>
                      </div>
                      <span class="tooltiptext">:1st_place_med.</span>
                    </div>
                  </div>

                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-dancer"></i>
                      <div class="rectangle">
                        <p>:bridge_at_ni..</p>
                      </div>
                      <span class="tooltiptext">:bridge_at_ni..</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-2 p-4">
                <div class="flex flex-wrap -mx-2">
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-black_heart"></i>
                      <div class="rectangle">
                        <p>:truck:</p>
                      </div>
                      <span class="tooltiptext">:truck:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-bikini"></i>
                      <div class="rectangle">
                        <p>:1234:</p>
                      </div>
                      <span class="tooltiptext">:1234:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-beetle"></i>
                      <div class="rectangle">
                        <p>:construction ..</p>
                      </div>
                      <span class="tooltiptext">:construction ..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-basketball"></i>
                      <div class="rectangle">
                        <p>:black_medium..</p>
                      </div>
                      <span class="tooltiptext">:black_medium..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-baseball"></i>
                      <div class="rectangle">
                        <p>:bow_and_arr..</p>
                      </div>
                      <span class="tooltiptext">:bow_and_arr..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-birthday"></i>
                      <div class="rectangle">
                        <p>:1st_place_med.</p>
                      </div>
                      <span class="tooltiptext">:1st_place_med.</span>
                    </div>
                  </div>

                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-bath"></i>
                      <div class="rectangle">
                        <p>:bridge_at_ni..</p>
                      </div>
                      <span class="tooltiptext">:bridge_at_ni..</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="arrow arrow-prev" href="#item-1">
              <img src="./assets/img/Group 30.png" alt="prev">
            </a>
            <a class="arrow arrow-next" href="#item-3">
              <img src="./assets/img/Group 31.png" alt="next">
            </a>

            <li class="nav-dots">
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
            </li>
          </div>

          <div class="carousel-item item-3">
            <div class="w-3/4 sm:w-full md:w-full lg:w-full xl:w-3/4 mx-auto">
              <div class="px-2">
                <div class="flex flex-wrap -mx-2">
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-truck"></i>
                      <div class="rectangle">
                        <p>:truck:</p>
                      </div>
                      <span class="tooltiptext">:truck:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-bell"></i>
                      <div class="rectangle">
                        <p>:1st_place_med.</p>
                      </div>
                      <span class="tooltiptext">:1st_place_med.</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-100"></i>
                      <div class="rectangle">
                        <p>:1234:</p>
                      </div>
                      <span class="tooltiptext">:1234:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-aerial_tramway"></i>
                      <div class="rectangle">
                        <p>:construction ..</p>
                      </div>
                      <span class="tooltiptext">:construction ..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-beer"></i>
                      <div class="rectangle">
                        <p>:black_medium..</p>
                      </div>
                      <span class="tooltiptext">:black_medium..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-alarm_clock"></i>
                      <div class="rectangle">
                        <p>:bow_and_arr..</p>
                      </div>
                      <span class="tooltiptext">:bow_and_arr..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em---1"></i>
                      <div class="rectangle">
                        <p>:bridge_at_ni..</p>
                      </div>
                      <span class="tooltiptext">:bridge_at_ni..</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-2 p-4">
                <div class="flex flex-wrap -mx-2">
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-black_heart"></i>
                      <div class="rectangle">
                        <p>:truck:</p>
                      </div>
                      <span class="tooltiptext">:truck:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-beetle"></i>
                      <div class="rectangle">
                        <p>:construction ..</p>
                      </div>
                      <span class="tooltiptext">:construction ..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-basketball"></i>
                      <div class="rectangle">
                        <p>:black_medium..</p>
                      </div>
                      <span class="tooltiptext">:black_medium..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-baseball"></i>
                      <div class="rectangle">
                        <p>:bow_and_arr..</p>
                      </div>
                      <span class="tooltiptext">:bow_and_arr..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-birthday"></i>
                      <div class="rectangle">
                        <p>:1st_place_med.</p>
                      </div>
                      <span class="tooltiptext">:1st_place_med.</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-bikini"></i>
                      <div class="rectangle">
                        <p>:1234:</p>
                      </div>
                      <span class="tooltiptext">:1234:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-bath"></i>
                      <div class="rectangle">
                        <p>:bridge_at_ni..</p>
                      </div>
                      <span class="tooltiptext">:bridge_at_ni..</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="px-2 p-2">
                <div class="flex flex-wrap -mx-2">
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-briefcase"></i>
                      <div class="rectangle">
                        <p>:truck:</p>
                      </div>
                      <span class="tooltiptext">:truck:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-calendar"></i>
                      <div class="rectangle">
                        <p>:1st_place_med.</p>
                      </div>
                      <span class="tooltiptext">:1st_place_med.</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-cactus"></i>
                      <div class="rectangle">
                        <p>:1234:</p>
                      </div>
                      <span class="tooltiptext">:1234:</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-child"></i>
                      <div class="rectangle">
                        <p>:construction ..</p>
                      </div>
                      <span class="tooltiptext">:construction ..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-classical_building"></i>
                      <div class="rectangle">
                        <p>:black_medium..</p>
                      </div>
                      <span class="tooltiptext">:black_medium..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-coat"></i>
                      <div class="rectangle">
                        <p>:bow_and_arr..</p>
                      </div>
                      <span class="tooltiptext">:bow_and_arr..</span>
                    </div>
                  </div>
                  <div
                    class="w-full xl:w-1/6 sm:w-1/4 md:w-1/6 lg:w-1/4 bg-white box-container px-2"
                  >
                    <div class="justify-center tooltip">
                      <i class="em em-dancer"></i>
                      <div class="rectangle">
                        <p>:bridge_at_ni..</p>
                      </div>
                      <span class="tooltiptext">:bridge_at_ni..</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a class="arrow arrow-prev" href="#item-2">
              <img src="./assets/img/Group 30.png" alt="prev">
            </a>
            <a class="arrow arrow-next" href="#item-1">
              <img src="./assets/img/Group 31.png" alt="next">
            </a>

            <li class="nav-dots">
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
              <label class="nav-dot" id="#"></label>
            </li>
          </div>
        </div>

        <!-- slider complete -->
      </section>

      <footer class="footer">
        <p>Copyright © 2018 khurafat.com.All rights reserved</p>
        <img src="./assets/img/KHURAFAT.png" alt="copyright">
      </footer>

      <!-- <div class="copied bg-grey-light">
        <p class="text-grey font-bold">Tag Copied!</p>
        <div class="p-12">
          <img :src="copied.img" :alt="copied.name" class="mr-12 pt-8">
          <h3 class="py-4 px-8 align-top text-grey bg-grey-light">{{ ":" + copied.name + ":" }}</h3>
        </div>
      </div>-->
      <!-- <img src="./assets/img/KHURAFAT.png" alt="Khurafat" class="watermark fixed"> -->
    </div>
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
