<template>
  <div id="app">
    <vue-checkin :checkin="checkInData" @checkIn="checkIn" @setMonth="getCheckInData"></vue-checkin>
    <!-- checkInData 当前的签到记录 -->
    <!-- checkIn 你的签到方法，可以改名 -->
    <!-- getCheckInData 你的按照年月查询签到记录（日历组件会提供时间），可以改名 -->
  </div>
</template>

<script>
import VueCheckin from "./lib/vue-checkin.vue";

export default {
    components: {VueCheckin},
    name: 'app',
  data () {
    return {

        checkInData:[
            {
                "checkin_id": 2196,
                "time": "2017-09-05 08:46",
                "interval": 2,
                "amount": 4
            },
            {
                "checkin_id": 2045,
                "time": "2017-09-04 09:51",
                "interval": 1,
                "amount": 3
            },
            {
                "checkin_id": 1215,
                "time": "2017-08-30 17:10",
                "interval": 3,
                "amount": 5
            },
            {
                "checkin_id": 1065,
                "time": "2017-08-29 11:46",
                "interval": 2,
                "amount": 4
            },
            {
                "checkin_id": 943,
                "time": "2017-08-28 18:30",
                "interval": 1,
                "amount": 3
            },
            {
                "checkin_id": 583,
                "time": "2017-08-26 09:12",
                "interval": 4,
                "amount": 5
            },
            {
                "checkin_id": 449,
                "time": "2017-08-25 09:29",
                "interval": 3,
                "amount": 5
            },
            {
                "checkin_id": 146,
                "time": "2017-08-23 17:01",
                "interval": 2,
                "amount": 4
            },
            {
                "checkin_id": 11,
                "time": "2017-08-22 15:18",
                "interval": 1,
                "amount": 3
            },
            {
                "checkin_id": 9,
                "time": "2017-08-17 15:24",
                "interval": 1,
                "amount": 3
            },
            {
                "checkin_id": 6,
                "time": "2017-08-14 09:03",
                "interval": 2,
                "amount": 4
            },
            {
                "checkin_id": 4,
                "time": "2017-08-13 08:59",
                "interval": 1,
                "amount": 3
            },
            {
                "checkin_id": 1,
                "time": "2017-08-02 16:41",
                "interval": 1,
                "amount": 3
            }
        ],
    }
  },
    methods: {

        checkIn (){   //这里是你自己的签到方法。
            console.log('签到');

            //你的查询签到记录方法在签到后再次查询
        },
        getCheckInData(time) {  //你的按月份查询签到记录方法，取得后将值赋值给this.checkInData   日期格式:2017/9
            console.log(time)   //最好将这个年和月保存起来，上面签到方法执行后再次查询当月的签到记录
        },
    }
}
</script>

<style lang="scss">
  *{
    margin:0;
    padding: 0;
  }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
