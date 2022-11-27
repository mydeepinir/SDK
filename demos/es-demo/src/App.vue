<script setup lang="ts">
import { ref } from 'vue'
import deepIn from 'deepin-js-sdk'
// import deepIn from '../../../src/index' // to test
import image from './assets/logo.png'

let response = ref('');
let writekeyText = ref('dHuUTYnzLb4bTV2JwQDH');
let showSendPage = ref(false);

function showResponse(promise: Promise<any>) {
  promise.then((d) => {
    response.value = JSON.stringify(d, null, 4)
  }).catch(e => {
    response.value = JSON.stringify(e, null, 4)
  })
}

function identify() {
  showResponse(deepIn.identify('12091906-01011992', {
    traits_firstName: 'Grace Hopper',
    traits_username: 'grace@usnavy.gov'
  }))
}
function track() {
  showResponse(deepIn.track('Article Bookmarked', 'Article'))
}
function page() {
  showResponse(deepIn.page('home'))
}
function group() {
  showResponse(deepIn.group('3243432', {}))
}
function alias() {
  showResponse(deepIn.alias('345342424323', '354222234423'))
}

function setWriteKey() {
  deepIn.init(writekeyText.value, { dontBunch: true })
  showSendPage.value = true
}
</script>

<template>
  <div>
    <h2><img :src="image"/>SDK</h2>
    <div class="transition" :style="{opacity: showSendPage? 0: 1, marginTop: showSendPage? '-4rem': '0'}">
      <input @change="(e: any) => { writekeyText = e?.target?.value }" placeholder="WriteKey" type="text"
        :value="writekeyText">
      <button @click="setWriteKey">Set write key</button>
    </div>
    <div class="transition" :style="{opacity: showSendPage? 1: 0}" >
      <button @click="() => { showSendPage = false }">↑</button>
      <button @click="identify">Identify</button>
      <button @click="track">Track</button>
      <button @click="page">Page</button>
      <button @click="group">Group</button>
      <button @click="alias">Alias</button>

      <pre class="response" v-html="response" ></pre>
    </div>
  </div>
</template>

<style scoped>
  .transition{
    transition: all .3s ease;
  }
  h2{
    margin: 3rem 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: .9rem;
  }
.response{
  max-width: 400px;
  margin: 2rem 0;
  white-space: pre;
  text-align: left;
}
img{
  width: 7rem;
}
input {
  min-width: 300px;
  padding: .7rem;
  background: none;
  border: 1px solid #aaa;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
