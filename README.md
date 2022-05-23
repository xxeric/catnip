# Modal Dialog Box

[![license](https://img.shields.io/badge/license-MIT-blue)](./LICENSE) [![author](https://img.shields.io/badge/author-Eric-orange)](https://github.com/xxeric)

> Component Library: Catnip UI

## Feature

基于 Vue 封装的一个通用模态对话框组件：

1. 自定义对话框标题与内容
2. 自定义对话框按钮数量与类型
3. 对话框入场出场动画可选
4. 支持点击遮罩层关闭对话框的功能
5. 实现本地包开发测试，且已打包发布到 npm

## Preview

<div align=center>
  <img src="https://raw.githubusercontent.com/xxeric/blog/master/img/dialog01.jpg">
  <img src="https://raw.githubusercontent.com/xxeric/blog/master/img/dialog02.jpg">
<img src="https://raw.githubusercontent.com/xxeric/blog/master/img/dialog03.jpg">
</div>


## Usage

### Install

```bash
npm install catnip-ui -S
```

### Quick Start

```js
// main.js

import Vue from 'vue'
import catnip from 'catnip-ui'
import 'catnip-ui/lib/style/index.css'

Vue.use(catnip)
```

```html
<cat-dialog>
  <cat-button></cat-button>
</cat-dialog>
```

### Dialog

#### Parameter

|    参数     |       说明       | 默认值  |      类型      |                  可选值                  |
| :---------: | :--------------: | :-----: | :------------: | :--------------------------------------: |
|     ref     |     组件 ID      | dialog  |     string     |                    -                     |
|    title    |    对话框标题    |  Title  |     string     |                    -                     |
|   content   |    对话框内容    | Content |     string     |                    -                     |
|  animated   | 对话框出入场动画 | opacity |     string     | top, bottom, left, right, scale, opacity |
| maskOpacity |   遮罩层透明度   |   0.5   | number, string |                  [0, 1]                  |
|  maskClick  | 对话框外点击关闭 |  true   |    boolean     |               true, false                |

#### Methods

|    方法     |         描述         |
| :---------: | :------------------: |
|    open     |      打开对话框      |
| _showDialog |      显示对话框      |
| _hideDialog |      隐藏对话框      |
| _maskClose  | 点击遮罩层关闭对话框 |

#### Slot

|  插槽   |                       说明                        |
| :-----: | :-----------------------------------------------: |
|  title  |  对话框标题，优先级高于 title 参数，复杂标题可用  |
| content | 对话框内容，优先级高于 content 参数，复杂内容可用 |
| default |                    对话框按钮                     |

### TypeButton

#### Parameter

| 参数  |   说明   | 默认值  |  类型  |          可选值          |
| :---: | :------: | :-----: | :----: | :----------------------: |
| type  | 按钮类型 | default | string | default, confirm, danger |
| text  | 按钮文本 | Default | string |            -             |

#### Methods

|  方法  |         描述         |
| :----: | :------------------: |
| _close |      关闭对话框      |
| state  | 按钮点击时发出的事件 |

### Example

```vue
<template>
<div class="test">
  <h3>Modal Dialog Box</h3>
  <button class="btn" @click="open">点击打开</button>

  <!-- 使用对话框 -->
  <cat-dialog
    ref="dialog"
    title="提示"
    content="请确认是否删除？"
    animated="top"
    maskOpacity="0.3"
    :maskClick="true"
  >
    <!-- 标题 -->
    <template #title></template>
    <!-- 内容 -->
    <template #content></template>
    <!-- 按钮 -->
    <template>
      <cat-button @state="cancel" text="取消"></cat-button>
      <cat-button type="danger" @state="danger">删除</cat-button>
      <cat-button type="confirm" @state="confirm">确认</cat-button>
    </template>
  </cat-dialog>
</div>
</template>

<script>
export default {
  name: 'Test',
  methods: {
    open() {
      this.$refs.dialog._showDialog()
    },
    cancel() {
      console.log('取消')
    },
    confirm() {
      console.log('确认')
    },
    danger() {
      console.log('删除')
    },
  },
}
</script>

<style scoped></style>
```

## License

[MIT](./LICENSE)

