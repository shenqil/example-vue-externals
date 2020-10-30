# example-vue

## 运行

+ 1. `npm i`
+ 2. `npm run serve`

## 打包

+ `npm run build`

## 格式化

+ `npm run lint`

## 拆分一个第三方包主要步骤(以拆分vue 为例)

+ 1. 安装一个包
  + `npm i vue`

+ 2. 打开**prod.config.js** 在 **externals** 属性下增加需要拆分的包

  +

    ```script
        externals:{
            vue: 'Vue',
        }
    ```

+ 3. 打开**prod.html** 增加拆分的包，类似与cdn引入,只不过被手机或pc拦截了
  + `<script src="libs://libs/vue/2.6.11/vue.min.js"></script>`

**注意:** 类似与element-ui的样式文件放入`src/stylesheet.dev.ts` 中，避免编译到包中,其他与普通配置相似
