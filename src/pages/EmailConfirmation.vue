<template>
  <q-page padding>
    <p class="text-body1">Thanks for registering!</p>
    <p class="text-body1">
      Please confirme your email to finish registering:<strong>{{ $route.query.email }}</strong>
    </p>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "EmailConfirmation",
});
</script>
