<template>
  <div class="content">
     <div class="content-list">
         <ul>
             <li>
                 <div>
                     <h2><a href="#">这是标题</a></h2>
                     <p>这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落</p>
                 </div>
             </li>
             <li>
                 <div>
                     <h2><a href="#">这是标题</a></h2>
                     <p>这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落</p>
                 </div>
             </li>
             <li>
                 <div>
                     <h2><a href="#">这是标题</a></h2>
                     <p>这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落</p>
                 </div>
             </li>
             <li>
                 <div>
                     <h2><a href="#">这是标题</a></h2>
                     <p>这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落</p>
                 </div>
             </li>
             <li>
                 <div>
                     <h2><a href="#">这是标题</a></h2>
                     <p>这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落</p>
                 </div>
             </li>
              <li>
                 <div>
                     <h2><a href="#">这是标题</a></h2>
                     <p>这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落</p>
                 </div>
             </li>
              <li>
                 <div>
                     <h2><a href="#">这是标题</a></h2>
                     <p>这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落</p>
                 </div>
             </li>
              <li>
                 <div>
                     <h2><a href="#">这是标题</a></h2>
                     <p>这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落</p>
                 </div>
             </li>
              <li>
                 <div>
                     <h2><a href="#">这是标题</a></h2>
                     <p>这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落这是文摘段落</p>
                 </div>
             </li>
         </ul>
     </div>
     <div class="page-control">
         分页区域
     </div>
  </div>
</template>


<script>
export default {
  name: 'QklContent'
}
</script>


<style>
ul {
    list-style: none;
    margin-top: 0px;
}

.content {
    height: 100%;
    position: relative;
    margin-top: 0px;
    float: left;
    width: 79%;
}

.content-list {
    height: 95%;
    overflow: auto;
}

a {
    text-decoration: none;
    font-size: 20px;
    color: #886
}

.page-control {
    background-color: yellow;
    position: absolute;
    bottom: 0px;
    margin-bottom: 0px;
    width: 100%;
}
</style>
