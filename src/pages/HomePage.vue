<template>
  <div class="home">
    <my-select
      v-model="selectedOption"
      :options="options"
    />
    <my-button>Сохранить</my-button>
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
      ]
      }
    }
}
</script>
