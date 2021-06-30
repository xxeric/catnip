<template>
  <div class="hello">
    <h3>Modal Dialog Box</h3>

    <!-- 默认状态 -->
    <button class="btn" @click="openDefault">默认</button>
    <cat-dialog ref="default">
      <cat-button></cat-button>
    </cat-dialog>

    <!-- 设置参数 -->
    <button class="btn" @click="open">定制</button>
    <cat-dialog
      ref="dialog"
      title="提示"
      content="专家建议：空腹时不要吃饭。"
      animated="top"
      maskOpacity="0.3"
      :maskClick="false"
    >
      <!-- 标题 -->
      <template #title></template>
      <!-- 内容 -->
      <template #content></template>
      <!-- 按钮 -->
      <template>
        <cat-button @state="cancel" text="取消"></cat-button>
        <!-- <cat-button type="danger" @state="danger">删除</cat-button> -->
        <cat-button type="confirm" @state="confirm">确认</cat-button>
      </template>
    </cat-dialog>
  </div>
</template>

<script>
export default {
  name: 'Test',
  components: {},
  methods: {
    openDefault() {
      this.$refs.default._showDialog()
    },
    open() {
      this.$refs.dialog._showDialog()
    },
    cancel() {
      console.log('取消')
    },
    danger() {
      console.log('删除')
    },
    confirm() {
      console.log('确认')
    },
  },
}
</script>

<style scoped>
h3 {
  margin: 40px 0;
}

.btn {
  display: inline-block;
  padding: 9px 20px;
  margin: 0 10px;
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  border: 1px solid #409eff;
  border-radius: 4px;
  color: #fff;
  background-color: #42a1ff;
  cursor: pointer;
}

.btn:hover {
  background-color: #66b0ff;
  border-color: #66b1ff;
}
</style>
