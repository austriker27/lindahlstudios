<template>
  <div class="hello font-mono">
    <h1 class="text-6xl font-bold text-purple-600">{{ msg }}</h1>
    <p>
      a dynamic duo of brothers making epic things. things include but not limited to rad uncapitalized sentences, global e-commerce companies, small brands, smartphone apps, and dynamic websites for your small business.
    </p>
    <h3 class="font-bold uppercase font-sans">things we love using:</h3>
    <ul class="flex space-between">
      <li><a href="https://statamic.com/" target="_blank" rel="noopener">statamic</a></li>
      <li><a href="https://vuejs.org/" target="_blank" rel="noopener">vue</a></li>
      <li><a href="https://laravel.com/" target="_blank" rel="noopener">laravel</a></li>
      <li><a href="https://tailwindcss.com/" target="_blank" rel="noopener">tailwindCSS</a></li>
      <li><a href="https://gridsome.org/" target="_blank" rel="noopener">gridsome</a></li>
      <li><a href="https://gatsbyjs.org/" target="_blank" rel="noopener">gatsby</a></li>
    </ul>
    <h3 class="font-bold uppercase font-sans">things we are working on:</h3>
    <ul>
      <li><a href="https://rainierwatch.com" target="_blank" rel="noopener">rainier watch</a></li>
      <li><a href="https://madewithspark.com" target="_blank" rel="noopener">made with spark</a></li>
      <li><a href="https://seattle2go.com" target="_blank" rel="noopener">seattle 2 go</a></li>
    </ul>
    <h3 class="font-bold uppercase font-sans">clients we've helped:</h3>
    <ul>
      <li><a href="http://movingforwardleadership.com/" target="_blank" rel="noopener">moving forward leadership</a></li>
      <li><a href="http://seattlebybike.com/" target="_blank" rel="noopener">seattle by bike</a></li>
      <li><a href="http://posyrae.com/" target="_blank" rel="noopener">posyrae</a></li>
      <li><a href="http://valerieslaybaugh.com/" target="_blank" rel="noopener">valerie counseling</a></li>
    </ul>
    <h3 class="font-bold uppercase font-sans">our barely used social media:</h3>
    <ul>
      <li><a href="https://twitter.com/lindahlstudios" target="_blank" rel="noopener">the twitter</a></li>
    </ul>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
