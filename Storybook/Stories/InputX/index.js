import {storiesOf} from '@storybook/vue';
import InputX1 from './InputX.story.1.vue';
import InputX2 from './InputX.story.2.vue';
import InputX3 from './InputX.story.3.vue';
import InputX4 from './InputX.story.4.vue';
import InputX5 from './InputX.story.5.vue';
import InputX6 from './InputX.story.6.vue';
import InputX7 from './InputX.story.7.vue';
import InputX8 from './InputX.story.8.vue';
import InputX9 from './InputX.story.9.vue';

export default () => {
  storiesOf('InputX', module)
    .add('default', () => InputX1)
    .add('placeholder', () => InputX2)
    .add('clear', () => InputX3)
    .add('disabled', () => InputX4)
    .add('hide', () => InputX5)
    .add('block', () => InputX6)
    .add('initial value', () => InputX7)
    .add('clear icon', () => InputX8)
    .add('v-model', () => InputX9);
};
