<!--
 * @Author: 朱世新
 * @Date: 2021-02-28 22:42:29
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-03-01 18:17:06
 * @Description: 
-->
<template>
  <div class="list">
    <div
      @click="goNews(item.post_id)"
      class="news"
      v-for="(item, index) in newList"
      :key="index"
    >
      <div class="new-img-wrapper">
        <img class="new-img" :src="item.author_avatar" />
      </div>
      <div class="new-info">
        <p class="new-title">{{ item.title }}</p>
        <p class="new-time">{{ item.created_at }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "list",
  data() {
    return {
      newList: [],
    };
  },
  mounted() {
    this.getNewList();
  },
  methods: {
    getNewList() {
      fetch("https://unidemo.dcloud.net.cn/api/news")
        .then((response) => response.json())
        .then((res) => {
          this.newList = res;
        });
    },
    goNews(newsID) {
      this.$router.push({
        path: "/detail",
        query: {
          newsID,
        },
      });
    },
  },
};
</script>
<style lang="scss">
.list {
  * {
    margin: 0;
    padding: 0;
  }
  .news {
    width: 100%;
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    padding: 0.5rem 0;
    .new-img-wrapper {
      height: 3.5rem;
      width: 3.5rem;
      margin-right: 0.2rem;
      .new-img {
        margin-top: 0.5rem;
        margin-left: 0.5rem;
        height: 3rem;
        width: 3rem;
      }
    }
    .new-info {
      flex: 1;
      word-wrap: break-word;
      word-break: break-all;
      margin-left: 0.35rem;
      margin-top: 0.5rem;

      .new-title {
        font-family: "黑体";
        line-height: 1.8rem;
        font-size: 1.2rem;
        font-weight: 100;
      }
      .new-time {
        font-size: 1rem;
        color: #8e8e8e;
      }
    }
  }
}
</style>