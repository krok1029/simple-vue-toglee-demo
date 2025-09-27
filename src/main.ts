import { createApp } from 'vue';
import App from './App.vue';

import { Tolgee, DevTools, VueTolgee, BackendFetch } from '@tolgee/vue';
import { FormatIcu } from '@tolgee/format-icu';

import en from './locales/en/common.json';
import zhHantTW from './locales/zh-Hant-TW/common.json';

const apiUrl = import.meta.env.VITE_TOLGEE_API_URL;
const apiKey = import.meta.env.VITE_TOLGEE_API_KEY;

const tolgee = Tolgee()
  .use(DevTools())
  .use(FormatIcu())
  .use(
    BackendFetch({
      fallbackOnFail: true,
      timeout: 1500,
    })
  )
  .init({
    language: 'zh-Hant-TW',
    fallbackLanguage: ['en'],
    staticData: {
      en,
      'zh-Hant-TW': zhHantTW,
    },
    apiUrl,
    apiKey,
  });

const app = createApp(App);
app.use(VueTolgee, { tolgee });
tolgee.run();
app.mount('#app');
