<template>
  <div id="add-blog">
    <h2>添加博客</h2>
    <form action="" v-if="!summited">
      <label for="title">博客标题</label>
      <input type="text" v-model="blog.title" id="title" required>
      <label for="content">博客内容</label>
      <textarea name="" v-model="blog.content" id="content" cols="30" rows="10"></textarea>

      <div id="checkboxes">
        <label for="">Vue.js</label>
        <input type="checkbox" value="Vue.js" v-model="blog.categories">
        <label for="">Node.js</label>
        <input type="checkbox" value="Node.js" v-model="blog.categories">
        <label for="">React.js</label>
        <input type="checkbox" value="React.js" v-model="blog.categories">
        <label for="">Angular4.js</label>
        <input type="checkbox" value="Angular4.js" v-model="blog.categories">
      </div>
      <label for="writer">作者：</label>
      <select name="writer" id="writer" v-model="blog.author">
        <option v-for="author1 in authors">
          {{author1}}
        </option>
      </select>
      <button @click.prevent="post">提交</button>
    </form>

    <div v-if="bsummited">
      <h3>你的博客发送成功</h3>
    </div>
    <hr>
    <div id="preview">
      <h3>博客总览</h3>
      <p>博客标题：{{blog.title}}</p>
      <p>博客内容:</p>
      <p>{{blog.content}}</p>
      <p>博客分类:</p>
      <ul>
        <li v-for="category in blog.categories">
          {{category}}
        </li>
      </ul>
      <p>作者：{{blog.author}}</p>
    </div>
  </div>
</template>



<script>
  import axios from 'axios'
  export default {
    name: "AddBlog",
    data() {
      return {
        blog: {
          title: "",
          content: "",
          categories: [],
          author: "111",

        },
        authors: ["张三", "李四", "王五"],
        summited: false
      }
    },
    methods: {
      post: function () {
          //this.$http.post("https://vueblog-7b388.firebaseio.com/posts.json",this.blog)
       //var _this =this;
        axios.post("https://vueblog-7b388.firebaseio.com/posts.json",this.blog)
          .then((data) =>{
          console.log(data);
          this.summited = true;
        })
      }
    }
  }
</script>

<style scoped>
  #add-blog * {
    box-sizing: border-box;
  }

  #add-blog {
    margin: 20px auto;
    max-width: 600px;
    padding: 20px;

  }

  label {
    display: block;
    margin: 20px 0 10px;
  }

  input[type="text"], textarea, select {
    display: block;
    width: 100%;
    padding: 8px;
  }

  textarea {
    height: 200px;
  }

  #checkboxes input {
    display: inline-block;
    margin-right: 10px;

  }

  #checkboxes label {
    display: inline-block;
    margin-top: 0px;

  }

  button {
    display: block;
    margin: 20px 0;
    background: crimson;
    color: #fff;
    border: 0;
    padding: 14px;
    border-radius: 4px;
    font-size: 18px;
    cursor: pointer;

  }

  #preview {
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;

  }

  h3 {
    margin-top: 10px;
  }
</style>
