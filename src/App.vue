<script setup lang="ts">
  //importing dependicinces
  import mainDashboard from './components/main-dashboard.vue';
  import down from "./assets/icon-down.svg"
  import facebook from "./assets/icon-facebook.svg"
  import instagram from "./assets/icon-instagram.svg"
  import twitter from "./assets/icon-twitter.svg"
  import up from "./assets/icon-up.svg"
  import youtube from "./assets/icon-youtube.svg"
  import weekDashboard from './components/week-dashboard.vue';
  // setting up the props for the first component
  const props = [
    {
      logo:facebook,
      username:"@nathanf",
      followers:"1987",
      toFollowers:"followers",
      arrow:up,
      amount: "12 Today",
      gradient:'bg-facebook',
      index: 1,
    },
    {
      logo:twitter,
      username:"@nathanF",
      followers:"1044",
      toFollowers:"followers",
      arrow:up,
      amount: "99 Today",
      gradient:'bg-twitter',
      index: 2,
    },
    {
      logo:instagram,
      username:"@realnathanf",
      followers:"11k",
      toFollowers:"followers",
      arrow:up,
      amount: "1099 Today",
      gradient:'bg-gradient-to-r from-instaBGO to-instaBGT',
      index: 3,
    },
    {
      logo:youtube,
      username:"Nathan F.",
      followers:"8239",
      toFollowers:"subscribers",
      arrow:down,
      amount: "1444 Today",
      gradient:'bg-youtube',
      index: 4,
    },
  ]
  // setting up props for second component
  const propsTwo = [
    {
      logo:facebook,
      label:"Page Views",
      views:"87",
      arrow:up,
      percentage:"3%",
      index:1
    },
    {
      logo:facebook,
      label:"Likes",
      views:"52",
      arrow:down,
      percentage:"2%",
      index:2
    },
    {
      logo:instagram,
      label:"Likes",
      views:"5462",
      arrow:up,
      percentage:"2257%",
      index:3
    },
    {
      logo:instagram,
      label:"Profile Views",
      views:"52k",
      arrow:up,
      percentage:"1375%",
      index:4
    },
    {
      logo:twitter,
      label:"Retweets",
      views:"117",
      arrow:up,
      percentage:"303%",
      index:5
    },
    {
      logo:twitter,
      label:"Likes",
      views:"507",
      arrow:up,
      percentage:"553%",
      index:6
    },
    {
      logo:youtube,
      label:"Likes",
      views:"107",
      arrow:down,
      percentage:"19%",
      index:7
    },
    {
      logo:youtube,
      label:"Total Views",
      views:"1407",
      arrow:down,
      percentage:"12%",
      index:8
    },
  ]
  // setting up dark mode and light mode logic
  let state = false
  const onClick = () => {
    console.log("working")
    if(state == false){
      document.documentElement.classList.add("dark")
      state = true
    }
    else if(state == true){
      document.documentElement.classList.remove("dark")
      state = false
    }
  }
</script>

<template>
  <!-- main html code -->
  <main>
    <section class="mb-[2rem] flex items-center justify-between">
      <div>
        <h1 class="font-InterBold text-white text-[30px] dark:text-ltT">
          Social Media Dashboard
        </h1>
        <p class="font-InterBold text-des-blue text-[16px] dark:text-ltO">
          Total Followers: 23,004
        </p>
      </div>
      <div class="flex items-center justify-center gap-[1rem]">
        <label for="button" class="font-InterBold text-[15px] text-des-blue dark:text-ltO">
          Dark Mode
        </label>
        <button class="bg-gradient-to-r from-tgO to-tgT dark:bg-gradient-to-r dark:from-ltO dark:to-ltO h-[1.35rem] w-[2.5rem] relative rounded-[100px] flex items-center justify-center" @click="onClick">
          <div class="circle h-[1rem] w-[1rem] bg-dark-des-blue dark:bg-white rounded-[50%] absolute top-[2.6px] left-[3px] dark:translate-x-[17px]"></div>
        </button>
      </div>
    </section>
    <div class="flex gap-[1rem]">
      <mainDashboard v-for="{ logo, username, followers, toFollowers, arrow, amount, gradient, index } in props" :key="index" :logo="logo" :username="username" :followers="followers" :to-followers="toFollowers" :arrow="arrow" :amount="amount" :gradient="gradient" :text="arrow == up ? 'text-lime-green' : 'text-err'"/>
    </div>
    <h1 class="font-InterBold text-white dark:text-ltO text-[25px] mt-[2rem]">
      Overview Today
    </h1>
    <div class="grid gap-x-[1rem] grid-cols-4 mt-[0.75rem]">
      <weekDashboard v-for="{ logo, label, views, arrow, percentage, index } in propsTwo" :key="index" :logo="logo" :label="label" :views="views" :arrow="arrow" :percentage="percentage" :text="arrow == up ? 'text-lime-green' : 'text-err'"/>    </div>
  </main>
</template>
<style>
  .circle{
    transition: transform 0.1s linear;
  }
  .btn{
    background: linear-gradient(to right, hsl(210, 78%, 56%), hsl(146, 68%, 55%));
  }
  .btnD{
    background: #cdced5;
  }
</style>