# useStorybook - provider & hook

This addon provides a decorator and hook to consume the `storyContext` and `storyFn` of the current active story anywhere in the render tree.

### Installation

either with NPM or Yarn:

`yarn add story-context-provider`

or

`npm install --save story-context-provider`

### Usage

Add this addon as a decorator in `./storybook/preview.js`:

```js
addDecorator(withStoryContext);
```

Use the provided hook anywhere in the story render tree:

```jsx
import { useStorybook } from 'story-context-provider';

export default {
  title: "Components|my-component",
};

export const Default = () => {
  const { storyContext, storyFn } = useStorybook();
  
  ...
}
```
