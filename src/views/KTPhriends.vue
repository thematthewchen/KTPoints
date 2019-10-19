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
        <GoogleMap />
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
import GoogleMap from '@/components/GoogleMap.vue'

export default {
    
    components: {
      NavBar,
      GoogleMap
    }

};
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
