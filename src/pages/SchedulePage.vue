<template>
  <div class="schedule">
    <div class="calendar">Календарь</div>

    <div class="scheduleBlock">
      <div class="dateName">
        <div class="date"></div>
        <div class="date"></div>
        <div class="date"></div>
        <div class="date"></div>
        <div class="date"></div>
        <div class="date"></div>
      </div>
    <div class="help">
      <div class="timeName">
        <div class="time"></div>
        <div class="time"></div>
        <div class="time"></div>
        <div class="time"></div>
        <div class="time"></div>
        <div class="time"></div>
        <div class="time"></div>
      </div>
      <div class="timeSlots">
        <div class="container">
          <div class="block block1 block2"></div>
          <div class="block block1"></div>
          <div class="block block1"></div>
          <div class="block block1"></div>
          <div class="block block1"></div>
          <div class="block block1 block3"></div>
        </div>
        <div class="container">
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
          <div class="block block2"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block"></div>
          <div class="block block3"></div>
        </div>
        <div class="container">
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
.scheduleBlock{
  margin-top: 10px;
  height: 840px;
  left: 66px;
  top: 136px;

  background: rgba(90, 62, 202, 0.6);
  border-radius: 15px;
}
.help{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.timeSlots {
  display: inline-block;
}
.container {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.block {
  box-sizing: border-box;
  position: relative;
  width: 200px;
  height: 115px;

  border: 1px solid #E1DFED;
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
.dateName{
  margin-left: 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

.timeName{
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.date {
  box-sizing: border-box;
  position: relative;
  width: 200px;
  height: 20px;

}
.time {
  box-sizing: border-box;
  position: relative;
  width: 20px;
  height: 115px;

}
</style>