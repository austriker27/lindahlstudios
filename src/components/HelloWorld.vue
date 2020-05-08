<template>
<div class="flex flex-col justify-around h-full max-w-screen sm:py-8 md:py-12">

  <div class="container flex justify-center max-w-3xl px-4 mx-auto leading-none sm:px-12">
    <h1 class="text-2xl font-black md:text-4xl">
        <a class="flex items-center text-center border-0 hover:opacity-75" href="http://lindahlstudios.com">
            <img class="w-24 mr-8" alt="our logo, you shouldnt be seeing this" src="@/assets/lindahlstudios-final-bigger-subtitle.png">
        {{ msg }}
        </a>
    </h1>
    </div>

    <div class="container max-w-3xl px-4 mx-auto leading-none sm:px-12">
        <p>
            - a dynamic duo of two brothers making epic things
        </p>
        <p class="mt-2">
            - things include but not limited to rad uncapitalized sentences, global e-commerce companies, small yet mighty brands, fancy pants apps for your smartphones, and dynamic modern websites for your small business
        </p>
    </div>

    <div class="container max-w-3xl px-4 mx-auto leading-none sm:px-12">
        <div class="my-3">
            <h3 class="mb-3 font-sans font-bold uppercase">things we love using:</h3>
            <ul class="flex flex-wrap justify-between p-0 list-none">
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://statamic.com/" target="_blank" rel="noopener">statamic</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://usefathom.com/ref/SIUVYE" target="_blank" rel="noopener">fathom analytics</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://vuejs.org/" target="_blank" rel="noopener">vue.js</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://laravel.com/" target="_blank" rel="noopener">laravel</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://tailwindcss.com/" target="_blank" rel="noopener">tailwindCSS</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://gridsome.org/" target="_blank" rel="noopener">gridsome</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://gatsbyjs.org/" target="_blank" rel="noopener">gatsbyjs</a></li>
            </ul>
        </div>
        <div class="my-3">
            <h3 class="mb-3 font-sans font-bold uppercase">things we are working on:</h3>
            <ul class="flex flex-wrap justify-between p-0 list-none">
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://rainierwatch.com" target="_blank" rel="noopener">rainier watch</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://madewithspark.com" target="_blank" rel="noopener">made with spark</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://seattle2go.com" target="_blank" rel="noopener">seattle2go</a></li>
            </ul>

        </div>
        <div class="my-3">
            <h3 class="mb-3 font-sans font-bold uppercase">clients we've helped:</h3>
            <ul class="flex flex-wrap justify-between p-0 list-none">
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="http://movingforwardleadership.com/" target="_blank" rel="noopener">moving forward leadership</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="http://seattlebybike.com/" target="_blank" rel="noopener">seattle by bike</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="http://posyrae.com/" target="_blank" rel="noopener">posyrae</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://ledgestoneankenyhoa.com/" target="_blank" rel="noopener">ledgestone ankeny hoa</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="http://valerieslaybaugh.com/" target="_blank" rel="noopener">valerie counseling</a></li>
            </ul>
        </div>
        <div class="my-3">
            <h3 class="mb-3 font-sans font-bold uppercase">our barely used social media:</h3>
            <ul class="flex flex-wrap justify-between p-0 list-none">
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://twitter.com/lindahlstudios" target="_blank" rel="noopener">the twitter</a></li>
            </ul>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
