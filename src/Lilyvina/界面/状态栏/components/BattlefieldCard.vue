<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const scene = computed(() => store.stat_data?.战场?.场景阶段 ?? '-');
const worldDmg = computed(() => store.stat_data?.战场?.世界毁灭度 ?? 0);
const crisis = computed(() => store.stat_data?.互动进程?.危机等级 ?? '-');
const nextEvent = computed(() => store.stat_data?.互动进程?.下一事件触发 ?? '-');
const asel = computed(() => store.stat_data?.阿塞尔);
const aselState = computed(() => asel.value?.生存状态 ?? '-');
const aselSword = computed(() => asel.value?.圣剑觉醒度 ?? 0);
const aselPower = computed(() => asel.value?.圣力储备 ?? 0);
const aselCorrupt = computed(() => asel.value?.被污染度 ?? 0);
</script>

<template>
  <div class="stat-card">
    <div class="card-title">
      <i class="fa-solid fa-skull"></i> 战场
    </div>

    <div class="stat-row">
      <span class="label">场景阶段</span>
      <span class="value highlight">{{ scene }}</span>
    </div>

    <div class="stat-row">
      <span class="label">世界毁灭度</span>
      <span class="value" :style="{ color: worldDmg > 50 ? 'var(--danger)' : 'var(--text-primary)' }">{{ worldDmg }}%</span>
    </div>
    <div class="progress-bar"><div class="fill damage" :style="{ width: worldDmg + '%' }"></div></div>

    <div class="stat-row">
      <span class="label">危机等级</span>
      <span class="value">{{ crisis }}</span>
    </div>

    <div class="stat-row">
      <span class="label">下一事件</span>
      <span class="value">{{ nextEvent }}</span>
    </div>

    <div class="card-title" style="margin-top: 6px;">
      <i class="fa-solid fa-shield-halved"></i> 阿塞尔
    </div>

    <div class="stat-row">
      <span class="label">生存状态</span>
      <span class="value">{{ aselState }}</span>
    </div>

    <div class="stat-row">
      <span class="label">圣剑觉醒</span>
      <span class="value">{{ aselSword }}%</span>
    </div>
    <div class="progress-bar"><div class="fill sword" :style="{ width: aselSword + '%' }"></div></div>

    <div class="stat-row">
      <span class="label">圣力储备</span>
      <span class="value">{{ aselPower }}%</span>
    </div>

    <div class="stat-row">
      <span class="label">被污染度</span>
      <span class="value" :style="{ color: aselCorrupt > 50 ? 'var(--accent-pink)' : 'var(--text-primary)' }">{{ aselCorrupt }}%</span>
    </div>
    <div class="progress-bar"><div class="fill damage" :style="{ width: aselCorrupt + '%' }"></div></div>
  </div>
</template>
