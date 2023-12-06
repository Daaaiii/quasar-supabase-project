<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleLogin">
      <p class="col-12 text-h5 text-center">Login</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Email" v-model="form.email" lazy-rules
          :rules="[val => (val && val.length > 0) || 'Email is required']" type="email" />
        <q-input label="Password" v-model="form.password" lazy-rules
          :rules="[val => (val && val.length > 0) || 'Password is required']" type="password"/>
        <div class="full-width q-pt-md">
          <q-btn label="Login" color="primary" class="full-width" outline rounded type="submit" />
        </div>
        <div class="full-width q-gutter-md">
          <q-btn label="Register" color="primary" class="full-width" flat rounded to="/register" />
        </div>
        <div class="full-width q-gutter-md">
          <q-btn label="Forgot Password ?" color="primary" class="full-width" flat rounded
            :to="{ name: 'forgot-password' }" />
        </div>
      </div>
    </q-form>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import useAuthUser from "src/composables/UseAuthUser";
import { useRouter } from "vue-router";
import useNotify from "src/composables/useNotify";

export default defineComponent({
  name: "LoginPage",
  setup() {
    const router = useRouter();
    const { login, isLoggedIn } = useAuthUser()
    const { notifyError, notifySuccess } = useNotify()
    const form = ref({
      email: "",
      password: "",
    });


    const handleLogin = async () => {
      try {
        await login(form.value);
        notifySuccess('Login successfully!')
        router.push({ name: "me" });
      } catch (error) {
        notifyError('');
      }
    };

    return {
      form,
      handleLogin,
    };
  },
});
</script>
