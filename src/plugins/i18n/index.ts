import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    message: {
      home: 'Home',
      about:'About',
      the_world: 'the world',
      dio: 'DIO:',
      linked: '@:message.dio @:message.the_world !!!!',
      msg:'If you are using the vue-i18n library, you can very easily integrate it with Vuetify.'
    }
  },
  ar: {
    message: {
      home: 'مسكن',
      about:'حول',
      the_world: 'العالم',
      dio: 'ديور:',
      linked: 'العالم',
      msg:'إذا كنت تستخدم مكتبة vue-i18n ، فيمكنك دمجها بسهولة مع Vuetify.'
    }
  }
}

export default createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
