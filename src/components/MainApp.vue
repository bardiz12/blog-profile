<template>
  <Layout>
    <v-container fluid class="pa-0">
      <div class="main-app">
        <div class="kiri animated fadeInLeft">
          <Profile :socmed="true" />
        </div>
        <div class="kanan">
          <Menuatas class="animated fadeInDown" />
          <div class="content animated fadeInRight">
            <slot></slot>
          </div>
        </div>
      </div>
    </v-container>
  </Layout>
</template>

<script>
import Profile from "@/components/Profile";
import Menuatas from "@/components/Menuatas";
export default {
  components: {
    Profile,
    Menuatas
  }
};
</script>