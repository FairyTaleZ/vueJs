<script>
import { ref, reactive, toRefs } from 'vue'
export default {
  setup(){
    const count = ref(0);
    const formData = reactive({
      user: {
        name: '张三',
        age: '44',
        sex: '女'
      }
    })

    console.log(formData.user.name)
    console.log(count.value)
    return {
      formData,
      count
    }
  }
}
  
</script>

<template>
  <div class="card">
  {{formData.user.name}}
  {{count}}
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
