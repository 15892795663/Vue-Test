<template>
  <div id="Single-Blog">
    <h1>{{blog.title}}</h1>
    <article>{{blog.body}}</article>
    <p>作者：{{blog.author}}</p>
    <p>分类：</p>
    <ul>
      <li v-for="category in blog.categories">{{category}}</li>
    </ul>
    <button @click="deleteSingleBlog()">删除</button>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    name: "Single-Blog",
    data() {
      return {
        id: this.$route.params.id,
        blog: {}
      }
    },
    created() {
      axios.get("/posts/"
        + this.id+
        ".json"
        ).then(function (data) {
        return data.data;
      }).then((data)=>{
        console.log(data);
        this.blog =data;
      })
    },
    methods:{
      delteSingleBlog(){
        axios.delete("https://vueblog-7b388.firebaseio.com/posts/"+ this.id+
        ".json").then(response=>{
          this.$router.push({path:'/'})
        })
      }
    }
  }
</script>

<style scoped>
#Single-Blog{
  max-width: 100%;
  margin: 0 auto;
  padding: 20px;
  background: #eee;
  border: 1px dotted #aaa;
}
</style>
