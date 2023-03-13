<template>
    <div class="selectt" >
        <select v-bind:value="modelValue" @change="changeOption" multiple="true">
            <option disabled value="" selected>{{ name }}</option>
            <option
              v-for="option in options"
              :key="option.id"
              :value="option.name"
            >
              {{ option.name }}
            </option>
        </select>
    </div>
</template>
  
<script>
  export default {
    name: 'my-multselect',
    props: {
      modelValue: {
        type: Array,
        default: () => []
      },
      name: {
        type: String
      },
      options: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      changeOption(event) {
        this.$emit('update:modelValue', event.target.value);
      }
    }
  }
</script>
  
<style scoped>
.selectt {
    position: relative;
    margin-bottom: 1rem;
    width: 534px;
    height: 47px;
    margin-top: 20px;
    border: none; 
    outline: none;
}

.selectt select {
    display: block;
    width: 100%;
    padding: .75rem 2.5rem .75rem 1rem;
    background: none;
    border: none; 
    border-radius: 12px;
    -webkit-appearance: none;
    appearance: none;

    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 24px;

    color: #0D053B;
}


</style>