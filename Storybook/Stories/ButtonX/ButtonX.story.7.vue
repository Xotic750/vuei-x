<template>
  <div class="container">
    <button-x
      :class="['primary']"
      :title="joinClasses('primary')"
      @click="onClick"
    >
      {{ 1 }}
    </button-x>
    <button-x
      :class="['primary', 'hidden']"
      :title="joinClasses('primary', 'hidden')"
      @click="onClick"
    >
      {{ 2 }}
    </button-x>
    <button-x
      :class="['primary']"
      :title="joinClasses('primary')"
      @click="onClick"
    >
      {{ 3 }}
    </button-x>
  </div>
</template>

<script>
import methods from 'Stories/methods';
import {ButtonX} from 'SRC';

export default {
  name: 'XButton7',

  components: {ButtonX},

  mixins: [methods],
};
</script>
