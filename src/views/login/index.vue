<template>
  <div class="login-page">
    <div class="login-overfly">
      <!-- <div class="login-left"></div> -->
      <div class="login-form">
        <div class="title">卷王培养计划</div>
        <el-form :model="form" ref="formRef" :rules="rules">
          <el-form-item prop="userName">
            <el-input
              v-model="form.userName"
              :prefix-icon="User"
              placeholder="用户名：admin"
            />
          </el-form-item>
          <el-form-item prop="password">
            <el-input
              v-model="form.password"
              type="password"
              show-password
              :prefix-icon="Lock"
              placeholder="密码：123456"
            />
          </el-form-item>
        </el-form>
        <div class="login-btn">
          <el-button :icon="CircleClose" round @click="reset">重置</el-button>
          <el-button type="primary" :icon="UserFilled" round @click="login"
            >登录</el-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { CircleClose, UserFilled, User, Lock } from "@element-plus/icons-vue"
import type { FormInstance, FormRules } from "element-plus"
const router = useRouter()

const form = reactive({
  userName: "",
  password: "",
})

const formRef = ref<FormInstance>()
const rules = reactive<FormRules>({
  userName: [
    { required: true, message: "请输入账号", trigger: ["blur", "change"] },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: ["blur", "change"] },
  ],
})
const reset = () => {
  formRef.value?.resetFields()
}
const login = () => {
  formRef.value?.validate((val) => {
    if (val && form.userName == "admin" && form.password == "123456") {
      localStorage.setItem("token", "123456")
      ElNotification({
        title: "登录成功",
        message: "你好~，狗蛋，欢迎进入卷王培训计划系统",
        type: "success",
      })

      router.push("/home/index")
    } else {
      ElNotification({
        message: "账号/密码错误",
        type: "error",
      })
    }
  })
}
</script>

<style lang="scss" scoped>
.login-page {
  width: 100%;
  height: 100vh;
  background-image: url("../../assets/images/login-bg.jpg");
  background-size: cover;
  .login-overfly {
    width: 97%;
    height: 96%;
    position: relative;
    left: 1.5%;
    top: 2%;
    background-color: rgba(255, 255, 255, 0.6);
    border-radius: 10px;
    @apply f-item;
    justify-content: space-around;
    .login-left {
      width: 800px;
      height: 532px;
      background-image: url("../../assets/images/login_left.png");
      background-size: cover;
    }
    .login-form {
      width: 420px;
      padding: 50px 40px 45px;
      background-color: #fff;
      border-radius: 10px;
      box-shadow: rgba(0, 0, 0, 0.1) 0 0 16px 2px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .title {
        font-size: 42px;
        font-weight: bold;
        color: #34495e;
        text-align: center;
        margin-bottom: 45px;
      }
    }
    .login-btn {
      @apply flex;
      justify-content: space-between;
      :deep .el-button {
        width: 45%;
        padding: 20px 15px;
      }
    }
  }
}
:deep .el-input__inner {
  --el-input-inner-height: 40px;
}
:deep .el-form-item {
  margin-bottom: 40px;
}

@media screen and (width<=1250px) {
  .login-left {
    display: none;
  }
}
</style>
