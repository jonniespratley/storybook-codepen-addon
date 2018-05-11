# Storybook Addon CodePen




---

Storybook Addon CodePen allows you to view props and code for your stories in [Storybook](https://storybook.js.org).

[Framework Support](https://github.com/storybooks/storybook/blob/master/ADDONS_SUPPORT.md)

![Storybook Addon CodePen Demo](docs/demo.png)

### Getting Started

```sh
yarn add -D storybook-addon-codepen
```

Then create a file called `addons.js` in your storybook config.

Add following content to it:

```js
import 'storybook-addon-codepen/register';
```

Then add the `withNotes` decorator to all stories in your `config.js`:

```js
// Import from @storybook/X where X is your framework
import { configure, addDecorator } from '@storybook/react';
import { withNotes } from 'storybook-addon-codepen';

addDecorator(withNotes);
```

You can use the `notes` parameter to add a note to each story:

```js
import { storiesOf } from '@storybook/react';

import Component from './Component';

storiesOf('Component', module)
  .add('with some emoji', () => <Component />, { notes: 'A very simple component' });
```

#### Using Markdown

To use markdown in your notes, either through import or inline, simply put it in the `markdown` property of your note.

```js
import { storiesOf } from '@storybook/react';
import Component from './Component';
import someMarkdownText from './someMarkdownText.md';

storiesOf('Component', module).add(
  'With Markdown',
  () => <Component />,
  { notes: { markdown: someMarkdownText } }
);
```