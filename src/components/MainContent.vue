<script setup>
import Product from './Product.vue'

const indexList = ["Category A", "Category B", "Category C", "Category D"]

const target = '#index-bar-wrapper'
</script>

<template>
  <div id="index-bar-wrapper">
  </div>
  
  <van-index-bar :index-list="indexList" :teleport='target' :sticky="false" :sticky-offset-top="100">
    <van-index-anchor index="Category A" />
    <div class="section">
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
    <van-index-anchor index="Category B" />
    <div>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
    
    <van-index-anchor index="Category C" />
    <div>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
    
    <van-index-anchor index="Category D" />
    <div>
      <Product />
      <Product />
      <Product />
      <Product />
    </div>
  </van-index-bar>
  <h2>Other content</h2>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin efficitur luctus lectus vitae venenatis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed convallis odio vel auctor porta. Donec eleifend in odio id pharetra. Nulla fringilla ex et pellentesque lobortis. Nulla ac rutrum libero. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Morbi nisi neque, auctor in volutpat sed, finibus quis odio. Curabitur lacinia congue mi, interdum consectetur lectus porttitor quis. Nunc interdum tincidunt eleifend. Aenean viverra dolor vel dui dictum facilisis. Nam maximus condimentum tempor.
    
    <br />
    <br />
    
    Sed bibendum, nisl eget vehicula aliquam, eros sapien feugiat arcu, et maximus odio dolor id magna. Sed eu efficitur metus. Maecenas quis venenatis sem, ut convallis sapien. Ut luctus venenatis blandit. Morbi at risus felis. In vel diam volutpat, gravida tortor quis, convallis ligula. Mauris sit amet malesuada tellus. Fusce facilisis nulla vel enim maximus, id tempus nulla maximus. In iaculis turpis vel dictum commodo. Praesent euismod eros vitae lorem aliquet, a ullamcorper leo imperdiet. Donec vitae lorem in nisi pulvinar eleifend. Vestibulum vulputate lorem lacus, id porta nibh mollis quis. Nam fringilla id mauris ullamcorper euismod. Integer ac turpis blandit, tincidunt sem non, accumsan magna. Nullam eu turpis convallis, lobortis libero a, tincidunt risus.
    
    <br />
    <br />
    
    Aliquam vel ipsum et dui facilisis gravida pellentesque venenatis libero. Cras id turpis eu felis laoreet gravida id nec quam. Ut pulvinar vitae lorem eu tempor. Vestibulum non mollis libero, non egestas erat. Mauris tincidunt molestie sodales. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam congue neque quis convallis interdum.
  </p>
</template>

<style scoped>
#index-bar-wrapper {
  position: sticky;
  top: 0px;
  background: white;
  padding: 5px 10px;
  margin-bottom: 50px;
}

:deep(.van-index-bar__sidebar) {
  position: relative;
  display: flex;
  flex-direction: row;
  top: 0px;
  transform: unset;
}
:deep(.van-index-bar__index) {
  font-size: 15pt;
  padding: 5px 20px;
  margin-right: 30px;
  line-height: unset;
}

:deep(.van-index-bar__index--active) {
  border-radius: 20px;
  background-color: black;
  color: white;
}

:deep(.van-index-anchor) {
  padding-left: 0;
  font-size: 15pt;
}

:deep(.van-index-anchor--sticky) {
  position: static;
}
</style>
