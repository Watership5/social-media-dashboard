<script setup lang="ts">
  defineProps({
    logo:String,
    username:String,
    followers:String,
    toFollowers:String,
    arrow:String,
    amount:String,
    gradient:String,
    text:String,
  })
</script>

<template>
  <article>
    <div  :class="'z-[-1] h-[0.75rem] relative bottom-[-0.4rem] rounded-[7px] ' + String(gradient)">

    </div>
    <section class="z-[2] gap-[1.5rem] p-[1.5rem] pt-[1.9rem] relative flex flex-col items-center justify-center w-[17rem] rounded-b-[7px] bg-dark-des-blue hover:bg-dark-des-blue-h dark:bg-lcbg dark:hover:bg-lcbgH cursor-pointer">
      <div class="flex gap-[0.75rem] items-center justify-center">
        <img :src="logo" alt="logo" class="self-center"/>
        <span class="font-InterBold text-[12px] text-des-blue dark:text-ltO">
          {{ username }}
        </span>
      </div>
      <div class="flex flex-col">
        <span class="font-InterBold text-[47.5px] flex items-center justify-center text-white dark:text-ltT">
          {{ followers }}
        </span>
        <span class="uppercase text-Inter text-[13px] tracking-[5px] text-des-blue dark:text-ltO">
          {{ toFollowers }}
        </span>
      </div>
      <div :class="'flex font-InterBold gap-[0.5rem] text-[12px] ' + String(text)">
        <img :src="arrow" alt="arrow" class="self-center">
        {{ amount }}
      </div>
    </section>
  </article>
</template>