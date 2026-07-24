<script setup lang="ts">
import { computed } from 'vue';
import { useDataStore } from '../store';

const store = useDataStore();

const abilities = computed(() => {
  const a = store.stat_data?.能力;
  if (!a) return [];

  return [
    { name: '粉雾转化', unlocked: a.粉雾转化?.已解锁 ?? false },
    { name: '魔力护膜', unlocked: a.魔力护膜?.已激活 ?? false },
    { name: '高压乳炮', unlocked: a.高压乳炮?.已解锁 ?? false },
    { name: '吞噬吸引', unlocked: a.吞噬吸引?.已解锁 ?? false },
    { name: '脐核光束', unlocked: a.脐核光束?.已解锁 ?? false },
    { name: '子嗣孕育', unlocked: a.子嗣孕育?.已解锁 ?? false },
    { name: '乳汁分身', unlocked: a.乳汁分身?.已解锁 ?? false },
    { name: '宇宙吞噬', unlocked: a.宇宙级吞噬?.已解锁 ?? false },
  ];
});
</script>

<template>
  <div class="ability-tags">
    <template v-for="a in abilities" :key="a.name">
      <span class="ability-tag" :class="a.unlocked ? 'unlocked' : 'locked'">
        <i :class="a.unlocked ? 'fa-solid fa-check' : 'fa-solid fa-lock'" style="margin-right: 3px; font-size: 9px;"></i>
        {{ a.name }}
      </span>
    </template>
  </div>
</template>
