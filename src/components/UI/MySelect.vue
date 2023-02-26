<template>
    <div class="select" >
        <select :value="modelValue" @change="changeOption">
            <option disabled value="">Выберите из списка</option>
            <option
                v-for="option in options"
                :key="option.value"
                :value="option.value"
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
.select {
    position: relative;
    margin-bottom: 1rem;
    width: 534px;
    height: 47px;
}

.select:after {
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

.select select {
    display: block;
    width: 100%;
    padding: .75rem 2.5rem .75rem 1rem;
    background: rgba(241, 233, 233, 0.8);
    border-radius: 12px;
    border-radius: 3px;
    -webkit-appearance: none;
    appearance: none;

    font-family: inherit;
    font-size: 1rem;
    color: #444;
}

.select select:focus {
    outline: 0;
    border-color: #0891e6;
}

</style>