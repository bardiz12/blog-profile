<template>
  <Layout>
    <v-container fluid class="pa-0 animated slideInDown">
      <div class="main-app">
        <Menuatas/>
        <div class="kiri">
          <Profile :socmed="true" />
        </div>
        <div class="kanan">
          
          <div class="content">
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