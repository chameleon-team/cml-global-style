
// 设置静态资源的线上路径
const publicPath = '//www.static.chameleon.com/cml';
// 设置api请求前缀
const apiPrefix = 'https://api.chameleon.com';
const path = require('path')
cml.config.merge({
  templateLang: "cml",
  templateType: "html",
  platforms: ["web","weex","wx","alipay","baidu","qq"],
  buildInfo: {
    wxAppId: '123456'
  },
  // baseStyle: {
  //   web: false,
  //   wx: false,
  //   weex: false
  // },
  globalStyleConfig:{
    //globalCssPath 该路径下的样式对非 weex 端生效；
    globalCssPath:path.join(__dirname,'src/assets/global.config.less'),
    weexCssConfig:{
      //该文件内的样式会作为全局样式导入
      weexCssPath:path.join(__dirname,'src/assets/global.weex.less'),
      //由于weex端本身的限制，假如某些情况下，我们要覆盖内置组件的某个样式，我们提供了对于该组件注入样式的方式
      injectCss:[{
        componentPath:path.join(__dirname,'node_modules/cml-ui/components/c-dialog/c-dialog.cml'),
        cssPath:path.join(__dirname,'src/assets/c-dialog.less')
      }]
    }
  },
  // optimize:{
  //   watchNodeModules:false,//默认不对node_modules中的文件进行watch,提升编译性能
  // },
  wx: {
    dev: {
    },
    build: {
      apiPrefix,
      minimize: false
    }
  },
  alipay: {
    dev: {
    },
    build: {
      apiPrefix,
      minimize: false
    }
  },
  baidu: {
    dev: {
    },
    build: {
      apiPrefix,
      minimize: false
    }
  },
  qq: {
    dev: {
    },
    build: {
      apiPrefix,
      minimize: false
    }
  },
  web: {
    dev: {
      analysis: false,
      console: false,
      minimize:false,
      moduleIdType:"name"
    },
    build: {
      analysis: false,
      publicPath: `${publicPath}/web/`,
      apiPrefix,
      minimize:false,
      moduleIdType:"name"
    }
  },
  weex: {
    dev: {
    },
    build: {
      publicPath: `${publicPath}/weex/`,
      apiPrefix
    },
    custom: {
      publicPath: `${publicPath}/wx/`,
      apiPrefix
    }
  }
})

cml.utils.plugin('webpackConfig', function(params) {
  let { type, media, webpackConfig } = params
  // if(type === 'web'){
  //   let globalCssPath = path.join(__dirname,'src/assets/global.config.less')
  //   webpackConfig.entry && webpackConfig.entry.vender && webpackConfig.entry.vender.push(globalCssPath)
  // }
  debugger;
  return { type, media, webpackConfig }
})

