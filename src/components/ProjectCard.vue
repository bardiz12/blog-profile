<template>
  <div
    class="project-card"
    :style="`background: url(${data.images[0]}) no-repeat !important;background-size: auto 100% !important;background-position: center !important; `"
  >
    <div class="project-card--summary align-center justify-center">
      <div>
        <h2 class="project-card--summary--title">{{data.title}}</h2>

        <span
          class="text-center project-card--summary--subtitle d-lg-block d-md-block d-none"
        >{{data.details.substring(0,100) + (data.details.length > 100 ? ".." : "")}}</span>

        <div class="project-card--category-container">
          <span :class="data.color">
            <i :class="data.icon"></i>
            {{data.category}}
          </span>
        </div>
        <div class="project-card--action">
          <a v-if="data.links.github !== null" :href="data.links.github" target="_blank" >
            <i class="fab fa-github fa-2x"></i>
          </a>
          <a v-if="data.links.url !== null" :href="data.links.url" target="_blank" >
            <i class="fa fa-globe fa-2x"></i>
          </a>
          <a href="#" @click="toggleDetail">
            <i class="fa fa-book-open fa-2x"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["summary", "data","index"],
  methods: {
    toggleDetail(event) {
        this.$store.commit("choseproject",{chosenProject:this.index,isDialogShowed:true});
    }
  }
};
</script>

<style lang="scss">
.project-card {

  transition: all 0.25s ease-in-out;
  display: block;
  margin: auto;

  width: 100%;
  height: 400px;
  font-size: 100%;
  color: #fff;
  &--category-container {
    margin-top: 20px;
    display: block;
    & span {
      &.blue {
        background: rgb(0, 89, 255);
      }
      &.green {
        background: rgb(0, 255, 76);
      }
      padding: 5px 10px;
      width: auto;
    }
  }
  &--summary {
    transition: all 0.25s ease-in-out;
    background: rgba(0, 0, 0, 0.425);
    display: flex;
    margin: auto !important;
    height: 100%;
    &:hover {
      background: rgba(0, 0, 0, 0.856);
    }
    &--title {
      display: block;
      padding-right: 50px;
      padding-left: 50px;
      padding-bottom: 5px;
      text-align: center;
    }
    &--subtitle {
      margin-top: 10px;
      display: block;
      font-weight: 100;
      padding: 0px 50px;
    }
  }
  &:hover {
    //width: 100%;
    transform: scale(1.05);
    font-size: 100%;
    z-index: 1;
    & .project-card--summary {
    }
    & ~ div {
      z-index: 99;
    }
  }
  &--action {
    position: relative;
    right: 0px;
    margin-top: 20px;
    & a {
      color: #fff !important;
      padding: 10px;
      &:hover {
        color: #ddd !important;
      }
    }
  }
}
</style>