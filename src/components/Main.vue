<template>
  <div id="main">
    <div class="name">
      <h1>R.SHIMOHARAGUCHI</h1>
    </div>
    <hr width="30%">
    <div class="company">
      <h2>Seattleconsulting</h2>
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
  z-index: 10;
  width: 100%;
  background-color: skyblue;
  margin: 0;
  padding: 0;
  border: 0;
}

.name {
  padding: 0;
  border: 0;
}

.company {
  padding: 0;
  border: 0;
}

.photo {
  width: 180px;       /* ※縦横を同値に */
  height: 180px;       /* ※縦横を同値に */
  border-radius: 50%;  /* 角丸半径を50%にする(=円形にする) */
  background-position: left top;
}
</style>
