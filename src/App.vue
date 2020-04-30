<template>
  <div class="bg-pattern text-blue-100 text-1xl font-sans antialiased min-h-screen h-full flex flex-col items-center justify-center py-12 bg-gray-900 font-mono">
    <!-- <div>
        <img alt="our logo, you shouldnt be seeing this" src="./assets/logo--circle.png">
    </div> -->
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

<style>
.bg-pattern {
    /* background-color: #1164a1;
    background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%231c74b5' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M0 40L40 0H20L0 20M40 40V20L20 40'/%3E%3C/g%3E%3C/svg%3E") */
}
</style>
