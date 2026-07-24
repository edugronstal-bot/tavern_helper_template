<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from './store';
import CoreStats from './components/CoreStats.vue';
import WingStatus from './components/WingStatus.vue';
import BattlefieldCard from './components/BattlefieldCard.vue';
import AbilityTags from './components/AbilityTags.vue';

const store = useDataStore();

const form = computed(() => store.stat_data?.莉莉温娜?.当前形态 ?? '加载中...');
</script>

<template>
  <div class="stat-dashboard">
    <div class="stat-header">
      <span class="title">莉莉温娜 · 星喰的魔神</span>
      <span class="form-badge">{{ form }}</span>
    </div>

    <div class="stat-grid">
      <CoreStats />
      <WingStatus />
      <BattlefieldCard />
    </div>

    <AbilityTags />
  </div>
</template>
