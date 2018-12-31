<template>
  <div class="container">
    <button-x
      v-for="i in [1, 2, 3]"
      :key="i"
      :class="['primary', 'center', i === 2 ? 'none' : '']"
      :title="joinClasses('primary', 'center', i === 2 ? 'hidden' : '')"
      @click="logEvent('click', $event)"
    >
      {{ i }}
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
