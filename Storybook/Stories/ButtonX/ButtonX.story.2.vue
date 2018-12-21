<template>
  <div class="container">
    <template v-for="content of contents">
      <div :key="content">
        <template v-for="(border, h) of borders">
          <div :key="h">
            <template v-for="(type, i) of types">
              <div :key="i">
                <h1>
                  Content: {{ content }},
                  Border: {{ border || 'default' }},
                  Type: {{ type || 'default' }}
                </h1>
                <template v-for="(shape, j) of shapes">
                  <div :key="j">
                    <h2>Shape: {{ shape || 'default' }}</h2>
                    <template v-for="(size, k) of sizes">
                      <button-x
                        :key="k"
                        :class="[border, shape, size, type]"
                        :title="joinClasses(border, shape, size, type)"
                        @click="onClick"
                      >
                        <icon-x
                          v-if="content"
                          :class="['fugue-icon', 'fugue-thumb-up']"
                        ></icon-x>
                        <span
                          v-if="content"
                          class="space-before"
                        >
                          {{ size || 'default' }}
                        </span>
                      </button-x>
                      {{ }}
                    </template>
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
import {ButtonX, IconX} from 'SRC';

export default {
  name: 'XButton2',

  components: {ButtonX, IconX},

  mixins: [methods],

  data() {
    return {
      contents: [true],
      sizes: ['small', '', 'large'],
      shapes: ['', 'circle', 'square', 'pill', 'right-angled'],
      types: ['', 'primary', 'secondary', 'info', 'success', 'warning', 'error', 'dark', 'light'],
      borders: ['', 'dotted', 'dashed', 'borderless'],
    };
  },
};
</script>
