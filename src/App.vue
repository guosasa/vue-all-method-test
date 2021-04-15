<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> 
      <div class="btn" @click="$router.push('/')">返回</div>
    </div>
    <top-btn></top-btn>
    <div class="float-box">
      <div class="item1"></div>
      <div class="item2"></div>
    </div>
    <div class="float-box float-box2">
      <div class="item1"></div>
    </div>
    <div class="float-box float-box3">
      <div class="item1"></div>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
.float-box {
  position: relative;
  margin-bottom: 10px;
  .item1 {
    height: 1.5px;
    width: 200px;
    background: red;
  }
  .item2{
    position: absolute;
    bottom:0;
    height: 1px;
    width: 200px;
    background: white;
  }
}
.float-box2 {
  .item1 {
    height: 1px;
    width: 200px;
    background: red;
    transform: scale(1,0.5);
    transform-origin: 50% 100%;
  }
}
.float-box3 {
  .item1 {
    height: 1px;
    width: 200px;
    background: linear-gradient(0deg, red,transparent);
  }
}
</style>
