<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
  <VApp>
    <VMain class="layout-page-content wrapper">
      <v-row>
        <v-col cols="4" class="border-e">
          <nav>
            <v-list>
              <v-list-item>
                <RouterLink to="/" class="me-3">
                  Home
                </RouterLink>
              </v-list-item>
              <v-list-item>
                <RouterLink to="/about">About</RouterLink>
              </v-list-item>
            </v-list>
          </nav>
        </v-col>

        <v-col cols="8">
          <p class="mb-6">
            You can find navigation drawer toggler button in about page. Do not open devtool to see the issue.
          </p>

          <!-- 👉 Pages -->
          <RouterView v-slot="{ Component }">
            <v-slide-x-reverse-transition hide-on-leave>
              <Component :is="Component" />
            </v-slide-x-reverse-transition>
          </RouterView>
        </v-col>
      </v-row>

    </VMain>
  </VApp>
</template>

<style lang="scss">
.layout-page-content {
  margin-inline: auto;
  width: 1450px;
}
</style>