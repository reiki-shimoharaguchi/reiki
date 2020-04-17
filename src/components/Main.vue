<template>
  <div id="main">
    <div class="name">
      <h1>R.SHIMOHARAGUCHI</h1>
    </div>
    <hr align="center">
    <div class="company">
      <h3>Seattleconsulting</h3>
    </div>
    <div>
      <img
        class="photo"
        src="../assets/logo2.jpg"
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Main",
  props: {
    main:{
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style>
#main {
  position: relative;
  text-align: center;
  z-index: 500;
  width: 100%;
  background: linear-gradient(#80e1f7, #06c1e6);
  margin: 0;
  padding-top: 50px;
  border: 0;
}

.name {
  padding: 0;
  border: 0;
  color: #fff;
  text-shadow: #fff;
  padding-top: 10px;
  margin-bottom: 10px;
}

.company {
  padding: 0;
  border: 0;
  color: #fff;
  text-shadow: #fff;
  margin-top: 10px;
  margin-bottom: 10px;
}

.photo {
  width: 150px;       /* ※縦横を同値に */
  height: 150px;       /* ※縦横を同値に */
  border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
  background-position: left top;
  padding-bottom: 10px;
}

h1 {
  margin: 0;
}

h3 {
  margin: 0;
}

hr {
  margin: auto;
  color: #fff;
  width: 20%;
}
</style>
