<template>
  <div class="schedule">
    <div class="calendar">Календарь</div>

    <div class="schedule-block">
      <div class="date-name">
        <div class="date-block">
          <div class="schedule_date-title">
            <span>пн</span><span> 20 мар.</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span>вт</span><span> 21 мар.</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span>ср</span><span> 22 мар.</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span>чт</span><span> 23 мар.</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span>пт</span><span> 24 мар.</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span>сб</span><span> 25 мар.</span>
          </div></div>
        </div>

      <div class="time-slots">
        <div class="container">
          <div class="time-block">
          <span>8:45</span><span> 10:20</span>
          </div>
          <div class="block block1 block2"></div>
          <div class="block block1"></div>
          <div class="block block1"></div>
          <div class="block block1"></div>
          <div class="block block1"></div>
          <div class="block block1 block3"></div>
        </div>
        <div class="container">
          <div class="time-block">
          <span>10:35</span><span> 12:10</span>
        </div>
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
          <div class="time-block">
          <span>12:25</span><span> 14:00</span>
        </div>
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
          <div class="time-block">
          <span>14:45</span><span> 16:20</span>
        </div>
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
          <div class="time-block">
          <span>16:35</span><span> 18:10</span>
        </div>
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
          <div class="time-block">
          <span>18:25</span><span> 20:00</span>
        </div>
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
          <div class="time-block">
          <span>20:15</span><span> 21:50</span>
        </div>
          <div class="block block2 block4"></div>
          <div class="block block4"></div>
          <div class="block block4"></div>
          <div class="block block4"></div>
          <div class="block block4"></div>
          <div class="block block3 block4"></div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      datesName: ["пн", "вт", "ср", "чт", "пт", "сб"],
      timesName: ["8:45 10:20", "10:35 12:10", "12:25 14:00", "14:45 16:20", "16:35 18:10", "18:25 20:00", "20:15 21:50"],
    }
  },
  methods: {
    createDaysName(){
      
    },
    createTimeName(){
      
    }
  }
}
</script>

<style scoped>

.calendar{
  width:100%;
  display: flex;
  justify-content: center;
  color:aliceblue;
  height: 24px;
  left: 533px;
  top: 95px;

  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 24px;

  color: rgba(241, 233, 233, 0.8);
}
.schedule-block{
  width:100%;
  height: 100%;
  margin-top: 10px;
  padding: 5px;
  background: rgba(90, 62, 202, 0.6);
  border-radius: 15px;
}
.date-name{
  margin-left: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
}
.date-block {
  box-sizing: border-box;
  position: relative;
  width: 16%;
  height: 35px;
}
span {
  display: block;
  padding-left: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 17px;
  white-space: pre;
  color: #F1E9E9;
}

.time-block {
  box-sizing: border-box;
  position: relative;
  width: 60px;
  min-height: 115px;
}
.time-slots {
  display: inline-block;
  width: 100%;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
  min-height: 115px;

}
.block {
  box-sizing: border-box;
  display: flex;
  position: relative;
  width: 15%;
  
  min-width: 192px;
  min-height: 115px;

  border: 1px solid #E1DFED;
}

.block:hover {
  -webkit-box-shadow: 0 0 20px #E1DFED;
  -moz-box-shadow: 0 0 20px #E1DFED;
  box-shadow: 0 0 20px #E1DFED;
}
.block1 {
  border-top: none;
}
.block2 {
  border-left: none;
}
.block3 {
  border-right: none;
}
.block4 {
  border-bottom: none;
}
</style>