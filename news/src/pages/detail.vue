<!--
 * @Author: 朱世新
 * @Date: 2021-02-28 23:04:20
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-03-01 18:13:49
 * @Description: 
-->
<template>
  <div class="detail">
    <div class="title" v-html="newsTitle"></div>
    <div v-html="newsContent"></div>
  </div>
</template>
<script>
//import { Editor, EditorContent } from 'tiptap';
export default {
  name:'detail',
  components: {
    //EditorContent,
  },
  data() {
    return {
      newsID:this.$route.query.newsID,
      newsTitle:'',
      newsContent:'',
      editor: null,   
    };
  },
  mounted(){
    this.getContent();
  },
  methods: {
    getContent() {
      fetch(`https://unidemo.dcloud.net.cn/api/news/36kr/${this.newsID}`)
      .then((response) => response.json())
      .then((res) => {
        this.newsTitle = res.title;
        this.newsContent = res.content;
      })
    },
  },
}
</script>
<style lang="scss">
  .title{
    font-weight:850;
    line-height: 1.5rem;
  }
</style>