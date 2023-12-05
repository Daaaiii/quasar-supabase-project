<template>
  <q-page padding>
    <q-form class="row justify-center" @submit.prevent="handleRegister">
      <p class="col-12 text-h5 text-center">Register</p>
      <div class="col-md-4 col-sm-6 col-xs-10 q-gutter-y-md">
        <q-input label="Name" v-model="form.name" />
        <q-input label="Email" v-model="form.email" />
        <q-input label="Password" v-model="form.password" />
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
import { defineComponent, ref } from "vue";

import { useRouter } from "vue-router";

export default defineComponent({
  name: "RegisterPage",
  setup() {
    const router = useRouter();
    const { register } = useAuthUser();

    const form = ref({
      name: "",
      email: "",
      password: "",
    });

    const handleRegister = async () => {
      try {
        await register(form.value)
        router.push({
          name: 'email-confirmation',
          query: { email: form.value.email }
        })
      } catch (error) {
        alert(error.message)
      }
    }

    return {
      form,
      handleRegister,
    };
  },
});
</script>
