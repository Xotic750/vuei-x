<template>
  <label
    v-if="!hide"
    class="vuix vuix-label"
    :data-disabled="isDisabled"
    v-bind="$attrs"
    v-on="$listeners"
  >
    <slot></slot>
  </label>
</template>

<script>
const NAME = 'LabelX';

export default {
  name: NAME,
};
</script>

<style lang="less">
@import '~CSS/variables.less';

label.vuix-label {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  display: inline-flex;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  outline: none;
  margin: @zero;
  border: @border-width none;
  border-color: @border-top-color @border-right-color @border-bottom-color @border-left-color;
  border-radius: @radius-default;
  font-size: @font-size-default;
  background-color: inherit;
  color: inherit;

  &.right-angled {
    border-radius: @zero;
  }

  each(@selectors-border-style, {
    // noinspection LessUnresolvedVariable
    &.@{value} {
      border-style: @value;
    }
  });

  each(@selectors-color, {
    // noinspection LessUnresolvedVariable
    &.@{value} {
      background-color: @@value;
    }
  });
}
</style>
