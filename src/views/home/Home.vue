<template>
   <div id="home">
      <nav-bar class="home-nav">
        <div slot="center">购物街</div>
      </nav-bar>
   </div>
</template>

<script>
  import NavBar from 'components/common/navbar/NavBar';

/*  import {getHomeMultidata , getHomeMultidata} from 'newwork/home'*/

  export default {
    name: "Home",

    components: {
      NavBar
    },

    created() {
      //1.请求多个数据
   /*   this.getHomeMultidata()*/
      //2.请求商品数据

    }
  };
</script>

<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
    position: relative;
    z-index: 9;
  }
</style>
