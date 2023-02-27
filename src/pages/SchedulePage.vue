<template>
  <div class="schedule">
    <div class="calendar">Календарь</div>

    <div class="scheduleBlock">
      <div class="datesName" id="date-template" style="display:none;">
        <div clss="name"></div>

        <div class="date"></div>
      </div>
      <div class="timesName">
        
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
  height: 835px;
  left: 66px;
  top: 136px;

  background: rgba(90, 62, 202, 0.6);
  border-radius: 15px;
}

.timesName {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}

.timeName {
  height: 34px;
  left: 73px;
  top: 157px;
}
</style>