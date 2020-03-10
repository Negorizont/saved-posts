<template>
  <div class="posts">
    <Post v-for="post of posts" :key="post.id" :post="post" />
  </div>
</template>

<script>
import axios from 'axios'
import Post from './Post'

export default {
  name: 'Posts',
  components: {
    Post
  },
  data() {
    return {
      posts: [],
      pageCounter: 1
    }
  },
  mounted() {
    axios
      .get(
        `https://5e63f7a3782c970014a89ee5.mockapi.io/api/post?page=1&limit=10`
      )
      .then((response) => {
        this.posts = response.data
        this.posts.forEach(function(dataItem) {
          dataItem.createdAt = dataItem.createdAt
            .split('T')[0]
            .split('-')
            .reverse()
            .join('-')
        })
      })
    window.addEventListener('scroll', () => {
      if (
        document.documentElement.scrollTop + window.innerHeight >=
        document.documentElement.offsetHeight
      ) {
        this.pageCounter++
        axios
          .get(
            `https://5e63f7a3782c970014a89ee5.mockapi.io/api/post?page=${this.pageCounter}&limit=10`
          )
          .then((response) => {
            const newPosts = response.data
            const oldPosts = this.posts
            newPosts.forEach(function(dataItem) {
              let idCounter = 0
              oldPosts.forEach(function(postItem) {
                if (dataItem.id === postItem.id) {
                  idCounter++
                }
              })
              if (idCounter === 0) {
                dataItem.createdAt = dataItem.createdAt
                  .split('T')[0]
                  .split('-')
                  .reverse()
                  .join('-')
                oldPosts.push(dataItem)
              }
            })
          })
      }
    })
  }
}
</script>

<style scoped>
.posts {
  margin: 50px auto;
  width: 600px;
}
</style>
