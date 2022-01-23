<template>
  <div v-for="(item, index) in list" :key="index">
    {{ item.name }}
  </div>
  <el-button type="primary" @click="fecth">请求</el-button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import service from "./uitls/requset";
const list = ref([]);

const fecth = async () => {
  const res = await service.get("/api/list");
  list.value = res.data;
};
</script>

<style>
:root {
  --el-color-primary: #08c881;
  --el-color-success: #67c23a;
  --el-color-warning: #e6a23c;
  --el-color-danger: #f56c6c;
  --el-color-error: #f56c6c;
  --el-color-info: #909399;
}
</style>
