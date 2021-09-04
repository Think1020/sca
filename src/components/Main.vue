<template>
  <div>
    <div class="demo-image__lazy" style="height: 20rem; overflow-y: auto">
      <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
    </div>
    <el-collapse accordion>
      <el-collapse-item>
        <template slot="title">切勿盲目投喂</template>
        <div>
          不要盲目投喂流浪猫狗：喜欢就带回家养，没条件领养的，至少做到管住自己的情绪，理性对待，尽可能绝育，只投喂不绝育的弊远远大于利。尽可能领养！流浪猫没错，但是只投喂不领养不绝育就有错。；
        </div>
        <div>
          投喂伤害猫的健康，投喂增加猫患传染病的几率，在小区投喂引起矛盾，投喂猫等于杀害更多小鸟，猫不需要过度投喂，投喂会造成猫更多地繁殖
        </div>
      </el-collapse-item>
      <el-collapse-item title="城市中流浪猫狗问题">
        <div>
          动物不承担责任，因此也不享有权利。流浪猫狗不能控制自己的行为，肆意伤害其他动物，破坏生态环境，大肆繁衍下去只会做无意义的数量上涨，放任他们繁衍是爱心人士的目的，但是他们繁衍的过程中有许许多多鸟类及小型动物会丧生其腹，并且它们繁衍到最后，问题闹到不得不解决的时候，依然要走捕杀这条道路。
        </div>
        <div>
          大量捕杀，部分收容是最好的方法，如果真的爱动物，就出资收养一两条，或者集资建立收容场所
        </div>
      </el-collapse-item>
      <el-collapse-item title="流浪猫狗的一生">
        <div>
          大多数流浪猫狗的寿命不会超过十年，且其中有相当一部分在二年左右的时间就患病死去，只有少数能安安稳稳的过完一生。
        </div>
        <div>每十只流浪猫，就有六只活不过冬天</div>
      </el-collapse-item>
      <el-collapse-item title="看待流浪猫狗问题">
        <div>
          事情并无对错，爱护流浪猫狗也好，不爱护也罢，在不影响社会安定的情况下，为流浪猫狗献出自己的一份爱心，不要去故意虐杀流浪动物，以夺取其它生命满足自己欲望的人，最好去医院看看，注：此仅仅为个人观点，不代表其他人，万物有灵，蚊子除外
        </div>
        <div>
          偶尔投喂可以，长期投喂就相当于散养了一只猫，却不用承担相应的义务，比如在小区长期投喂造成交通事故，影响社区环境。个人解决流浪猫狗问题的方式，本身没有收养条件的，建议绝育加送养
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      urls: [
        require('../assets/cat-8.jpg'),
        require('../assets/cat-7.jpg'),
        require('../assets/snowflakes-5.jpg'),
      ]
    }
  }
}
</script>

<style scoped>
</style>