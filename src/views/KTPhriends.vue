<template>
<div>
<div class="gradient pb4">
<NavBar />
<transition name="slide-right" mode="out-in">
<section class="section p2" id ='UserInfo'>

    <div class="card" id="user-container">
    <div class="columns is-centered user-page-whitespace">
    <div class="column is-two-fifths">
    <body>
    <h3>My Google Maps Demo</h3>
    <!--The div element for the map -->
    <div id="map"></div>
    <script>
        // Initialize and add the map
        function initMap() {
          // The location of Uluru
          var uluru = {lat: -25.344, lng: 131.036};
          // The map, centered at Uluru
          var map = new google.maps.Map(
              document.getElementById('map'), {zoom: 4, center: uluru});
          // The marker, positioned at Uluru
          var marker = new google.maps.Marker({position: uluru, map: map});
        }
    </script>
    <!--Load the API from the specified URL
    * The async attribute allows the browser to render the page while the API loads
    * The key parameter will contain your own API key (which is not needed for this tutorial)
    * The callback parameter executes the initMap() function
    -->
    <script async defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyAd1UgZhI60xoHp-o7zqg8bdWTCIBDiyLA&callback=initMap">
    </script>
  </body>
    </div>
    </div>
    </div>
</section>
</transition>
</div>
</div>

</template>


<script>

import store from '@/store.js';
import {db, storage} from '@/main.js';
import NavBar from '@/components/NavBar.vue';


export default {
    store,
    props: [],
    data(){},
    components: {
      NavBar,
    },
}
</script>

<style scoped>
  /* Add some padding on this component for mobile */
  #UserInfo{
    padding-left: 50px;
    padding-right: 50px;
  }

  #user-container {
      padding: 10px;
  }

  .button-links {
      padding-top: 10px;
  }
  input {
      margin-left: 10px;
  }
  .pledge-class-select{
      justify-content: left;
      margin-left: 0.25rem;
  }
  .margin-left-fix {
      margin-left: 0.5rem;
  }
  .margin-fix{
      margin-right: 0.5rem;
  }



</style>

<style>
    .is-horizontal-center {
      justify-content: center
    }
</style>
