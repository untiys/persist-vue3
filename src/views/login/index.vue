<template>
  <div>登录页</div>
</template>

<script setup lang="ts">
import axios from "axios"
import { useMenuList } from "@/pinia/modules/menuList"
const router = useRouter()

router.push("/layout")
</script>

<style lang="scss" scoped></style>
