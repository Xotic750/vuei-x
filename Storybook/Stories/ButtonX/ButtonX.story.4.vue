<template>
  <div class="container">
    <template v-for="(button, i) in buttons">
      <button-x
        :key="i"
        :class="button.class"
        :title="[...button.class, button.justify]"
        :type="button.type"
        :justify="button.justify"
        @click="logEvent('click', $event)"
      >
        <icon-x :class="button.icon.class"></icon-x>
        <span class="space-before">
          {{ button.label }}
        </span>
      </button-x>
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
          class: ['block', 'secondary', 'pill'],
          icon: {
            class: ['fugue-icon', 'fugue-cross'],
          },
          label: 'No',
          type: 'button',
        },
        {
          class: ['block', 'primary', 'left'],
          icon: {
            class: ['fugue-icon', 'fugue-tick'],
          },
          label: 'Yes',
          type: 'button',
        },
        {
          class: ['block', 'secondary', 'pill', 'center'],
          icon: {
            class: ['fugue-icon', 'fugue-cross'],
          },
          label: 'No',
          type: 'button',
        },
        {
          class: ['block', 'info', 'dashed', 'right-angled', 'right'],
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
