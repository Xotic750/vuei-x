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
      :class="['primary']"
      :title="joinClasses('primary')"
      hide
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
  name: 'XButton6',

  components: {ButtonX},

  mixins: [methods],
};
</script>
