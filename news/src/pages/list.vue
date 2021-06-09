<!--
 * @Author: 朱世新
 * @Date: 2021-02-28 22:42:29
 * @LastEditors: 朱世新
 * @LastEditTime: 2021-06-10 00:32:08
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
    <div class="el">
      <my-eltable
        ref="mt"
        @func="getMsgFormSon"
        id="printTable"
        :tableData="tableData"
        :tabheight="tabheight"
        :tableHeader="tableHeader"
        :loading="loading"
        :isshow="isshow"
      ></my-eltable>
    </div>
  </div>
</template>
<script>
import MyEltable from "../components/Table/table";
export default {
  name: "list",
  components: { MyEltable },
  data() {
    return {
      newList: [],
      loading: false,
      isshow: true,
      tabheight: "100%", // 表格高度，这里是做了自适应高度，正常是需要写固定值的
      tableHeader: [
        // 表头
        { prop: "Name", label: "卡号" },
        { prop: "LabelType", label: "标签类型" },
        { prop: "ObjectType", label: "对象类型" },
        { prop: "ObjectValue", label: "对象值" },
        {
          prop: "Enable",
          label: "是否启用",
          isok: "1",
          formatData: function (val) {
            return val == true ? "启用" : "禁用";
          },
        },
        // 如果后端传过来的值不是我们所预期的，此处可以如下判断修改，isok是是否需要渲染为el-tag,效果为下图
        {
          prop: "Protect",
          label: "是否设防",
          isok: "1",
          formatData: function (val) {
            return val == true ? "设防" : "未设防";
          },
        },
        // 此处为操作栏，不需要可以删除，clickFun绑定此操作按钮的事件
        {
          prop: "oper",
          label: "操作",
          fixed: "right",
          minWidth: "160px",
          width: "160px",
          oper: [
            { name: "修改", style: "primary", clickFun: this.handleClick },
            { name: "删除", style: "danger", clickFun: this.delClick },
          ],
        },
      ],
      tableData: [
        //'A0','标签','藏品','A010',true,true3
        {
          Name: "A011",
          LabelType: "对冲",
          ObjectType: "基金",
          iObjectValue: "A0112",
          Enable: '启用',
          Protect: '设防',
        },
        {
          Name: "A011",
          LabelType: "对冲",
          ObjectType: "基金",
          iObjectValue: "A0112",
          Enable: '启用',
          Protect: '设防',
        },
        {
          Name: "A011",
          LabelType: "对冲",
          ObjectType: "基金",
          iObjectValue: "A0112",
          Enable: '启用',
          Protect: '设防',
        },
      ],
    };
  },

  mounted() {
    this.getNewList();
    this.formatData(this.isshow);
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
  .el {
    display: block;
    width: 100%;
    height: 700px;
    background-color: sandybrown;
  }
}
</style>