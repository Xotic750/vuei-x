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
      borders: ['', 'solid', 'dotted', 'dashed'],
      shapes: ['', 'right-angled'],
      types: ['', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark', 'light'],
    };
  },
};
</script>
