<template>
  <div v-theme:column="'width'" id="show-blogs">
    <h1>博客总览</h1>
    <input type="text" v-model="search" placeholder="搜索"/>
    <!--<div class="single-blog" v-for="blog in this.blogs">-->
    <div class="single-blog" v-for="blog in this.filteredBolgs">
     <!-- //v-bing == :-->
      <router-link :to="'/blog/'+blog.id"><h2 v-rainBowLocal>{{blog.title | to_uppercaseLocal1}}</h2>
      </router-link>
      <article>{{blog.content | snippet}}</article>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "ShowBlogs",
    data() {
      return {
        blogs: [],
        search: ""
      }
    },
    /*function(data){}中this指的是局部的   若用全局this
    * var _this = this
    * 或者使用es6语法 (data)=>{}*/
    created() {
      /*本地json不能乱放应该放到static下*/
      axios.get("/posts.json")
        .then(function (data) {
          console.log(data);
          //this.blogs = data.body.slice(0, 10);
          //return data.json();
          return data.data;
        }).then((data)=>{
          for(let key in data){
            data[key].id = key;
            this.blogs.push(data[key]);
          }
      })
    },
    computed: {
      filteredBolgs: function () {
        return this.blogs.filter((blog) => {
          return blog.title.match(this.search);
        })
      }
    },
    //实现局部过滤器
    filters: {
      "to-uppercaseLocal": function (value) {
        return value.toUpperCase();
      },
      to_uppercaseLocal1(value) {
        return value.toUpperCase();
      }
    },
    directives: {
      "rainBowLocal": {
        bind(el, binding, vnode) {
          el.style.color = "#" + Math.random().toString(16).slice(2, 8);
        }
      }
    }
  }
</script>

<style scoped>
  #show-blogs {
    max-width: 100%;
    margin: 0 auto;
  }

  .single-blog {
    padding: 20px;
    margin: 20px 0;
    box-sizing: border-box;
    background: #eee;
    border: 1px dotted #aaa;

  }
  #show-blogs a{
    color:#444;
    text-decoration: none;

  }
  input[type="text"]{
    padding: 8px;
    width: 100%;
    box-sizing: border-box;
  }
</style>
