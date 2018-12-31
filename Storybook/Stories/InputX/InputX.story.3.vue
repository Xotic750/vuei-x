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
                    :clear="true"
                    placeholder="Type text here."
                    @clear="logEvent('clear', $event)"
                    @click="logEvent('click', $event)"
                    @change="logEvent('change', $event)"
                    @input="logEvent('input', $event)"
                    @focus="logEvent('focus', $event)"
                    @blur="logEvent('blur', $event)"
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
  name: 'InputX3',

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
