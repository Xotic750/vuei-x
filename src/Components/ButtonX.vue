<template>
  <button
    v-if="!hide"
    class="button-x"
    @click="onClick"
  >
    <slot></slot>
  </button>
</template>

<script>
const NAME = 'ButtonX';
const EMPTY_STRING = '';
const TABINDEX_ATTRIBUTE = 'tabindex';

export default {
  name: NAME,

  props: {
    hide: {
      default: false,
      type: Boolean,
    },
  },

  data() {
    return {
      disabled: false,
      oldTabindex: null,
    };
  },

  watch: {
    disabled(value, oldValue) {
      if (value === true && oldValue === false) {
        const {$el} = this;

        this.oldTabindex = $el.getAttribute(TABINDEX_ATTRIBUTE);
        $el.setAttribute(TABINDEX_ATTRIBUTE, -1);
      } else if (value === false && oldValue === true) {
        const {$el, oldTabindex} = this;

        if (oldTabindex === null || oldTabindex === EMPTY_STRING) {
          $el.removeAttribute(TABINDEX_ATTRIBUTE);
        } else {
          $el.setAttribute(TABINDEX_ATTRIBUTE, oldTabindex);
        }

        this.oldTabindex = null;
      }
    },
  },

  methods: {
    onClick(event) {
      if (this.disabled) {
        event.preventDefault();
      } else {
        this.$el.focus();
        this.$emit('click', event);
      }
    },
  },
};
</script>

<style lang="less">
@import '~CSS/variables.less';

button.button-x {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  outline: none;
  margin: @zero;
  border-style: solid;
  border-width: @border-width;
  border-color: @border-top-color @border-right-color @border-bottom-color @border-left-color;
  border-radius: @radius-default;
  position: relative;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  display: inline-flex;
  vertical-align: middle;
  align-items: center;
  justify-content: center;
  height: @height-default;
  background-color: inherit;
  color: inherit;
  font-size: @font-size-default;
  cursor: pointer;
  transition: @transition-fast border-color, @transition-slow box-shadow;

  &::-moz-focus-inner {
    border: none;
  }

  each(@selectors-border-style, {
    // noinspection LessUnresolvedVariable
    &.@{value} {
      border-style: @value;
    }
  });

  &.borderless {
    border: none;
  }

  &.block {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    display: flex;
    width: @full;

    & + & {
      margin-top: @margin-button-block;
    }
  }

  &:disabled,
  &[data-disabled] {
    opacity: @opacity-disabled;
    cursor: default;
  }

  &:not(.circle):not(.square) {
    padding: @padding @font-size-small;

    each(@selectors-size, {
      // noinspection LessUnresolvedVariable
      &.@{value} {
        @size: 'font-size-@{value}';
        @height: 'height-@{value}';

        font-size: @@size;
        height: @@height;

        &:not(.right-angled):not(.pill) {
          @radius: 'radius-@{value}';

          border-radius: @@radius;
        }
      }
    });
  }

  &.right-angled {
    border-radius: @zero;
  }

  &.circle,
  &.pill {
    border-radius: @height-default-half;
  }

  &.circle,
  &.square {
    padding: @zero;
    height: @height-default;
    width: @height-default;
    font-size: @zero;
  }

  &.circle {
    each(@selectors-size, {
      // noinspection LessUnresolvedVariable
      &.@{value} {
        @radius: 'height-@{value}-half';
        @size: 'height-@{value}';

        border-radius: @@radius;
        height: @@size;
        width: @@size;
      }
    });
  }

  &.square {
    border-radius: @zero;

    each(@selectors-size, {
      // noinspection LessUnresolvedVariable
      &.@{value} {
        @size: 'height-@{value}';

        height: @@size;
        width: @@size;
      }
    });
  }

  &.pill {
    each(@selectors-size, {
      // noinspection LessUnresolvedVariable
      &.@{value} {
        @radius: 'height-@{value}-half';
        @height: 'height-@{value}';

        border-radius: @@radius;
        height: @@height;
      }
    });
  }

  each(@selectors-color, {
    // noinspection LessUnresolvedVariable
    &.@{value}:not(:active),
    &.@{value}:disabled,
    &.@{value}[data-disabled] {
      background-color: @@value;
      color: contrast(@@value);
    }
  });

  &:not(:disabled):not([data-disabled]) {
    each(@selectors-mouse, {
      // noinspection LessUnresolvedVariable
      &:@{value} {
        @color: 'shadow-@{value}-color';

        box-shadow: @zero @zero @zero @shadow-width @@color;
      }
    });

    &:active {
      & > * {
        position: relative;
      }

      &:not(.borderless) {
        border-color: @border-bottom-color @border-left-color @border-top-color @border-right-color;
      }

      each(@selectors-color, {
        // noinspection LessUnresolvedVariable
        &.@{value} {
          background-color: darken(@@value, @color-darken-percentage);
          color: contrast(@@value);
        }
      });
    }
  }
}
</style>
