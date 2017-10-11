<template>
  <div class="right-content">
      <ul>
        <li>分类目录</li>
        <li>分类目录</li>
        <li>分类目录</li>
        <li>分类目录</li>
        <li>分类目录</li>
        <li>分类目录</li>
        <li>分类目录</li>
      </ul>
  </div>
</template>

<script>
export default {
  name: 'QklSideBar',
  mounted(){
    console.log('页面渲染完成')
  }
}
</script>

<style>
.right-content {
    width: 20%;
    background-color: #847;
    height: 100%;
    float: right;
}

ul {
  list-style: none;
}
</style>

