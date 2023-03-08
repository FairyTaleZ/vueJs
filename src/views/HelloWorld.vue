<script setup>
import { ref, reactive, toRefs} from 'vue'

defineProps({
  msg: String,
})

const count = ref(0)
const formData = reactive({
  name: "这是测试对象"
})

return {
  ...toRefs(formData)
}
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>views/HelloWorld.vue</code> to test HMR
    </p>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
