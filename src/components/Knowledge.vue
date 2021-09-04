<template>
  <div>
    <br />
    <el-row>
      <el-col :span="14" :offset="5">
        <el-card class="box-card">
          <span>流浪猫狗的定义：</span>
          <p>
            指无主、长期在野外生存的猫。与野猫不同，流浪猫特指那些曾被人们收养过，后来因为某些原因、被人抛弃
          </p>
        </el-card></el-col
      ></el-row
    ><br />
    <el-row>
      <el-col :span="14" :offset="5">
        <el-card class="box-card">
          <span>收养流浪猫狗：</span>
          <p>
            1、体检：去医院做检查，查身上有没有携带病菌，做好消毒工作，听取专业医师的意见做驱虫
          </p>
          <p>
            2、肠胃安全：收养的猫狗要有一个口粮改变的适应阶段，寻找适合的食物
          </p>
          <p>3、疫苗：让猫猫们获得对病原的抵抗力，降低或消除感染传染病的风险</p>
          <p>4、耳螨：耳朵里有黑黑、油油的分泌物、耳道内有异味</p> </el-card
        ><br />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="14" :offset="5">
        <el-card class="box-card">
          <span>流浪猫篇：</span>
          <p>
            1.跳蚤：身上有跳蚤的猫猫一般毛发根部里都会有黑色的小颗粒，这些小颗粒可以溶解于水。是跳蚤的粪便，也是猫猫的血
          </p>
          <p>
            2.耳螨：把耳朵翻开看一看，耳朵里如果有黑色的污垢，那么大概率是有耳螨了。没有耳螨的耳朵干干净净。
          </p>
          <p>
            3.猫藓：猫藓直接暴露在外面，你可以一眼看到。得猫藓的区域会掉毛。变得秃秃的。猫藓也是容易治的。不过需要注意的是猫藓会传染给人。
          </p>
          <p>4.猫鼻支：体质弱的猫更容易得病。</p>
          <p>
            5.呕吐：猫咪呕吐也是常见的事。猫咪有时出于身体保护机制，会把自己的呕吐物吐出来，一般吐出来就好多了。
          </p>
          <p>6.猫传腹：注意，大多数猫因为猫传腹而死</p>
        </el-card></el-col
      ></el-row
    ><br />
    <el-row>
      <el-col :span="14" :offset="5">
        <el-card class="box-card">
          <span>流浪狗篇：</span>
          <p>
            观察一下皮肤情况，最好送宠物医院看看有没有生病，寄生虫耳螨什么的，然后把它一身毛给剃了。
          </p>
          <p>严重肠胃疾病</p>
          <p>感冒发烧这类引起的食欲不振</p>
          <p>因为肥胖引起的疾病</p>
          <p>营养不良</p>
        </el-card></el-col
      ></el-row
    ><br />
  </div>
</template>

<script>
export default {
  name: 'Knowledge',
  data () {
    return {
      activeNames: ['1']
    };
  },
  methods: {
    handleChange (val) {
      console.log(val);
    }
  }
}
</script>

<style scoped>
.box-card {
  text-align: left;
  align-content: center;
  border-radius: 20px;
}
.box-card p {
  text-indent: 2em;
}
</style>