<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Register</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">

        <q-input label="Name" v-model="form.name"  lazy-rules
          :rules="[val => (val && val.length > 0) || 'Name is required']" type="text"/>

        <q-input label="Email" v-model="form.email" lazy-rules
          :rules="[val => (val && val.length > 0) || 'Email is required']" type="email" />

        <q-input label="Password" v-model="form.password" lazy-rules
          :rules="[val => (val && val.length >= 6) || 'Password is required and minimum lenght 6']" type="password"  />

        <div class="full-width q-pt-md">
          <q-btn label="Register" color="primary" class="full-width" flat rounded type="submit" />
          <q-btn
            label="Back"
            color="dark"
            class="full-width"
            rounded
            flat
            :to="{ name: 'login' }"
          />
        </div>
      </div>
    </q-form>
  </q-page>
</template>
<script>
import useAuthUser from "src/composables/UseAuthUser";
import useNotify from "src/composables/useNotify";
import { defineComponent, ref } from "vue";

import { useRouter } from "vue-router";

export default defineComponent({
  name: "RegisterPage",
  setup() {
    const router = useRouter();
    const { register } = useAuthUser();
    const { notifyError, notifySuccess } = useNotify()

    const form = ref({
      name: "",
      email: "",
      password: "",
    });

    const handleRegister = async () => {
      try {
        await register(form.value)
        notifySuccess()
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        notifyError(error.message)
      }
    }

    return {
      form,
      handleRegister,
    };
  },
});
</script>
