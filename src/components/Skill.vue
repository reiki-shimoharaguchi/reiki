<template>
  <div class="skillSection">
    <div class="skillTitle">
      <h1>Skill</h1>
    </div>
    <div class="skill">
      <h2>SKILLSKILLSKILLSKILLSKILLSKILLSKILLSKILL</h2>
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
.skillSection {
  position: relative;
  text-align: center;
  z-index: 10;
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  background-color: whitesmoke;
}

.skillTitle {
  padding: 0;
  border: 0;
  margin: 0;
}

.skill {
  padding: 0;
  border: 0;
  margin: 0;
}
</style>
