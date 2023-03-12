<template>
    <div class="selectt" >
        <select v-bind:value="modelValue" @change="changeOption">
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
    name: 'my-select',
    props: {
      modelValue: {
        type: String
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
}

.selectt:after {
    content: "";
    display: inline-block;
    border-style: solid;
    border-width: 6px 5px 0 5px;
    border-color: #0D053B transparent transparent transparent;
    border: solid #0D053B;
    border-width: 0 2px 2px 0;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    padding: 3px;
    pointer-events: none;

    position: absolute;
    top: 35%;
    right: 1rem;
    z-index: 1;
}

.selectt select {
    display: block;
    width: 100%;
    padding: .75rem 2.5rem .75rem 1rem;
    background: rgba(255, 255, 255, 0.8);
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