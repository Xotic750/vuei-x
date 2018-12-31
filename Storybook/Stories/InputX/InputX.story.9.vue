<template>
  <div class="container">
    <input-x
      v-model="model"
      :clear="true"
      placeholder="Type text here."
      @input.native="logEvent('input.native', $event)"
      @input.exact="logEvent('input', $event)"
      @clear="logEvent('clear', $event)"
    >
    </input-x>
  </div>
</template>

<script>
import methods from 'Stories/methods';
import {InputX} from 'SRC';

export default {
  name: 'InputX9',

  components: {InputX},

  mixins: [methods],

  data() {
    return {
      model: '',
    };
  },

  watch: {
    model() {
      logger.info('MODEL', this.model);
    },
  },
};
</script>
