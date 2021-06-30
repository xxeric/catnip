<template>
  <transition name="dialog">
    <div class="dialog" v-show="isShow">
      <!-- 遮罩层 -->
      <div class="mask" :style="{ opacity: maskOpacity }" @click="_maskClose"></div>

      <!-- 弹出框 -->
      <transition :name="animated">
        <div class="box" v-show="isShow">
          <!-- 标题 -->
          <div class="header">
            <slot name="title">{{ title }}</slot>
            <i class="icon" @click="_hideDialog">×</i>
          </div>

          <!-- 内容 -->
          <div class="main">
            <slot name="content">{{content}}</slot>
          </div>

          <!-- 按钮 -->
          <div class="footer">
            <slot></slot>
          </div>
        </div>
      </transition>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'CatDialog',
  props: {
    title: {
      type: String,
      default: 'Title',
    },
    content: {
      type: String,
      default: 'Content',
    },
    animated: {
      type: String,
      default: 'opacity',
    },
    maskOpacity: {
      type: [Number, String],
      default: 0.5,
    },
    maskClick: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    _showDialog() {
      this.isShow = true
    },
    _hideDialog() {
      this.isShow = false
    },
    _maskClose() {
      if (!this.maskClick) return
      this._hideDialog()
    },
  },
  provide() {
    return {
      _hideDialog: this._hideDialog,
    }
  },
}
</script>

<style scoped>
@import url(./dialog.css);
</style>
