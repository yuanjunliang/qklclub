<template>
  <div>
    <div class="header">
      <qkl-header></qkl-header>
    </div>
    <div class="content-center">
      <qkl-content></qkl-content>
      <qkl-side-bar></qkl-side-bar>
    </div>
    <div class="footer">
      <qkl-footer></qkl-footer>
    </div>
  </div>
</template>


<script>
import QklHeader from '../components/QklHeader';
import QklContent from '../components/QklContent';
import QklSideBar from '../components/QklSideBar';
import QklFooter from '../components/QklFooter';
export default {
  name: 'QklHome',
  components:{
    QklHeader,
    QklContent,
    QklSideBar,
    QklFooter
  }
}
</script>

<style>
.content-center {
  margin-top: 10px;
  height: 600px;
}

.footer {
  height: 50px;
  background-color: yellow;
  margin-top: 10px;
}
</style>

