<template>
  <MainApp :fullContent="true">
    <template>
      <v-row justify="center">
        <v-dialog
          v-model="$store.state.isDialogShowed"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <v-card v-if="projectsData !== null">
            <v-toolbar>
              <v-btn icon @click="$store.state.isDialogShowed = false">
                <v-icon>mdi-close</v-icon>
              </v-btn>
              <v-toolbar-title>{{projectsData.datas[$store.state.chosenProject].title}}</v-toolbar-title>
              <v-spacer></v-spacer>
            </v-toolbar>
            <v-container>
              <v-row v-if="projectsData !== null">
                <v-col md="8" sm="12" xs="12" offset-md="2">
                  <h2>Projects's Images</h2>
                  <v-carousel hide-delimiters height="auto">
                    <v-carousel-item
                      v-for="(item,i) in projectsData.datas[$store.state.chosenProject].images"
                      :key="i"
                      :src="item"
                    ></v-carousel-item>
                  </v-carousel>
                </v-col>
                <v-col md="12" lg="12">
                  <h2>Description</h2>
                  <p class="text-justify">{{projectsData.datas[$store.state.chosenProject].details}}</p>
                  <h2>Tech's Talk</h2>
                  <p class="text-justify">{{projectsData.datas[$store.state.chosenProject].tech}}</p>
                  <template v-if="projectsData.datas[$store.state.chosenProject].client !== null">
                    <h2>Client</h2>
                    <p>{{projectsData.datas[$store.state.chosenProject].client}}</p>
                  </template>
                </v-col>
                
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>
    </template>

    <template v-if="$store.state.isDialogShowed">
      <v-row justify="center">
        <v-dialog
          v-model="$store.state.isDialogShowed"
          :fullscreen="$vuetify.breakpoint.xs"
          hide-overlay
          transition="dialog-bottom-transition"
          scrollable
          max-height="300px"
        ></v-dialog>
      </v-row>
    </template>
    <v-container>
      <v-row>
        <v-col cols="12" md="12" lg="12" sm="12" class="text-center">
          <h1>
            <i class="fa fa-code"></i>
            Projects
          </h1>
          <hr
            style="width:50%;display:inline-block;margin-bottom:20px;margin-top:-20px;"
            align="center"
          />
          <br />Some projects that i build
        </v-col>
        <template v-if="projectsData !== null">
          <template v-for="(item,index) in projectsData.datas">
            <v-col
              v-bind:key="index"
              cols="12"
              sm="12"
              :md="6"
              :lg="$store.state.isSidebarShowed? 6 : projectsData.colsSize[index]"
              class="project-card-container animated fadeInUp"
            >
              <ProjectCard class="text-center" :data="item" :index="index" />
            </v-col>
          </template>
          <!-- <v-col
                cols="12"
                sm="12"
                :md="6"
                :lg="6"
                class="project-card-container animated fadeInUp"
              >
                <ProjectCard class="text-center" :data="{title:'Open Source Projects'}" :index="index" />
          </v-col>-->
        </template>
      </v-row>
    </v-container>
  </MainApp>
</template>
<style lang="scss" scoped>
.menu-atas {
  //margin-top: -100px;
  &:hover {
    //margin-top:0px;
  }
}
.project-card-container:hover {
  z-index: 9;
  font-family: "Questrial", sans-serif;
  transition: all 0.25s ease-in-out;
}
</style>

<script>
import ProjectsData from "@/data/projectsData.js";
import ProjectCard from "@/components/ProjectCard";
import MainApp from "@/components/MainApp";
export default {
  metaInfo: {
    title: "Projects"
  },
  data: () => {
    return {
      projectsData: null,
      dialog: false,
      chosen: 0
    };
  },
  mounted() {
    if (this.$store.state.isSidebarShowed) {
      this.$store.commit("togglesidebar");
    }
    this.projectsData = ProjectsData;
  },
  methods: {
    setDialog(val) {
      this.dialog = val;
    },
    setChosen(val) {
      this.chosen = val;
    }
  },
  components: {
    MainApp,
    ProjectCard
  },
  destroyed() {
    //this.$store.commit("togglesidebar");
  }
};
</script>