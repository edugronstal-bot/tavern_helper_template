<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const data = computed(() => store.stat_data?.莉莉温娜);
const scale = computed(() => data.value?.身体规模 ?? '-');
const core = computed(() => data.value?.魔神核心完整度 ?? 0);
const stone = computed(() => data.value?.虚无魔石融合度 ?? 0);
const sword = computed(() => data.value?.圣剑吸收度 ?? 0);
const damage = computed(() => data.value?.核心受损度 ?? 0);
</script>

<template>
  <div class="stat-card">
    <div class="card-title">
      <i class="fa-solid fa-gem"></i> 魔神核心
    </div>

    <div class="stat-row">
      <span class="label">身体规模</span>
      <span class="value highlight">{{ scale }}</span>
    </div>

    <div class="stat-row">
      <span class="label">核心完整度</span>
      <span class="value">{{ core }}%</span>
    </div>
    <div class="progress-bar"><div class="fill core" :style="{ width: core + '%' }"></div></div>

    <div class="stat-row">
      <span class="label">虚无魔石</span>
      <span class="value">{{ stone }}%</span>
    </div>
    <div class="progress-bar"><div class="fill stone" :style="{ width: stone + '%' }"></div></div>

    <div class="stat-row">
      <span class="label">圣剑吸收</span>
      <span class="value">{{ sword }}%</span>
    </div>
    <div class="progress-bar"><div class="fill sword" :style="{ width: sword + '%' }"></div></div>

    <div class="stat-row">
      <span class="label">核心受损</span>
      <span class="value" :style="{ color: damage > 30 ? 'var(--danger)' : 'var(--text-primary)' }">{{ damage }}%</span>
    </div>
    <div class="progress-bar"><div class="fill damage" :style="{ width: damage + '%' }"></div></div>
  </div>
</template>
