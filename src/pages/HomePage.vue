<template>
  <div class="home">
    <my-select
      v-bind="selectedOption"
      :option="options"
    />
    <my-button style="width: 446px;">Сохранить</my-button>
  </div>
</template>

<script>
export default {
  data() {
      return {
        selectedOption: '',
        options: [
          {value: 'title', name: 'По названию'},
          {value: 'body', name: 'По содержимому'},
      ]
      }
    }
}
</script>

<style scoped>
.home {
  width: 100%;
  display: table;
  justify-content: center;
}
</style>
