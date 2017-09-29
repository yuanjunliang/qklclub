<template>
  <div class="left-content">
      <div class="content-list">
          <ul>
              <li>
                  <div class="list-title-content">
                      <p><a href="http://www.baidu.com">哥俩好</a></p>
                  </div>
              </li>
              <li>列表</li>
              <li>列表</li>
              <li>列表</li>
              <li>列表</li>
              <li>列表</li>
              <li>列表</li>
              <li>列表</li>
              <li>列表</li>
              <li>列表</li>
          </ul>
      </div>
      <div class="page">pages</div>
  </div>
</template>

<script>
export default {
  name: 'QklContent'
}
</script>

<style>
.left-content {
    float: left;
    width: 80%;
    height: 400px;
    background-color: #998
}

.content-list ul {
    list-style: none;
}

.content-list ul li {
    background-color: #964;
    margin-top: 5px;
    padding-left: 30px;
    padding-top: 1px;
    padding-bottom: 1px;
}

.list-title-content a {
    text-decoration: none;
    color: red;
}

.list-title-content p {
    text-align: left;
}

.left-content .page {
    width: 100%;
    height: 30px;
    margin-bottom: 10px;
    background-color: purple
}
</style>

