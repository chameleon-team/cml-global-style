---
CML中如何使用全局样式？
---

**chameleon-tool@1.0.5-alpha.1开始支持**

###  1 本dmeo旨在提供如CML项目中何使用全局样式；

#### 安装依赖
`npm i ` 安装依赖

#### 修改配置
`chameleon.config.js` 中增加如下全局配置
```javascript
 globalStyleConfig:{
    //globalCssPath 该路径下的样式对非 weex 端生效；
    globalCssPath:path.join(__dirname,'src/assets/global.config.less'),
    weexCssConfig:{
      //该文件内的样式会作为全局样式导入
      weexCssPath:path.join(__dirname,'src/assets/global.weex.less'),
      //由于weex端本身的限制，假如某些情况相爱，我们要覆盖内置组件的某个样式，我们提供了对于该组件注入样式的方式
      injectCss:[{
        componentPath:path.join(__dirname,'node_modules/cml-ui/components/c-dialog/c-dialog.cml'),
        cssPath:path.join(__dirname,'src/assets/c-dialog.less')
      }]
    }
  },
```

具体样式文件介绍参考 assets/ 文件夹下内容


