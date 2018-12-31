<template>
  <div class="container">
    <template v-for="(border, h) of borders">
      <div :key="h">
        <template v-for="(type, i) of types">
          <div :key="i">
            <h1>
              Border: {{ border || 'default' }},
              Type: {{ type || 'default' }}
            </h1>
            <template v-for="(shape, j) of shapes">
              <div :key="j">
                <h2>Shape: {{ shape || 'default' }}</h2>
                <template v-for="(size, k) of sizes">
                  <input-x
                    :key="k"
                    :class="[border, shape, size, type]"
                    @clear="logEvent('clear', $event)"
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
                  >
                  </input-x>
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
import {InputX} from 'SRC';

export default {
  name: 'InputX1',

  components: {InputX},

  mixins: [methods],

  data() {
    return {
      sizes: ['small', '', 'large'],
      shapes: ['', 'pill', 'right-angled'],
      types: ['', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark', 'light'],
      borders: ['', 'borderless', 'solid', 'dotted', 'dashed'],
    };
  },
};
</script>
