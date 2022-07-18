# PMS-VUE

西安邮电大学通信与信息工程学院通工实验室人事管理系统

## 项目构建

使用vue2 或者vue 3 的脚手架进行项目构建

- node.js 与npm 安装

```properties
node -v 
npm -v
```

- vue-cli3 脚手架

```properties
npm install -g @vue/cli
vue --version
```

- 创建Vue项目

```properties
vue create pms-vue
空格 选择 回车确定
 -------------------------------------------------------------  
Vue CLI v5.0.8
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, Router
? Choose a version of Vue.js that you want to start the project with 3.x
? Use history mode for router? (Requires proper server setup for index fallback in production) No
? Where do you prefer placing config for Babel, ESLint, etc.? In package.json
? Save this as a preset for future projects? (y/N) n
 -------------------------------------------------------------  
 $ cd pms-vue
 $ npm run serve
```

- 每次输入npm run serve过于麻烦

```properties
配置run configuration 
选择 + 号
选择 npm 
选择 package.json 位置 项目中的package.json
输入 serve 
```

- ElementUI 安装

```properties
npm i element-ui -S

 -------------------------------------------------------------  
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
```

- ElementUI-plus 安装

```properties
npm install element-plus --save

 -------------------------------------------------------------  
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)
app.use(ElementPlus)

app.use(router).mount('#app')

const app = createApp(App)  是必須的
```

## 前端目录

```properties
node_module  依赖
 -------------------------------------------------------------  
pulibc       单页面应用的index.html 唯一的html文件
 -------------------------------------------------------------  
<noscript>
      <strong>We're sorry but <%= htmlWebpackPlugin.options.title %> doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
</noscript>
不支持 javascript 展示的页面 
 -------------------------------------------------------------  
src 开发代码

----assets      静态资源
----components  组件
----views       页面    有许多组件构成
----App.vue     
----main.js     启动入口
----router.js   路由
 -------------------------------------------------------------  
package.js 版本依赖管理 类似pom文件

```

main.js

```properties
import App from './App.vue'       //.vue 可省略
import router from './router'     // ./router/index.js  .js 可省略  文件名为index 可省略
-------------------------------------------------------------  
new Vue({                        // 页面入口
    el: '#app',                  // 被渲染的元素
    router,                      // 路由
-------------------------------------------------------------  
   router:router,       		 // 同样为简写 
   
-------------------------------------------------------------  
    components: { App },
    template: '<App/>'          // 模板 渲染的模板
-------------------------------------------------------------  
    //等同于下列 其中
    components: {
        'java':App              //  建议K V 取相同名字 当系统名字 可以简写   components: { App },
    },
	template: '<java/>'  
------------------------------------------------------------- 
})
```

app.vue

```properties
<template>
    <router-view/>    // <router-view/> 表示占位符 不同的url 路由，不同的显示
</template>
```

```properties
(1)前端展示的是index.html内容

(2)index.html 中的 app元素被渲染

    new Vue({                        // 页面入口
        el: '#app',                  // 被渲染的元素
    })

(3) 自定义模板 java  模板由组件构成

    new Vue({                        // 页面入口
        template: '<java/>'  
    })
    
(4)  组件

    new Vue({                        // 页面入口
        //等同于下列 其中
        components: {
            'java':App              //  建议K V 取相同名字 当系统名字 可以简写   components: { App },
        },
    })

(5)

总结： 

前端展示的是index.html indel中只有一个块元素 id为app   -----> main.js  挂载元素 #app

被渲染的模板 为  '<App/>'

模板'<App/>' 定义的组件为 App

组件： components: { App },  App.vue
 
 App.vue 内容为：
                 <template>
                    <router-view/>  表示占位符 不同的url 路由，不同的显示
                 </template>

url 与 组件的映射关系 定义在 router/index.js

```



