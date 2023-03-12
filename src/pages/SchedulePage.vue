<template>
  <div class="schedule">
    <div class="calendar">
      <div class="btn btn_left" v-on:click="date_back()"></div>
      <div style="margin-top: -4px; display: flex;">
        <span style="font-weight: 400; font-size: 20px; color: rgba(241, 233, 233, 0.8);">{{ date_start }}</span>
        <span style="margin-left: 5px; margin-right: 5px;"> - </span>
        <span style="font-weight: 400; font-size: 20px; color: rgba(241, 233, 233, 0.8);">{{ date_end }}</span>
      </div>
      <div class="btn btn_right" v-on:click="date_next()"></div>
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
          <my-block 
            id="1"
            class="block1 block2" 
            :time_blocks=time_blocks1
          />
          <my-block 
            id="8"
            class="block1" 
            :time_blocks=time_blocks8
          />
          <my-block 
            id="15"
            class="block1" 
            :time_blocks=time_blocks15
          />
          <my-block 
            id="22"
            class="block1" 
            :time_blocks=time_blocks22
          />
          <my-block 
            id="29"
            class="block1" 
            :time_blocks=time_blocks29
          />
          <my-block 
            id="36"
            class="block1 block3" 
            :time_blocks=time_blocks36
          />
        </div>
        <div class="container">
          <div class="time-block">
          <span style="font-weight: 600;">10:35</span><span> 12:10</span>
        </div>
          <my-block
            id="2"
            class="block2"
            :time_blocks=time_blocks2
          />
          <my-block
            id="9"
            :time_blocks=time_blocks9
          />
          <my-block
            id="16"
            :time_blocks=time_blocks16
          />
          <my-block
            id="23"
            :time_blocks=time_blocks23
          />
          <my-block
            id="30"
            :time_blocks=time_blocks30
          />
          <my-block
            id="37"
            class="block3"
            :time_blocks=time_blocks37
          />
        </div>
        <div class="container">
          <div class="time-block">
          <span style="font-weight: 600;">12:25</span><span> 14:00</span>
        </div>
        <my-block
            id="3"
            class="block2"
            :time_blocks=time_blocks3
          />
          <my-block
            id="10"
            :time_blocks=time_blocks10
          />
          <my-block
            id="17"
            :time_blocks=time_blocks17
          />
          <my-block
            id="24"
            :time_blocks=time_blocks24
          />
          <my-block
            id="31"
            :time_blocks=time_blocks31
          />
          <my-block
            id="38"
            class="block3"
            :time_blocks=time_blocks38
          />
        </div>
        <div class="container">
          <div class="time-block">
          <span style="font-weight: 600;">14:45</span><span> 16:20</span>
        </div>
        <my-block
            id="4"
            class="block2"
            :time_blocks=time_blocks4
          />
          <my-block
            id="11"
            :time_blocks=time_blocks11
          />
          <my-block
            id="18"
            :time_blocks=time_blocks18
          />
          <my-block
            id="25"
            :time_blocks=time_blocks25
          />
          <my-block
            id="32"
            :time_blocks=time_blocks32
          />
          <my-block
            id="39"
            class="block3"
            :time_blocks=time_blocks39
          />
        </div>
        <div class="container">
          <div class="time-block">
          <span style="font-weight: 600;">16:35</span><span> 18:10</span>
        </div>
        <my-block
            id="5"
            class="block2"
            :time_blocks=time_blocks5
          />
          <my-block
            id="12"
            :time_blocks=time_blocks12
          />
          <my-block
            id="19"
            :time_blocks=time_blocks19
          />
          <my-block
            id="26"
            :time_blocks=time_blocks26
          />
          <my-block
            id="33"
            :time_blocks=time_blocks33
          />
          <my-block
            id="40"
            class="block3"
            :time_blocks=time_blocks40
          />
        </div>
        <div class="container">
          <div class="time-block">
          <span style="font-weight: 600;">18:25</span><span> 20:00</span>
        </div>
        <my-block
            id="6"
            class="block2"
            :time_blocks=time_blocks6
          />
          <my-block
            id="13"
            :time_blocks=time_blocks13
          />
          <my-block
            id="20"
            :time_blocks=time_blocks20
          />
          <my-block
            id="27"
            :time_blocks=time_blocks27
          />
          <my-block
            id="34"
            :time_blocks=time_blocks34
          />
          <my-block
            id="41"
            class="block3"
            :time_blocks=time_blocks41
          />
        </div>
        <div class="container">
          <div class="time-block">
          <span style="font-weight: 600;">20:15</span><span> 21:50</span>
        </div>
        <my-block 
            id="7"
            class="block2 block4" 
            :time_blocks=time_blocks7
          />
          <my-block 
            id="14"
            class="block4" 
            :time_blocks=time_blocks14
          />
          <my-block 
            id="21"
            class="block4" 
            :time_blocks=time_blocks21
          />
          <my-block 
            id="28"
            class="block4" 
            :time_blocks=time_blocks28
          />
          <my-block 
            id="35"
            class="block4" 
            :time_blocks=time_blocks35
          />
          <my-block 
            id="42"
            class="block3 block4" 
            :time_blocks=time_blocks42
          />
        </div>
        </div>
    </div>
  </div>
  
</template>

<script>
import axios from 'axios';
import { onMounted } from 'vue';

export default {
  data(){
    return {
      current: new Date(),
      months: {0:"январь", 1:"февраль", 2:"март", 3:"апрель", 4:"май", 5:"июнь", 
              6:"июль", 7:"август", 8:"сентябрь", 9:"октябрь", 10:"ноябрь", 11:"декабрь"},
      months_short: {0:"янв", 1:"фев", 2:"мар", 3:"апр", 4:"мая", 5:"июня", 
              6:"июля", 7:"авг", 8:"сент", 9:"окт", 10:"нояб", 11:"дек"},   
      date_start: "",
      date_end: "",
      time_blocks1: [],
      time_blocks2: [],
      time_blocks3: [],
      time_blocks4: [],
      time_blocks5: [],
      time_blocks6: [],
      time_blocks7: [],
      time_blocks8: [],
      time_blocks9: [],
      time_blocks10: [],
      time_blocks11: [],
      time_blocks12: [],
      time_blocks13: [],
      time_blocks14: [],
      time_blocks15: [],
      time_blocks16: [],
      time_blocks17: [],
      time_blocks18: [],
      time_blocks19: [],
      time_blocks20: [],
      time_blocks21: [],
      time_blocks22: [],
      time_blocks23: [],
      time_blocks24: [],
      time_blocks25: [],
      time_blocks26: [],
      time_blocks27: [],
      time_blocks28: [],
      time_blocks29: [],
      time_blocks30: [],
      time_blocks31: [],
      time_blocks32: [],
      time_blocks33: [],
      time_blocks34: [],
      time_blocks35: [],
      time_blocks36: [],
      time_blocks37: [],
      time_blocks38: [],
      time_blocks39: [],
      time_blocks40: [],
      time_blocks41: [],
      time_blocks42: [],
    }
  },
  methods:{
    findDate: function(){
      var weekstart = this.current.getDate() - this.current.getDay() + 1;    
      var weekend = weekstart + 5;
      this.monday = new Date(this.current.setDate(weekstart));
      this.saturday = new Date(this.current.setDate(weekend));
    },
    writeDate: function(){
      let start = this.months[this.monday.getMonth()] + " " + this.monday.getDate() + ", " + this.monday.getFullYear();
      let end = this.months[this.saturday.getMonth()] + " " + this.saturday.getDate() + ", " + this.saturday.getFullYear();
      this.date_start = start;
      this.date_end = end;
      let temp = this.monday;
      this.tuesday = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() + 1);
      this.wednsday = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() + 2);
      this.thursday = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() + 3);
      this.friday = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() + 4);
      this.mon = this.monday.getDate() + " " + this.months_short[this.monday.getMonth()];
      this.tue = this.tuesday.getDate() + " " + this.months_short[this.tuesday.getMonth()];
      this.wed = this.wednsday.getDate() + " " + this.months_short[this.wednsday.getMonth()];
      this.thur = this.thursday.getDate() + " " + this.months_short[this.thursday.getMonth()];
      this.fri = this.friday.getDate() + " " + this.months_short[this.friday.getMonth()];
      this.sat = this.saturday.getDate() + " " + this.months_short[this.saturday.getMonth()];
    },
    clear_blocks: function(){
      this.time_blocks1= [];
      this.time_blocks2= [];
      this.time_blocks3= [];
      this.time_blocks4= [];
      this.time_blocks5= [];
      this.time_blocks6= [];
      this.time_blocks7= [];
      this.time_blocks8= [];
      this.time_blocks9= [];
      this.time_blocks10= [];
      this.time_blocks11= [];
      this.time_blocks12= [];
      this.time_blocks13= [];
      this.time_blocks14= [];
      this.time_blocks15= [];
      this.time_blocks16= [];
      this.time_blocks17= [];
      this.time_blocks18= [];
      this.time_blocks19= [];
      this.time_blocks20= [];
      this.time_blocks21= [];
      this.time_blocks22= [];
      this.time_blocks23= [];
      this.time_blocks24= [];
      this.time_blocks25= [];
      this.time_blocks26= [];
      this.time_blocks27= [];
      this.time_blocks28= [];
      this.time_blocks29= [];
      this.time_blocks30= [];
      this.time_blocks31= [];
      this.time_blocks32= [];
      this.time_blocks33= [];
      this.time_blocks34= [];
      this.time_blocks35= [];
      this.time_blocks36= [];
      this.time_blocks37= [];
      this.time_blocks38= [];
      this.time_blocks39= [];
      this.time_blocks40= [];
      this.time_blocks41= [];
      this.time_blocks42= [];
    },
    date_back: function(){
      let temp = this.monday;
      temp.setDate(temp.getDate() - 7);
      this.morning = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() - 7);
      this.saturday = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() + 5);
      this.writeDate();
      this.clear_blocks();
      this.fill_timeslots();
    },
    date_next: function(){
      let temp = this.monday;
      temp.setDate(temp.getDate() + 7);
      this.morning = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() - 7);
      this.saturday = new Date(temp.getFullYear(), temp.getMonth(), temp.getDate() + 5);
      this.writeDate();
      this.clear_blocks();
      this.fill_timeslots();
    },
    create_slot: function(info){
      let groupsName = "";
      for (let i = 0; i<info.groups.length; i++){
        groupsName += info.groups[i].name;
        groupsName += ", ";
      }
      groupsName = groupsName.substring(0, groupsName.length-2);
      let className = "";
      className = `Аудитория (${info.classroom.name})`;
      return {
        lessonName: info.subject.name,
        teacherName: info.teacher.name,
        classRoom: className,
        buildingName: info.classroom.building.address,
        groupName: groupsName}
    },
    async fill_timeslots(){
      let str;
      str = this.monday.toISOString().substring(0, 10);
      try{
        const response = await axios.get("http://185.46.8.41/api/class",
                                        {
                                          params: {
                                            "date_start": str,
                                            "group_id": Number(localStorage.getItem("selectedGroup")),
                                          }
                                        }
                                        );
        var respData = response.data;
      } catch (e){
        console.log(e);
      };
      for (let i = 0; i<respData.length; i++){
        switch(respData[i].timeslot_id){
          case 1:
            this.time_blocks1.push(this.create_slot(respData[i]));  
            break;
          case 2:
            this.time_blocks2.push(this.create_slot(respData[i]));  
            break;
          case 3:
            this.time_blocks3.push(this.create_slot(respData[i]));  
            break;
          case 4:
            this.time_blocks4.push(this.create_slot(respData[i]));  
            break;
          case 5:
            this.time_blocks5.push(this.create_slot(respData[i]));  
            break;
          case 6:
            this.time_blocks6.push(this.create_slot(respData[i]));  
            break;
          case 7:
            this.time_blocks7.push(this.create_slot(respData[i]));  
            break;
          case 8:
            this.time_blocks8.push(this.create_slot(respData[i]));
            break;
          case 9:
            this.time_blocks9.push(this.create_slot(respData[i]));
            break;
          case 10:
            this.time_blocks10.push(this.create_slot(respData[i]));
            break;
            case 11:
            this.time_blocks11.push(this.create_slot(respData[i]));  
            break;
          case 12:
            this.time_blocks12.push(this.create_slot(respData[i]));  
            break;
          case 13:
            this.time_blocks13.push(this.create_slot(respData[i]));  
            break;
          case 14:
            this.time_blocks14.push(this.create_slot(respData[i]));  
            break;
          case 15:
            this.time_blocks15.push(this.create_slot(respData[i]));  
            break;
          case 16:
            this.time_blocks16.push(this.create_slot(respData[i]));  
            break;
          case 17:
            this.time_blocks17.push(this.create_slot(respData[i]));  
            break;
          case 18:
            this.time_blocks18.push(this.create_slot(respData[i]));
            break;
          case 19:
            this.time_blocks19.push(this.create_slot(respData[i]));
            break;
          case 20:
            this.time_blocks20.push(this.create_slot(respData[i]));
            break;
          case 21:
            this.time_blocks21.push(this.create_slot(respData[i]));  
            break;
          case 22:
            this.time_blocks22.push(this.create_slot(respData[i]));  
            break;
          case 23:
            this.time_blocks22.push(this.create_slot(respData[i]));  
            break;
          case 24:
            this.time_blocks24.push(this.create_slot(respData[i]));  
            break;
          case 25:
            this.time_blocks25.push(this.create_slot(respData[i]));  
            break;
          case 26:
            this.time_blocks26.push(this.create_slot(respData[i]));  
            break;
          case 27:
            this.time_blocks27.push(this.create_slot(respData[i]));  
            break;
          case 28:
            this.time_blocks28.push(this.create_slot(respData[i]));
            break;
          case 29:
            this.time_blocks29.push(this.create_slot(respData[i]));
            break;
          case 30:
            this.time_blocks30.push(this.create_slot(respData[i]));
            break;
          case 31:
            this.time_blocks31.push(this.create_slot(respData[i]));  
            break;
          case 32:
            this.time_blocks32.push(this.create_slot(respData[i]));  
            break;
          case 33:
            this.time_blocks33.push(this.create_slot(respData[i]));  
            break;
          case 34:
            this.time_blocks34.push(this.create_slot(respData[i]));  
            break;
          case 35:
            this.time_blocks35.push(this.create_slot(respData[i]));  
            break;
          case 36:
            this.time_blocks36.push(this.create_slot(respData[i]));  
            break;
          case 37:
            this.time_blocks37.push(this.create_slot(respData[i]));  
            break;
          case 38:
            this.time_blocks38.push(this.create_slot(respData[i]));
            break;
          case 39:
            this.time_blocks39.push(this.create_slot(respData[i]));
            break;
          case 40:
            this.time_blocks40.push(this.create_slot(respData[i]));
            break;
          case 41:
            this.time_blocks41.push(this.create_slot(respData[i]));
            break;
          case 42:
            this.time_blocks42.push(this.create_slot(respData[i]));
            break;
        }
        
      }
    }
  },
  beforeMount(){
    this.findDate(),
    this.writeDate(),
    this.fill_timeslots()
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