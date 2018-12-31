import 'StoryBook/.storybook/polyfill.config';
import 'Configs/logger.config';
import 'StoryBook/.storybook/vue.config';
import 'CSS/styles.less';
import 'StoryBook/Lib/CSS/Fugue/fugue-icons.css';
import 'StoryBook/CSS/styles.less';
import {configure} from '@storybook/vue';
import stories from 'Stories';

configure(stories, module);
