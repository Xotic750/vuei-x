<template>
  <span
    class="vuix vuix-icon"
    role="presentation"
    data-shapeable="true"
    data-borderable="true"
    data-colorable="true"
    v-bind="$attrs"
    v-on="$listeners"
  ></span>
</template>

<script>
const NAME = 'IconX';

export default {
  name: NAME,
};
</script>

<style lang="less">
@import '~CSS/variables.less';

span.vuix-icon {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  outline: none;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  display: inline-flex;
  margin: @zero;
  border: @border-width none;
  border-color: @border-top-color @border-right-color @border-bottom-color @border-left-color;
  border-radius: @zero;
  font-size: @font-size-default;
  background-color: transparent;
  color: inherit;
}
</style>
