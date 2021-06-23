<template>
<div>
  <b-navbar toggleable="lg" type="dark" variant="dark">
    <b-navbar-brand href="/">GAME</b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item router-link to="/">Home</b-nav-item>
        <b-nav-item router-link to="/games" >Game</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
                <b-nav-item href="/keranjang" >
                Keranjang
                <b-icon-bag></b-icon-bag>
        <span class="badge badge-success ml-2">0</span>
      </b-nav-item>
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div></template>

<script>
export default {
name:'Navbar'
}
</script>

<style>

</style>