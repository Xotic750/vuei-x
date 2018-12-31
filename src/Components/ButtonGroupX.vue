<template>
  <div
    class="vuix vuix-button-group"
    data-wrapper-only="true"
    :data-disabled="isDisabled"
    v-bind="$attrs"
  >
    <slot></slot>
  </div>
</template>

<script>
const NAME = 'ButtonGroupX';
const BUTTON_NODE_NAME = 'BUTTON';

export default {
  name: NAME,

  props: {
    disabled: {
      default: false,
      type: Boolean,
    },
  },

  data() {
    return {
      disable: false,
    };
  },

  computed: {
    isDisabled() {
      return Boolean(this.disabled || this.disable);
    },
  },

  watch: {
    disabled(value) {
      this.disableButtons(value);
    },
  },

  mounted() {
    this.disableButtons(this.disabled);
  },

  methods: {
    disableButtons(state) {
      const boolState = Boolean(state);

      this.$slots.default.forEach(({componentInstance, elm}) => {
        const {classList, nodeName} = Object(elm);

        if (nodeName === BUTTON_NODE_NAME && classList.contains('vuix-button')) {
          componentInstance.disable = boolState;
        }
      });
    },
  },
};
</script>

<style lang="less">
@import '~CSS/variables.less';

div.vuix-button-group {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  outline: none;
  margin: @zero;
  border: none;
  border-color: @border-top-color @border-right-color @border-bottom-color @border-left-color;
  border-radius: @radius-default;
  font-size: @font-size-default;
  background-color: transparent;
  color: inherit;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  display: inline-flex;
  align-items: center;
  vertical-align: bottom;

  & > button.vuix-button:not(:disabled) {
    &:focus {
      z-index: 1;
    }

    &:hover {
      z-index: 2;
    }
  }

  &.vertical {
    flex-direction: column;

    & > button.vuix-button:not(.circle):not(.square):not(.right-angled) {
      &:first-of-type:not(:last-of-type) {
        border-bottom-left-radius: @zero;
        border-bottom-right-radius: @zero;
      }

      &:last-of-type:not(:first-of-type) {
        border-top-left-radius: @zero;
        border-top-right-radius: @zero;
      }

      &:not(:first-of-type):not(:last-of-type) {
        border-radius: @zero;
      }
    }
  }

  &:not(.vertical) {
    flex-direction: row;

    /* stylelint-disable-next-line no-descending-specificity */
    & > button.vuix-button:not(.circle):not(.square):not(.right-angled) {
      &:first-of-type:not(:last-of-type) {
        border-top-right-radius: @zero;
        border-bottom-right-radius: @zero;
      }

      &:last-of-type:not(:first-of-type) {
        border-top-left-radius: @zero;
        border-bottom-left-radius: @zero;
      }

      &:not(:first-of-type):not(:last-of-type) {
        border-radius: @zero;
      }
    }
  }
}
</style>
