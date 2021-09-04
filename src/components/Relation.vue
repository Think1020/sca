<template>
  <div>
    <br />
    <el-card>
      <el-descriptions title="示例">
        <el-descriptions-item label="您的姓名">love</el-descriptions-item>
        <el-descriptions-item label="手机号码"
          >10000000000</el-descriptions-item
        >
        <el-descriptions-item label="居住地址">XX市</el-descriptions-item>
        <el-descriptions-item label="职业">
          <el-tag size="small">教师</el-tag>
        </el-descriptions-item>
        <el-descriptions-item label="联系地址"
          >XX省XX市XX县XX小区</el-descriptions-item
        >
      </el-descriptions>
    </el-card>
    <br /><br />
    <el-card>
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="您的姓名">
          <el-input v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="手机号码">
          <el-input v-model="form.tele"></el-input>
        </el-form-item>
        <el-form-item label="居住省份">
          <el-input v-model="form.live"></el-input>
        </el-form-item>
        <el-form-item label="职业">
          <el-input v-model="form.prof"></el-input>
        </el-form-item>
        <el-form-item label="详细地址">
          <el-input v-model="form.deta"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">提交</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script> 
export default {
  name: 'Relation',
  data () {
    return {
      form: {
        name: '',
        tele: '',
        live: '',
        prof: '',
        deta: ''
      }
    }
  },
  methods: {
    onSubmit () {
      alert('感谢您的支持，三至五天之内，会有人联系您');
    }
  }
}
</script>

<style scoped>
</style>