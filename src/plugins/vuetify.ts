import { useI18n } from 'vue-i18n'
import { createVuetify } from 'vuetify';
import { createVueI18nAdapter } from 'vuetify/locale/adapters/vue-i18n'
import "./vuetify.scss";
import i18n from '@/plugins/i18n'

export default createVuetify({
  locale: createVueI18nAdapter({ i18n, useI18n }),
})