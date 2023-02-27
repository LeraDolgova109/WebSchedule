<template>
  <div class="home">
    <my-select
      v-bind="selectedOption"
      :option="options"
    />
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
