import {storiesOf} from '@storybook/vue';
import ButtonGroupX1 from './ButtonGroupX.story.1.vue';
import ButtonGroupX2 from './ButtonGroupX.story.2.vue';
import ButtonGroupX3 from './ButtonGroupX.story.3.vue';
import ButtonGroupX4 from './ButtonGroupX.story.4.vue';
import ButtonGroupX5 from './ButtonGroupX.story.5.vue';
import ButtonGroupX6 from './ButtonGroupX.story.6.vue';
import ButtonGroupX7 from './ButtonGroupX.story.7.vue';
import ButtonGroupX8 from './ButtonGroupX.story.8.vue';
import ButtonGroupX9 from './ButtonGroupX.story.9.vue';

export default () => {
  storiesOf('ButtonGroupX', module)
    .add('default', () => ButtonGroupX1)
    .add('icon, text and background horizontal', () => ButtonGroupX2)
    .add('text, icon and background vertical', () => ButtonGroupX3)
    .add('single button scenario horizontal', () => ButtonGroupX4)
    .add('2 button scenario horizontal', () => ButtonGroupX5)
    .add('single button scenario vertical', () => ButtonGroupX6)
    .add('2 button scenario vertical', () => ButtonGroupX7)
    .add('hide', () => ButtonGroupX8)
    .add('disabled', () => ButtonGroupX9);
};
