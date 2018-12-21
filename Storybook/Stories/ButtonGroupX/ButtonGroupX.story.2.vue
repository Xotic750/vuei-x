<template>
  <div class="container color">
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
                      <button-group-x :key="k">
                        <template v-for="count of [1, 2, 3]">
                          <button-x
                            :key="count"
                            :class="[border, shape, size, type]"
                            :title="joinClasses(border, shape, size, type)"
                            @click="onClick"
                          >
                            <span
                              v-if="content"
                              class="space-after"
                            >
                              {{ size || 'default' }}
                            </span>
                            <icon-x
                              v-if="content"
                              :class="['fugue-icon', 'fugue-thumb-up']"
                            ></icon-x>
                          </button-x>
                        </template>
                      </button-group-x>
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
import {ButtonX, ButtonGroupX, IconX} from 'SRC';

export default {
  name: 'ButtonGroupX2',

  components: {ButtonX, ButtonGroupX, IconX},

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

<style lang="less">
</style>
