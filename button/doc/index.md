# Button

This is a button component.

```js script
import { html } from 'lit';
import '../src/button.css';
import '~/tokens/variables.css';
import '~/tokens/button.css';
import '~/tokens/typography.css';
import '~/tokens/spacing.css';
```

```js preview-story
export const base = () =>
  html` <button class="button">Questa è una CTA</button> `;
```

```js preview-story
export const outline = () =>
  html` <button class="btn" outline>Click me!</button> `;
```

```js preview-story
export const disabled = () =>
  html` <button class="btn" disabled>Click me!</button> `;
```
