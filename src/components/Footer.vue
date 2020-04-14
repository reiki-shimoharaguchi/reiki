<template>
  <div class="footerSection">
    <a
      href="#top"
      @click="pushTop()"
    >
      <img
        src="../assets/yajirushi.png"
        class="footerYajirushi"
        width="5%"
        height="5%"
      >
    </a>
    <div>
      <h2
        class="footer"
      >
        ©️Seattleconsulting
      </h2>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
  props: {
    footer:{
      type: Boolean,
      default: false,
    }
  },
  methods: {
    pushTop() {
      event.preventDefault()
      this.$SmoothScroll(
        document.querySelector('#top'),
        400,
        'y'
      )
    },
  }
};
</script>

<style>
.footerSection {
  z-index: 500;
  position: relative;
  bottom: 0;
  height: 80px;
  width: 100%;
  background-color: skyblue;
}

.footer {
  position: absolute;
  z-index: 510;
  width: 20px;
  height: 10px;
  bottom: 20px;
  text-align: center;
}

.footerYajirushi {
  position: absolute;
  z-index: 100;
  width: 5%;
  height: 40%;
  bottom: 65px;
  text-align: center;
}
</style>
