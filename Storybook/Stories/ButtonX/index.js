import {storiesOf} from '@storybook/vue';
import ButtonX1 from './ButtonX.story.1.vue';
import ButtonX2 from './ButtonX.story.2.vue';
import ButtonX3 from './ButtonX.story.3.vue';
import ButtonX4 from './ButtonX.story.4.vue';
import ButtonX5 from './ButtonX.story.5.vue';
import ButtonX6 from './ButtonX.story.6.vue';
import ButtonX7 from './ButtonX.story.7.vue';

export default () => {
  storiesOf('ButtonX', module)
    .add('default', () => ButtonX1)
    .add('icon and text', () => ButtonX2)
    .add('text, icon and background', () => ButtonX3)
    .add('block buttons', () => ButtonX4)
    .add('disabled', () => ButtonX5)
    .add('hide', () => ButtonX6)
    .add('hidden', () => ButtonX7);
};
