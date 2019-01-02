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
          :autocomplete="autocomplete"
          :autofocus="autofocus"
          :form="form"
          :list="list"
          :maxlength="maxlength"
          :minlength="minlength"
          :name="name"
          :pattern="pattern"
          :readonly="readonly"
          :required="required"
          :spellcheck="spellcheck"
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
      :data-custom-icon="dataCustomIcon"
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
import isValidWholeNumber from 'Utils/isValidWholeNumber';
import isValidSearchNumber from 'RootDir/src/Utils/isValidSearchNumber';
import isValidBooleanStringProp from 'Utils/isValidBooleanStringProp';
import toTrueOrNull from 'Utils/toTrueOrNull';

library.add(faTimesCircle);

const EMPTY_STRING = '';
const NAME = 'InputX';

export default {
  name: NAME,

  directives: {clickOutside},

  components: {FontAwesomeIcon},

  props: {
    autocomplete: {
      default: null,
      type: String,
    },
    autofocus: {
      default: null,
      type: Boolean,
    },
    clear: {
      default: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    form: {
      default: null,
      type: String,
    },
    id: {
      default: null,
      type: String,
    },
    list: {
      default: null,
      type: String,
    },
    maxlength: {
      default: null,
      type: [Number, String],
      validator: isValidWholeNumber,
    },
    minlength: {
      default: null,
      type: [Number, String],
      validator: isValidWholeNumber,
    },
    name: {
      default: null,
      type: String,
    },
    pattern: {
      default: null,
      type: RegExp,
    },
    placeholder: {
      default: null,
      type: String,
    },
    readonly: {
      default: null,
      type: Boolean,
    },
    required: {
      default: null,
      type: Boolean,
    },
    spellcheck: {
      default: null,
      type: [Boolean, String],
      validator: isValidBooleanStringProp,
    },
    tabindex: {
      default: null,
      type: [Number, String],
      validator: isValidSearchNumber,
    },
    type: {
      default: null,
      type: String,
      validator() {
        return false;
      },
    },
    value: {
      default: EMPTY_STRING,
      type: String,
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
      return toTrueOrNull(this.clear);
    },
    dataCustomIcon() {
      return toTrueOrNull(this.$slots.clearicon);
    },
    dataFocused() {
      return toTrueOrNull(this.isFocused);
    },
    dataActive() {
      return toTrueOrNull(this.isActive && !this.disable);
    },
    dataClearVisible() {
      return toTrueOrNull(!this.isDisabled && this.dataClearable && this.model);
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

  &[data-active],
  &[data-focused],
  &:hover {
    &:not([data-disabled]) > div[data-clear][data-clear-visible] {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      display: inline-flex;
    }
  }

  & > div:first-child {
    /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
    display: inline-flex;
    height: @full;
    min-width: @full;

    & > div {
      /* stylelint-disable-next-line plugin/no-unsupported-browser-features */
      display: flex;
      flex-grow: 1;
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
    display: none;
    position: relative;
    right: (@font-size-default + @padding);
    line-height: @zero;

    &:not([data-custom-icon]) {
      opacity: @two-thirds;
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
