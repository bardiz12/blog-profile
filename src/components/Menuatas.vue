<template>
  <div
    v-bind:class="`menu-atas ${!$store.state.isSidebarShowed ? 'menu-atas-mini' : ''} standart-div`"
  >
    <ul class="links text-center">
      <li>
        <g-link to="/">Home</g-link>
      </li>
      <li>
        <g-link to="/blog">Blog</g-link>
      </li>
    </ul>
  </div>
</template>