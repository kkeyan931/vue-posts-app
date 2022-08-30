<template>
    <button @click="clickEvent" :style="{ background: color }" class="btn">
      {{ text }}
    </button>
  </template>
  
  <script>
  export default {
    name: "ButtonComp",
    props: ["text","color","clickEvent"],
    methods: {
    },
  };
  </script>
  
  <style scoped>
  .btn {
    padding: 12px 20px;
    color: #fff;
    text-align: center;
    cursor: pointer;
    
    margin-bottom: 15px;
    opacity: 0.8;
    font-size: 18px;
    border: 0;
    border-radius: 0px 0px 5px 5px;
    cursor: pointer;
  }
  </style>