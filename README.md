# 仿造饿了么

## 制作首页App组件

> 1. 头部 Mint-UI中的Header
>
> 2. 底部 MUI 中的 Tabbar.html
>
> 3. 中间放置router-view
>
>    > 1. 制作购物车小图标的时候，操作会多一些
>    > 2. 先把相应的css 和 ttf 文件分别放到css目录和fonts目录中
>    > 3. 然后再在main.js中导入
>
> 4. 把tabble中的a改为router-link，点击之后调转路由
>
> 5. 轮播图swipe需要自己设置高度：获取数据，使用vue-axios 
>
>    ```js
>    this.axios.get(url)
>    	.then(body => {
>        
>    })
>    ```
>
>    v-for渲染每个轮播图，需要绑定key
>
>    src属性需要绑定数据的地址

- 解决一小问题：github显示
- ![1557579250332](/images/1557579250332.png)
- 用cnpm 安装node-sass

