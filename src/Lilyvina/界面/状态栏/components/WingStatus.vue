<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const wing = computed(() => store.stat_data?.翅膀);
const state = computed(() => wing.value?.翅膀状态 ?? '-');
const type = computed(() => wing.value?.翅膀类型 ?? '-');
const spread = computed(() => wing.value?.翅膀展开度 ?? 0);
const scale = computed(() => wing.value?.翅膀规模 ?? '-');
const flight = computed(() => wing.value?.翅膀飞行能力 ?? '-');
const action = computed(() => wing.value?.翅膀当前动作 ?? '-');
const pressure = computed(() => wing.value?.翅膀压迫感 ?? 0);
const coverage = computed(() => wing.value?.翅膀遮蔽范围 ?? 0);
const sync = computed(() => wing.value?.翅膀与核心同步率 ?? 0);
const active = computed(() => state.value !== '未显现' && state.value !== '-');

const iconClass = computed(() => {
  if (!active.value) return 'fa-solid fa-feather';
  if (state.value === '宇宙级翼形态') return 'fa-solid fa-galaxy cosmic';
  return 'fa-solid fa-feather-pointed active';
});
</script>

<template>
  <div class="stat-card">
    <div class="card-title">
      <i :class="iconClass"></i> 翅膀
    </div>

    <div class="wing-visual">
      <i :class="iconClass" class="wing-icon"></i>
      <div class="wing-info">
        <div class="stat-row">
          <span class="label">状态</span>
          <span class="value highlight">{{ state }}</span>
        </div>
        <div class="stat-row">
          <span class="label">类型</span>
          <span class="value">{{ type }}</span>
        </div>
      </div>
    </div>

    <div class="stat-row">
      <span class="label">展开度</span>
      <span class="value">{{ spread }}%</span>
    </div>
    <div class="progress-bar"><div class="fill wing" :style="{ width: spread + '%' }"></div></div>

    <div class="stat-row">
      <span class="label">规模</span>
      <span class="value">{{ scale }}</span>
    </div>

    <div class="stat-row">
      <span class="label">飞行</span>
      <span class="value">{{ flight }}</span>
    </div>

    <div class="stat-row">
      <span class="label">动作</span>
      <span class="value">{{ action }}</span>
    </div>

    <div class="stat-row">
      <span class="label">压迫感</span>
      <span class="value">{{ pressure }}%</span>
    </div>

    <div class="stat-row">
      <span class="label">遮蔽范围</span>
      <span class="value">{{ coverage }}%</span>
    </div>

    <div class="stat-row">
      <span class="label">核心同步率</span>
      <span class="value">{{ sync }}%</span>
    </div>
    <div class="progress-bar"><div class="fill wing" :style="{ width: sync + '%' }"></div></div>
  </div>
</template>
