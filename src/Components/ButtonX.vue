<template>
  <button
    class="vuix vuix-button"
    role="button"
    data-shapeable="true"
    data-borderable="true"
    data-colorable="true"
    data-blockable="true"
    data-focusable="true"
    data-hoverable="true"
    data-activatable="true"
    :data-disabled="isDisabled"
    :disabled="isDisabled"
    :aria-disabled="isDisabled"
    v-bind="$attrs"
    @click="onClick"
    v-on="$listeners"
  >
    <span data-justifiable="true">
      <slot></slot>
    </span>
  </button>
</template>

<script>
const NAME = 'ButtonX';

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

  methods: {
    onClick() {
      if (this.isDisabled) {
        return;
      }

      this.$el.focus();
    },
  },
};
</script>

<style lang="less">
@import '~CSS/variables.less';

button.vuix-button {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  outline: none;
  margin: @zero;
  padding: @padding @font-size-default;
  border-style: solid;
  border-width: @border-width;
  border-color: @border-top-color @border-right-color @border-bottom-color @border-left-color;
  border-radius: @radius-default;
  position: relative;
  vertical-align: middle;
  height: @height-default;
  background-color: transparent;
  color: inherit;
  font-size: @font-size-default;
  cursor: pointer;
  transition: @transition-fast border-color, @transition-slow box-shadow;

  &::-moz-focus-inner {
    border: none;
  }

  each(@selectors-size, {
    // noinspection LessUnresolvedVariable
    &.@{value} {
      @size: 'font-size-@{value}';
      @height: 'height-@{value}';

      font-size: @@size;
      height: @@height;
    }
  });

  & > span[data-justifiable] {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    outline: none;
    margin: @zero;
    padding: @zero;
    border: none;
    background-color: transparent;
    color: inherit;
    cursor: inherit;
    font-size: inherit;
    width: @full;
    height: @full;
  }

  each(//noinspection CssInvalidAtRule
  @selectors-justify, {
    // noinspection LessUnresolvedVariable
    &.@{value} {
      & > span[data-justifiable] {
        @justify: 'justify-@{value}';

        /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
        display: flex;
        align-items: center;
        justify-content: @@justify;
      }
    }
  });

  &.square {
    border-radius: @zero;
  }

  &.circle,
  &.square {
    padding: @zero;
    height: @height-default;
    width: @height-default;
    // font-size: @zero;

    & > span[data-justifiable] {
      border-radius: inherit;
    }

    each(@selectors-size, {
      // noinspection LessUnresolvedVariable
      &.@{value} {
        @size: 'height-@{value}';

        height: @@size;
        width: @@size;
      }
    });
  }
}
</style>
