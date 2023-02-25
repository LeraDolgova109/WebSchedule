<template>
    <button class="btn">
      <slot></slot>
    </button>
  </template>
  
  <script>
  export default {
    name: 'my-button'
  }
  </script>
  
  <style scoped>
  .btn {
    font-family: 'Inter';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 22px;
    width: 124px;
    height: 35px;
    left: 353px;
    top: 21px;

    background: #BAF69F;
    border-radius: 5px;
    color: #3B335E;
  }
  </style>