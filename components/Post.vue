<template>
  <div class="post">
    <a href="#" @click.prevent="openPost(post.id)">
      <div class="post__title">
        <div class="title__user">
          <div class="user__avatar">
            <img :src="post.avatar" alt="avatar" />
          </div>
          <div class="user__name">{{ post.name }}</div>
        </div>
        <button class="subscribe-btn">Follow</button>
      </div>
      <div class="post__content">
        <img :src="post.photo" alt="post image" />
      </div>
      <div class="post__info">
        <div class="like-block">
          <button class="like-block__btn">♥</button>
          <div class="like-block__counter">{{ post.likes }}</div>
        </div>
        <div class="post__date">{{ post.createdAt }}</div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  methods: {
    openPost(id) {
      this.$router.push('/publication/' + id)
    }
  }
}
</script>

<style scoped>
a {
  color: #000;
  text-decoration: none;
}

.post {
  margin-bottom: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px #212121;
}

.post__title {
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title__user {
  display: flex;
  align-items: center;
}

.user__avatar img {
  width: 60px;
  border-radius: 50%;
}

.user__name {
  margin-left: 10px;
  font-size: 20px;
}

.subscribe-btn {
  padding: 2px;
  border-radius: 5px;
  border: 2px solid #191974;
  background-color: none;
  font-weight: bold;
  color: #191974;
  font-size: 18px;
}

.subscribe-btn:hover {
  cursor: pointer;
  background-color: #f8ff6e;
}

.post__content img {
  width: 100%;
}

.post__info {
  padding: 15px 10px;
  display: flex;
  justify-content: space-between;
}

.like-block {
  display: flex;
  justify-content: space-between;
}

.like-block__btn {
  background: none;
  border: none;
  font-size: 20px;
  color: #f00;
  line-height: 0px;
  height: 15px;
}

.like-block__counter {
  margin-left: 10px;
  font-weight: bold;
  font-size: 15px;
}
</style>
