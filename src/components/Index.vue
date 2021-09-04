<template>
  <div class="hello">
    <!--图片显示-->
    <el-carousel :interval="4000" type="card" height="200px">
      <el-carousel-item v-for="item in items" :key="item.id">
        <img :src="item.url" width="350rem" />
      </el-carousel-item>
    </el-carousel>
    <!-- 信息 -->
    <h1>{{ msg }}</h1>
    <!--进入按钮-->
    <router-link :to="{ path: 'homepage/main' }">
      <el-button type="primary" icon="el-icon-loading"> 进入 </el-button>
    </router-link>
    <!--底部信息-->
    <footer>
      <el-divider></el-divider>
      <p>
        如果您有领养的意愿，或者想为流浪动物贡献一份爱心，请点击<el-button
          type="text"
          @click="drawer = true"
          style="margin-left: 16px"
          ><b>这里</b></el-button
        >
      </p>
    </footer>
    <!-- 折叠内容 -->
    <el-drawer title="标题" :visible.sync="drawer" :with-header="false">
      <div>
        <br /><br />
        <p class="edp">
          对于流浪猫狗应当保持一定的警戒心，在拥有爱护之心的同时，应该预防流浪猫狗身上存在的
          病菌，病毒等，防止被抓伤，处理方式，如绝育加送养，或者送往当地流浪动物救助中心，在
          微博，微信公众号直接搜索即可
          <br />
          一些流浪猫狗救助网站，深圳猫网，有微信公众号，西安喵星救助基地
        </p>
        <br />
        <span
          >联系我们，<router-link to="homepage/relation">提交</router-link
          >您的信息</span
        ><br />
        <span>联系电话：1500000000</span>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data () {
    return {
      msg: '流浪猫狗救助静态展示网站',
      drawer: false,
      items: [
        { id: 1, url: require("../assets/cat-1.jpg") },
        { id: 2, url: require("../assets/cat-2.jpg") },
        { id: 3, url: require("../assets/cat-3.jpg") },
        { id: 4, url: require("../assets/snowflakes-5.jpg") },
        { id: 5, url: require("../assets/kitty-5.jpg") },
        { id: 6, url: require("../assets/husky-6.jpg") },
      ]
    }
  },
  methods: {
    homepage () {
      this.$router.push('/homepage')
    }
  }
}
</script>

<!-- 样式 -->
<style scoped>
h1,
h2 {
  font-weight: normal;
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
img {
  border-radius: 15px;
}
/* 设置底部栏位置 */
footer {
  position: fixed;
  bottom: 0;
  font-family: "Courier New", Courier, monospace;
}
.edp {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 1rem;
  text-indent: 2em;
  line-height: 20px;
}
</style>
