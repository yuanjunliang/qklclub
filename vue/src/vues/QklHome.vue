<template>
  <div>
    <div class="header">
      <qkl-header></qkl-header>
    </div>
    <div class="content">
      <qkl-content></qkl-content>
      <qkl-side-bar></qkl-side-bar>
    </div>
    <div class="footer"></div>
  </div>
</template>


<script>
import QklHeader from '../components/QklHead';
import QklContent from '../components/QklContent';
import QklSideBar from '../components/QklSideBar';
export default {
  name: 'QklHome',
  components:{
    QklHeader,
    QklContent,
    QklSideBar
  }
}
</script>

<style>
.content {
  width: 100%;
  height: 400px;
  margin-top: 10px;
}

.footer {
  width: 100%;
  height: 100px;
  background-color: yellow;
  margin-top: 10px;
}
</style>

