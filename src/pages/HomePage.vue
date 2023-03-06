<template>
  <div class="home">
    <my-select
      v-model="selectedOption"
      :options="options"
    />
    <my-button>Сохранить</my-button>
    <my-card
      :lessonName="lessonName"
      :teacherName="teacherName"
      :classRoom="classRoom"
      :groupName="groupName"
    />
  </div>
</template>

<script>
export default {
  data() {
      return {
        selectedOption: '',
        options: [
          {value: "1", name: '972101'},
          {value: "2", name: '972102'},
          {value: "3", name: '972103'},
        ],
        lessonName: "Машиннное обучение",
        teacherName: "Иванов Иван Иванович",
        classRoom: "Аудитория 302(1)",
        groupName: "972103"
      }
    }
}
</script>
