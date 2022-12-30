<template>
  <div id="app">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/css/all.min.css" integrity="sha512-MV7K8+y+gLIBoVD59lQIYicR65iaqukzvf/nwasF0nqhPay5w/9lJmVM2hMDcnK1OnMGCdVK+iQrJ7lzPJQd1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <router-view/>
  </div>
</template>
<script>

  //   CSS Files 
   require('./assets/css/bootstrap.css')
   require('./assets/css/style.css')
   require('./assets/css/mobile.css')
   
   
export default {
  metaInfo: {
    title: 'Default App Title',
    titleTemplate: '%s | vue-meta Example App',
    htmlAttrs: {
      lang: 'en-US'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'description', content: 'An example Vue application with vue-meta.' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ]
  },
data () {
  return {
    
  }
 },
 mounted () {
  
 },
 methods: {
  
  }
 }
</script>
<style>


</style>
