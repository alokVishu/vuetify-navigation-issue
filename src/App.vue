<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { RouterLink, RouterView } from 'vue-router';

const { locale } = useI18n({ useScope: 'global' })
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
                {{ $t('message.home') }}
              </RouterLink>
            </v-list-item>
            <v-list-item>
              <RouterLink to="/about">{{ $t('message.about') }}</RouterLink>
            </v-list-item>

            <v-list-item>
              <v-menu>
                <template v-slot:activator="{ props }">
                  <v-btn
                    color="primary"
                    v-bind="props"
                  >
                    Translate
                  </v-btn>
                </template>

                <v-list>
                  <v-list-item @click="locale = 'en'">EN</v-list-item>
                  <v-list-item @click="locale = 'ar'">AR</v-list-item>
                </v-list>
              </v-menu>
            </v-list-item>
          </v-list>
        </nav>
        </v-col>

        <v-col cols="8">
          {{$t('message.msg')}}   

            <!-- 👉 Pages -->
          <RouterView v-slot="{ Component }">
            <Transition
              name="slide-x-reverse-transition"
              mode="out-in"
            >
              <Component :is="Component" />
            </Transition>
          </RouterView>
        </v-col>
      </v-row>
        
    </VMain>
  </VApp>
</template>

<style lang="scss">
.layout-page-content{
  margin-inline: auto;
  width: 1450px;
}

</style>
