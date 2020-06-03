<template>
  <div id="app">
    <h1>this is a blog</h1>
    <BlogHeader></BlogHeader>
    <router-view></router-view>
  </div>
</template>

<script>
  import AddBlog from './components/AddBlog'
  import ShowBlogs from './components/ShowBlogs'
  import BlogHeader from './components/BlogHeader'

  export default {
    name: 'App',
    components: {
      AddBlog, ShowBlogs,BlogHeader
    }
  }
</script>

<style scoped>
  /*#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }*/
  h1 {
    text-align: center;
  }
</style>
