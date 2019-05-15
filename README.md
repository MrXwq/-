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
> ```js
> this.axios.get(url)
> 	.then(body => {
> 
> })
> ```
>
> v-for渲染每个轮播图，需要绑定key
>
> src属性需要绑定数据的地址
>
> 6. 改造里面的图标，我使用的是阿里巴巴矢量图标库
> 7. 增加新闻资讯页面，使用mui-ui中的media-list.html 
> 8. 格式化时间插件导入，利用过滤器，把时间都格式化，过滤器必须这样写：**YYYY-MM-DD HH:mm:ss**
> 9. 增加新闻详情
> 10. 增加一个评论组件
> 11. 增加图片分享页

- #### 问题1：github显示

- ![1557579250332](/images/1557579250332.png)

- 用cnpm 安装node-sass

- #### 问题2：mint-ui中有自己的配色

- 一般我们自己写的样式没插件的高，需要加！important

- 最好的方式是审查元素，查找到他的样式名，修改他给定的样式

- #### 问题3：给中间加动画的时候，头部和顶部都动了

- 给中间部分添加主容器overflow：hidden

- #### 问题4：头部顶部的滑动条在最上面了，还不会滚动

- 1. 审查元素发现原因是多了一个class属性mui-fullscreen 删除它

- 2. 不会滑动：

     ```js
     import mui from '../../lib/js/mui.min.js'
     mui('.mui-scroll-wrapper').scroll({
     	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
     });
     //style
      * { touch-action: pan-y; } 
     ```

  3. 添加了上面的代码，问题又出现了，页面底部不能转换了，刚进入图片分享页面的时候，滑动条无法正常工作

     ```js
     //需要等DOM元素加载完毕，我们把上面的代码搬到了mounted生命周期函数中
     mui('.mui-scroll-wrapper').scroll({
     	deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
     });
     ```

  4. 底部不能转换时因为mui-tab-item的问题，我给它重新改了下名字，然后样式都没了，这个时候我把原来mui-tab-item的样式都找出来，用重新改的名字给它写了一遍

# 仿造京东商城

## 注册输入为空还注册成功

### 踩坑element-ui 虽然框架能判断出输入为空，还能显示出提示不能为空，但还是注册成功，这样不对，一开始，我在请求中，这样的话，在次注册的时候就无效了，下面的都不能再次执行了

```js
this.$message({
              message: res.data.message,
              type: "warning"
            });
```

### 所以，我增加了个判断，如果为空，直接return 不执行下面的操作