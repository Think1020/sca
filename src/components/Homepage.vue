<template>
  <div>
    <!-- 标题 -->
    <h2>流浪动物救助静态展示网站</h2>
    <!-- 导航栏 -->
    <el-menu
      :default-active="activeIndex"
      mode="horizontal"
      @select="handleSelect"
      router
    >
      <el-menu-item index="/homepage/main">
        <i class="el-icon-house"></i>主页
      </el-menu-item>
      <el-menu-item index="/homepage/knowledge">
        <i class="el-icon-chat-line-round"></i>相关知识
      </el-menu-item>
      <el-menu-item index="/homepage/process">
        <i class="el-icon-edit-outline"></i>领养流程
      </el-menu-item>
      <el-menu-item index="/homepage/relation">
        <i class="el-icon-postcard"></i>提交信息
      </el-menu-item>
      <el-menu-item index="/">
        <i class="el-icon-switch-button"></i>返回
      </el-menu-item>
    </el-menu>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data () {
    return {
      activeIndex: '/homepage/main',
      activeIndex2: '1'
    };
  },
  methods: {
    handleSelect (key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
</style>