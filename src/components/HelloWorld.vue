<template>
<div class="flex flex-col max-w-screen p-4 lg:p-8">

  <div class="container mx-auto px-4 sm:px-12 my-6 leading-none max-w-3xl flex justify-center">
    <h1 class="text-4xl font-black">
        <a class="flex border-0 hover:opacity-75 items-center text-center" href="http://lindahlstudios.com">
            <img class="w-24 mr-8" alt="our logo, you shouldnt be seeing this" src="@/assets/lindahlstudios-final-bigger-subtitle.png">
        {{ msg }}
        </a>
    </h1>
    </div>

    <div class="container mx-auto px-4 sm:px-12 my-6 leading-none max-w-3xl">
        <p>
            - a dynamic duo of two brothers making epic things.
        </p>
        <p class="mt-2">
            - things include but not limited to rad uncapitalized sentences, global e-commerce companies, small yet mighty brands, fancy pants apps for your smartphones, and dynamic modern websites for your small business.
        </p>
    </div>

    <div class="container mx-auto px-4 sm:px-12 my-6 leading-none max-w-3xl">
        <div class="my-3">
            <h3 class="font-bold uppercase font-sans mb-3">things we love using:</h3>
            <ul class="flex flex-wrap justify-between list-none p-0">
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://statamic.com/" target="_blank" rel="noopener">statamic</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://vuejs.org/" target="_blank" rel="noopener">vue</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://laravel.com/" target="_blank" rel="noopener">laravel</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://tailwindcss.com/" target="_blank" rel="noopener">tailwindCSS</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://gridsome.org/" target="_blank" rel="noopener">gridsome</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://gatsbyjs.org/" target="_blank" rel="noopener">gatsby</a></li>
            </ul>
        </div>
        <div class="my-3">
            <h3 class="font-bold uppercase font-sans mb-3">things we are working on:</h3>
            <ul class="flex flex-wrap justify-between list-none p-0">
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://rainierwatch.com" target="_blank" rel="noopener">rainier watch</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://madewithspark.com" target="_blank" rel="noopener">made with spark</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="https://seattle2go.com" target="_blank" rel="noopener">seattle2go</a></li>
            </ul>

        </div>
        <div class="my-3">
            <h3 class="font-bold uppercase font-sans mb-3">clients we've helped:</h3>
            <ul class="flex flex-wrap justify-between list-none p-0">
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="http://movingforwardleadership.com/" target="_blank" rel="noopener">moving forward leadership</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="http://seattlebybike.com/" target="_blank" rel="noopener">seattle by bike</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="http://posyrae.com/" target="_blank" rel="noopener">posyrae</a></li>
            <li class="inline-block mt-0 mb-2 mr-4"><a class="hover:opacity-75" href="http://valerieslaybaugh.com/" target="_blank" rel="noopener">valerie counseling</a></li>
            </ul>
        </div>
        <div class="my-3">
            <h3 class="font-bold uppercase font-sans mb-3">our barely used social media:</h3>
            <ul class="flex flex-wrap justify-between list-none p-0">
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
