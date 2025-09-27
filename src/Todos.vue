<template>
  <div class="background-wrapper">
    <div class="example">
      <Navbar>
        <div>
          <a href="/translation-methods">
            <T keyName="menu-item-translation-methods" />
          </a>
        </div>
      </Navbar>

      <header>
        <img src="/img/appLogo.svg" />
        <h1 class="header__title">
          <T keyName="app-title" />
        </h1>
      </header>
      <section class="items">
        <form class="items__new-item" @submit.prevent="onAdd">
          <input
            v-model="newItemValue"
            :placeholder="
              $t({
                key: 'add-item-input-placeholder',
              })
            "
          />
          <button type="submit" :disabled="!newItemValue" class="button">
            <img src="/img/iconAdd.svg" />
            <T keyName="add-item-add-button" />
          </button>
        </form>
        <div class="items__list">
          <div v-for="(item, i) in items" :key="i" class="item">
            <div class="item__text">{{ item }}</div>
            <button @click="onDelete(i)">
              <T keyName="delete-item-button" />
            </button>
          </div>
        </div>
        <div class="items__buttons">
          <button class="button" @click="onAction('share')">
            <img src="/img/iconShare.svg" />
            <T keyName="share-button" />
          </button>
          <button class="button button--secondary" @click="onAction('email')">
            <img src="/img/iconMail.svg" />
            <T keyName="send-via-email" />
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { T, useTranslate } from '@tolgee/vue';
import Navbar from './components/Navbar.vue';

const { t: $t } = useTranslate();

const newItemValue = ref('');
const items = ref<string[]>([]);

const STORAGE_KEY = 'tolgee-example-app-items';

function loadItems() {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      items.value = JSON.parse(stored);
    } else {
      items.value = ['Passport', 'Maps and directions', 'Travel guide'];
    }
  } catch (e) {
    items.value = ['Passport', 'Maps and directions', 'Travel guide'];
    localStorage.removeItem(STORAGE_KEY);
  }
}

function updateLocalStorage() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(items.value));
}

function onAdd() {
  if (newItemValue.value) {
    items.value.push(newItemValue.value);
    updateLocalStorage();
    newItemValue.value = '';
  }
}

function onDelete(index: number) {
  items.value.splice(index, 1);
  updateLocalStorage();
}

function onAction(action: string) {
  alert('action: ' + action);
}

onMounted(loadItems);
</script>