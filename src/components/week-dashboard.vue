<script setup lang="ts">
  defineProps({
    logo:String,
    label:String,
    views:String,
    arrow:String,
    percentage:String,
    text:String
  })
</script>

<template>
  <article class="flex items-center p-[1.5rem] flex-col w-[17rem] mt-[1rem] gap-[1rem] rounded-[7px] bg-dark-des-blue hover:bg-dark-des-blue-h cursor-pointer dark:bg-lcbg dark:hover:bg-lcbgH">
    <div class="flex items-center justify-between gap-[3rem] w-[100%]">
      <span class="font-InterBold capitalize text-[14px] text-des-blue dark:text-ltO">
        {{ label }}
      </span>
      <img :src="logo" alt="logoWeekly"/>
    </div>
    <section class="flex items-center justify-between gap-[3rem] w-[100%] font-InterBold text-[27.5px] text-white dark:text-ltT">
      {{ views }}
      <div :class="'flex text-[15px] gap-[0.5rem] ' + text">
        <img :src="arrow" alt="arrow" class="self-center"/>
        {{ percentage }}
      </div>
    </section>
  </article>
</template>

