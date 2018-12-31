<template xmlns:v-click-outside="http://www.w3.org/1999/xhtml">
  <div
    v-click-outside:mouseup.capture="onMouseup"
    class="vuix vuix-input"
    data-shapeable="true"
    data-borderable="true"
    data-colorable="true"
    data-blockable="true"
    data-focusable="true"
    data-hoverable="true"
    data-activatable="true"
    :data-active="dataActive"
    :data-focused="dataFocused"
    :data-clearable="dataClearable"
    :data-disabled="isDisabled"
    v-bind="$attrs"
    @mousedown="onMousedown"
    @mouseup="onMouseup"
    @input="onInput"
  >
    <div>
      <div>
        <input
          :id="uuid"
          ref="input"
          v-model="model"
          role="textbox"
          type="text"
          :tabindex="tabindex"
          data-input="true"
          :data-clearable="dataClearable"
          :placeholder="placeHolder"
          :disabled="isDisabled"
          :aria-disabled="isDisabled"
          @blur="onBlur"
          @focus="onFocus"
          v-on="$listeners"
        >
      </div>
    </div>
    <div
      v-if="clear"
      role="button"
      data-clear="true"
      :data-clear-visible="dataClearVisible"
      :data-custom-icon="Boolean($slots.clearicon)"
      :data-disabled="isDisabled"
      :aria-disabled="isDisabled"
      @click="onClick"
      @mousedown.prevent="onMousedown"
      v-on="$listeners"
    >
      <div>
        <slot name="clearicon">
          <font-awesome-icon icon="times-circle"></font-awesome-icon>
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
import createUUID from 'uuid/v4';
import {directive as clickOutside} from 'v-click-outside-x';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faTimesCircle} from '@fortawesome/free-solid-svg-icons/faTimesCircle';
// noinspection ES6CheckImport
import {FontAwesomeIcon} from '@fortawesome/vue-fontawesome';

library.add(faTimesCircle);

const EMPTY_STRING = '';
const NAME = 'InputX';

export default {
  name: NAME,

  directives: {clickOutside},

  components: {FontAwesomeIcon},

  props: {
    clear: {
      default: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    id: {
      default: null,
      type: null,
    },
    placeholder: {
      default: null,
      type: null,
    },
    tabindex: {
      default: null,
      type: null,
    },
    type: {
      default: null,
      type: null,
    },
    value: {
      default: EMPTY_STRING,
      type: null,
    },
  },

  data() {
    return {
      disable: false,
      isActive: false,
      isFocused: false,
      model: this.value,
      placeHolder: this.placeholder,
      uuid: this.id || createUUID(),
    };
  },

  computed: {
    dataClearable() {
      return Boolean(this.clear) || null;
    },
    dataFocused() {
      return Boolean(this.isFocused) || null;
    },
    dataActive() {
      return Boolean(this.isActive && !this.disable) || null;
    },
    dataClearVisible() {
      return Boolean(!this.isDisabled && this.dataClearable && this.model) || null;
    },
    isDisabled() {
      return Boolean(this.disabled || this.disable);
    },
  },

  watch: {
    isDisabled(newValue) {
      if (newValue) {
        this.isActive = false;
      }
    },
  },

  methods: {
    focus() {
      if (this.isDisabled || this.isFocused) {
        return;
      }

      this.$refs.input.focus();
    },
    onBlur() {
      if (this.isDisabled) {
        return;
      }

      this.isFocused = false;
      this.placeHolder = this.placeholder;
    },
    onClick(event) {
      if (this.isDisabled) {
        return;
      }

      if (this.model !== EMPTY_STRING) {
        this.model = EMPTY_STRING;
        this.onInput();
      }

      this.$emit('clear', event);
      this.focus();
    },
    onFocus() {
      if (this.isDisabled) {
        return;
      }

      this.isFocused = true;
      this.placeHolder = null;
    },
    onInput() {
      if (this.isDisabled) {
        return;
      }

      this.$emit('input', this.model);
    },
    onMousedown() {
      if (this.isDisabled) {
        return;
      }

      this.isActive = true;
      this.focus();
    },
    onMouseup() {
      if (this.isDisabled) {
        return;
      }

      this.isActive = false;
    },
  },
};
</script>

<style lang="less">
@import '~CSS/variables.less';

div.vuix-input {
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  outline: none;
  margin: @zero;
  padding: @zero;
  /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
  background-color: inherit;
  color: inherit;
  font-size: @font-size-default;
  border-style: solid;
  border-width: @border-width;
  border-color: @border-top-color @border-right-color @border-bottom-color @border-left-color;
  border-radius: @radius-default;
  transition: @transition-fast border-color, @transition-slow box-shadow;
  height: @height-default;
  width: @width-input-default;
  box-sizing: border-box;
  cursor: text;

  & > div {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    outline: none;
    margin: @zero;
    border: none;
    border-radius: inherit;
    cursor: inherit;
    padding: @zero;
    background-color: transparent;
    color: inherit;
    font-size: inherit;
    opacity: inherit;
  }

  & > div:first-child {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    display: inline-flex;
    height: @full;
    min-width: @full;

    & > div {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      display: flex;
      // min-width: @full;
    }

    & > div > input[data-input] {
      display: block;
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      outline: none;
      margin: @zero;
      border: none;
      border-radius: inherit;
      width: @full;
      min-width: @zero;
      cursor: inherit;
      padding: @padding @font-size-default;
      background-color: transparent;
      color: inherit;
      font-size: inherit;
      opacity: inherit;

      &::-ms-clear {
        display: none;
      }

      &::placeholder {
        color: rgba(@zero, @zero, @zero, @alpha-placeholder);
      }

      &[data-clearable] {
        padding-right: (@padding-default + @clear-size-default);
      }
    }
  }

  & > div[data-clear] {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    display: inline-flex;
    position: relative;
    right: (@font-size-default + @padding);
    line-height: @zero;

    &:not([data-custom-icon]) {
      opacity: @two-thirds;
    }

    &:not([data-clear-visible]) {
      display: none;
    }

    &:not([data-disabled]):hover {
      cursor: pointer;

      &:not([data-custom-icon]) {
        opacity: @four-fifths;
      }
    }

    &[data-disabled]:hover {
      cursor: default;
    }

    & > div {
      display: block;
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      outline: none;
      margin: @zero;
      border: none;
      border-radius: inherit;
      cursor: inherit;
      padding: @zero;
      background-color: transparent;
      color: inherit;
      font-size: inherit;
      opacity: inherit;
    }
  }

  each(@selectors-size, {
    // noinspection LessUnresolvedVariable
    &.@{value} {
      @size: 'font-size-@{value}';
      @height: 'height-@{value}';
      @width: 'width-input-@{value}';

      height: @@height;
      width: @@width;
      font-size: @@size;

      & > div[data-clear]:not([data-custom-icon]) {
        right: (@@size + @padding);
      }
    }
  });

  each(@selectors-color, {
    // noinspection LessUnresolvedVariable
    &.@{value} > div:first-child {
      & > input[data-input]::placeholder {
        @color: contrast(@@value);
        @red: red(@color);
        @green: green(@color);
        @blue: blue(@color);

        color: rgba(@red, @green, @blue, @alpha-placeholder);
      }
    }
  });
}
</style>
