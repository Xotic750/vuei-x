<template>
  <div>
    <template v-for="(icon, i) in icons">
      <div
        :key="i"
        class="container"
      >
        <template v-for="(border, j) in borders">
          <div :key="j">
            <template v-for="(type, k) of types">
              <div :key="k">
                <h1>
                  Icon: {{ icon || 'default' }},
                  Border: {{ border || 'default' }},
                  Type: {{ type || 'default' }}
                </h1>
                <template v-for="(shape, l) in shapes">
                  <div :key="l">
                    <h2>
                      Shape: {{ shape || 'default' }}
                    </h2>
                    <icon-x
                      :class="[icon, border, shape, type]"
                      :title="joinClasses(icon, border, shape, type)"
                      @click="logEvent('click', $event)"
                      @change="logEvent('change', $event)"
                      @input="logEvent('input', $event)"
                      @keypress="logEvent('keypress', $event)"
                      @keydown="logEvent('keydown', $event)"
                      @keyup="logEvent('keyup', $event)"
                      @focus="logEvent('focus', $event)"
                      @blur="logEvent('blur', $event)"
                      @cut="logEvent('cut', $event)"
                      @copy="logEvent('copy', $event)"
                      @paste="logEvent('paste', $event)"
                      @auxclick="logEvent('auxclick', $event)"
                      @contextmenu="logEvent('contextmenu', $event)"
                      @dblclick="logEvent('dblclick', $event)"
                      @mousedown="logEvent('mousedown', $event)"
                      @mouseenter="logEvent('mouseenter', $event)"
                      @mouseleave="logEvent('mouseleave', $event)"
                      @mousemove="logEvent('mousemove', $event)"
                      @mouseover="logEvent('mouseover', $event)"
                      @mouseout="logEvent('mouseout', $event)"
                      @mouseup="logEvent('mouseup', $event)"
                      @pointerlockchange="logEvent('pointerlockchange', $event)"
                      @pointerlockerror="logEvent('pointerlockerror', $event)"
                      @select="logEvent('select', $event)"
                      @wheel="logEvent('wheel', $event)"
                      @gotpointercapture="logEvent('gotpointercapture', $event)"
                      @lostpointercapture="logEvent('lostpointercapture', $event)"
                      @pointercancel="logEvent('pointercancel', $event)"
                      @pointerdown="logEvent('pointerdown', $event)"
                      @pointerenter="logEvent('pointerenter', $event)"
                      @pointerleave="logEvent('pointerleave', $event)"
                      @pointermove="logEvent('pointermove', $event)"
                      @pointerout="logEvent('pointerout', $event)"
                      @pointerover="logEvent('pointerover', $event)"
                      @pointerup="logEvent('pointerup', $event)"
                    ></icon-x>
                  </div>
                </template>
              </div>
            </template>
          </div>
        </template>
      </div>
    </template>
  </div>
</template>

<script>
import methods from 'Stories/methods';
import {IconX} from 'SRC';

export default {
  name: 'IconX1',

  components: {IconX},

  mixins: [methods],

  data() {
    return {
      icons: ['', 'fugue-icon fugue-thumb-up'],
      borders: ['', 'borderless', 'solid', 'dotted', 'dashed'],
      shapes: ['', 'right-angled', 'round', 'circle', 'pill'],
      types: ['', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark', 'light'],
    };
  },
};
</script>
