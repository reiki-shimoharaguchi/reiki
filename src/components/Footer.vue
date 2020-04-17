<template>
  <div class="footerSection">
    <a
      class="footerYajirushi"
      href="#main"
      @click="pushTop()"
    >
      <img
        src="../assets/yajirushi.png"
        width="30px"
        height="30px"
      >
    </a>
    <div class="footer">
      <h3>
        ©️Seattleconsulting
      </h3>
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
      console.log("top")
      this.$SmoothScroll(
        document.querySelector('#main'),
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
  text-align: center;
  background: linear-gradient(#80e1f7, #06c1e6);
}

.footer {
  position: relative;
  z-index: 500;
  bottom: 10px;

  /* left: 46%; */
  color: #fff;
  text-shadow: #fff;
}

.footerYajirushi {
  position: relative;
  z-index: 600;

  /* left: 50%; */
  top: -15px;
}

h3 {
  margin: 0;
}

</style>
