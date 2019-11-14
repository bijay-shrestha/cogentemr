import {addParameters, configure} from '@storybook/react';
import {themes} from '@storybook/theming';

addParameters({
    options: {
        theme: themes.dark
    }
});

const component = require.context('@cogentemr/ui-components/src', true, /.stories.js$/);

configure(() => {
    component.keys().forEach(filename => component(filename));
}, module);