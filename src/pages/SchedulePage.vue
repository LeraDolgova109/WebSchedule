<template>
  <div class="schedule">
    <div class="calendar">
      <div class="btn btn_left"></div>
      <div style="margin-top: -4px; display: flex;">
        <span style="font-weight: 400; font-size: 20px; color: rgba(241, 233, 233, 0.8);">{{ date_start }}</span>
        <span style="margin-left: 5px; margin-right: 5px;"> - </span>
        <span style="font-weight: 400; font-size: 20px; color: rgba(241, 233, 233, 0.8);">{{ date_end }}</span>
      </div>
      <div class="btn btn_right"></div>
    </div>

    <div class="schedule-block">
      <div class="date-name">
        <div class="date-block">
          <div class="schedule_date-title">
            <span style="font-weight: 600;">пн</span>
            <span> {{ mon }}</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span style="font-weight: 600;">вт</span>
            <span> {{ tue }}</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span style="font-weight: 600;">ср</span>
            <span> {{ wed }}</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span style="font-weight: 600;">чт</span>
            <span> {{ thur }}</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span style="font-weight: 600;">пт</span>
            <span> {{ fri }}</span>
          </div></div>
        <div class="date-block">
          <div class="schedule_date-title">
            <span style="font-weight: 600;">сб</span>
            <span> {{ sat }}</span>
          </div></div>
        </div>

      <div class="time-slots">
        <div class="container">
          <div class="time-block">
          <span style="font-weight: 600;">8:45</span><span> 10:20</span>
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
          <span style="font-weight: 600;">10:35</span><span> 12:10</span>
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
          <span style="font-weight: 600;">12:25</span><span> 14:00</span>
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
          <span style="font-weight: 600;">14:45</span><span> 16:20</span>
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
          <span style="font-weight: 600;">16:35</span><span> 18:10</span>
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
          <span style="font-weight: 600;">18:25</span><span> 20:00</span>
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
          <span style="font-weight: 600;">20:15</span><span> 21:50</span>
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
      months: {0:"январь", 1:"февраль", 2:"март", 3:"апрель", 4:"май", 5:"июнь", 
              6:"июль", 7:"август", 8:"сентябрь", 9:"октябрь", 10:"ноябрь", 11:"декабрь"},
      months_short: {0:"янв", 1:"фев", 2:"мар", 3:"апр", 4:"мая", 5:"июня", 
              6:"июля", 7:"авг", 8:"сент", 9:"окт", 10:"нояб", 11:"дек"},        
    }
  },
  methods:{
    getDate: function(){
      var current = new Date();
      var weekstart = current.getDate() - current.getDay() + 1;    
      var weekend = weekstart + 5;
      this.monday = new Date(current.setDate(weekstart));
      this.saturday = new Date(current.setDate(weekend));
    },
    setDate: function(){
      var start = this.months[this.monday.getMonth()] + " " + this.monday.getDate() + ", " + this.monday.getFullYear();
      var end = this.months[this.saturday.getMonth()] + " " + this.saturday.getDate() + ", " + this.saturday.getFullYear();
      this.date_start = start;
      this.date_end = end;
      this.mon = this.monday.getDate() + " " + this.months_short[this.monday.getMonth()];
      this.tue = this.monday.getDate()+1 + " " + this.months_short[this.monday.getMonth()];
      this.wed = this.monday.getDate()+2 + " " + this.months_short[this.monday.getMonth()];
      this.thur = this.monday.getDate()+3 + " " + this.months_short[this.monday.getMonth()];
      this.fri = this.monday.getDate()+4 + " " + this.months_short[this.monday.getMonth()];
      this.sat = this.saturday.getDate() + " " + this.months_short[this.saturday.getMonth()];
    }
  },
  beforeMount(){
    this.getDate(),
    this.setDate()
 }
}
</script>

<style scoped>

.calendar{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}
.schedule-block{
  width:100%;
  height: 100%;
  margin-top: 15px;
  padding: 5px;
  background: rgba(90, 62, 202, 0.6);
  border-radius: 15px;
}
.date-name{
  margin-left: 60px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
.date-block {
  box-sizing: border-box;
  position: relative;
  width: 16.5%;
  height: 35px;
}
span {
  display: block;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
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
  flex-direction: column;
  position: relative;
  width: 15%;
  
  min-width: 192px;
  min-height: 115px;

  border: 1px solid #E1DFED;
}

.block:hover {
  -webkit-box-shadow: 0 0 10px #E1DFED inset;
  -moz-box-shadow: 0 0 10px #E1DFED inset;
  box-shadow: 0 0 10px #E1DFED inset;
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
.btn {
  width: 15px;
  height: 15px;
  border-top: 2px solid rgba(186, 246, 159, 0.95) !important;
  border-right: 2px solid rgba(186, 246, 159, 0.95) !important;
  display: inline-block;
  transition: 1s;
}
.btn_left{
  transform: rotate(-135deg);
  margin-right: 5px;
}
.btn_right{
  transform: rotate(45deg);
  margin-left: 5px;
}
.btn:hover{
  border-top: 2px solid rgba(90, 62, 202, 0.6) !important;
  border-right: 2px solid rgba(90, 62, 202, 0.6) !important;
}
</style>