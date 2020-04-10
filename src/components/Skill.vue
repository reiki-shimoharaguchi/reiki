<template>
  <div>
    <div
      v-if="skill"
    >
      <div><p>aｃｃｃｃ</p></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skill",
  props: {
    skill:{
      type: Boolean,
      default: false,
    }
  }
};
</script>

<style>
.shape {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  /* background-color: ; */
}
</style>
