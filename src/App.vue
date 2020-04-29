<template>
  <div class="h-screen w-screen flex flex-col content-center container">
      <div>
    <img alt="our logo, you shouldnt be seeing this" src="./assets/logo--circle.png">

      </div>
    <HelloWorld msg="lindahl studios"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style src="./assets/styles/index.css"></style>
