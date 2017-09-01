import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import HelloWorld from "./components/HelloWorld"


storiesOf('Learn', module)
	.add('Hello world', () => <HelloWorld onClick={action('onClick')}/>);