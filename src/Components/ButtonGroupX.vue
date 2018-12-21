<template>
  <div
    v-if="!hide"
    class="button-group-x"
    :data-disabled="disabled"
    :data-vertical="vertical"
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
    hide: {
      default: false,
      type: Boolean,
    },
    vertical: {
      default: false,
      type: Boolean,
    },
  },

  watch: {
    disabled(value) {
      this.disable(value);
    },
  },

  mounted() {
    this.disable(this.disabled);
  },

  methods: {
    disable(state) {
      const boolState = Boolean(state);

      this.$slots.default.forEach(({componentInstance, elm}) => {
        const {classList, dataset, nodeName} = Object(elm);

        if (nodeName === BUTTON_NODE_NAME && classList.contains('button-x')) {
          componentInstance.disabled = boolState;

          if (boolState) {
            dataset.disabled = String(boolState);
          } else {
            delete dataset.disabled;
          }
        }
      });
    },
  },
};
</script>

<style lang="less">
@import '~CSS/variables.less';

div.button-group-x {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  outline: none;
  margin: @zero;
  border: none;
  border-color: @border-top-color @border-right-color @border-bottom-color @border-left-color;
  border-radius: @radius-default;
  font-size: @font-size-default;
  background-color: inherit;
  color: inherit;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  display: inline-flex;
  align-items: center;
  vertical-align: bottom;

  & > button.button-x:not(:disabled):not([data-disabled]) {
    &:focus {
      z-index: 1;
    }

    &:hover {
      z-index: 2;
    }
  }

  &[data-vertical] {
    flex-direction: column;

    & > button.button-x:not(.circle):not(.square):not(.right-angled) {
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

  &:not([data-vertical]) {
    flex-direction: row;

    /* stylelint-disable-next-line no-descending-specificity */
    & > button.button-x:not(.circle):not(.square):not(.right-angled) {
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

  each(@selectors-color, {
    // noinspection LessUnresolvedVariable
    &.@{value} {
      background-color: @@value;
    }
  });
}
</style>
