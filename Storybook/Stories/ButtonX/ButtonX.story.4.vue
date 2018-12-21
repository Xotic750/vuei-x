<template>
  <div class="container">
    <template v-for="button in buttons">
      <button-x
        :key="button.label"
        :class="button.class"
        :title="button.class"
        :type="button.type"
        @click="onClick"
      >
        <icon-x :class="button.icon.class"></icon-x>
        <span class="space-before">
          {{ button.label }}
        </span>
      </button-x>
      {{ }}
    </template>
  </div>
</template>

<script>
import methods from 'Stories/methods';
import {ButtonX, IconX} from 'SRC';

export default {
  name: 'XButton4',

  components: {ButtonX, IconX},

  mixins: [methods],

  data() {
    return {
      buttons: [
        {
          class: ['block', 'primary'],
          icon: {
            class: ['fugue-icon', 'fugue-tick'],
          },
          label: 'Yes',
          type: 'button',
        },
        {
          class: ['block', 'secondary', ' pill'],
          icon: {
            class: ['fugue-icon', 'fugue-cross'],
          },
          label: 'No',
          type: 'button',
        },
        {
          class: ['block', 'info', 'dashed', 'right-angled'],
          icon: {
            class: ['fugue-icon', 'fugue-question'],
          },
          label: 'Maybe',
          type: 'button',
        },
      ],
    };
  },
};
</script>
