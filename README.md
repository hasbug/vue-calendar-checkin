# vue-calendar-checkin(尚在完善中)

> 基于vue2.x的日历签到组件（后期会改成真正的vue插件）

> 日历的代码基于[Arguiwu的日历](https://github.com/Arguiwu/calendar)修改


![](https://s1.imgchr.com/2017/09/06/mi88x.jpg)

#### props

需要传入已经签到的数据，数据大概如:

```javascript
checkInData:[
    {
        "time": "2017-09-05 08:46",  //日期
        "amount": 4 //所得金币
    },
    {
        "time": "2017-09-04 09:51",
        "amount": 3
    },
]
```

使用姿势

在main.js中引入
```javascript
import Vue from 'vue'
import vueCheckin from './lib/index.js'

Vue.use(vueCheckin)
```
在你的vue页面中
```vue
<vue-checkin :checkin="checkInData" @checkIn="checkIn" @setMonth="getCheckInData"></vue-checkin>
```





## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:9999
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).
