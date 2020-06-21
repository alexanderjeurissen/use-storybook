# useStorybook - provider & hook
![Publish](https://github.com/alexanderjeurissen/use-storybook/workflows/Publish/badge.svg?event=release)

This addon provides a decorator and hook to consume the `storyContext` and `storyFn` of the current active story anywhere in the render tree.
It's especially useful when you want to inspect the story content, or use parts of the storyContext in utility functions or event tracking.

### Installation

either with NPM or Yarn:

`yarn add use-storybook`

or

`npm install --save @alexanderjeurissen/use-storybook`

### Basic usage

A HOC is provided to make hooking the provider into your stories is as seamless as possible:

Add the HOC as a decorator in `./storybook/preview.js`:

```js
import { withStoryContext } from '@alexanderjeurissen/use-storybook';

addDecorator(withStoryContext);
```

Use the provided hook anywhere in the story render tree:

```jsx
import { useStorybook } from '@alexanderjeurissen/use-storybook';

export default {
  title: "Components|my-component",
};

export const Default = () => {
  const { storyContext, storyFn } = useStorybook();
  
  ...
}
```

### Advanced usage

There are cases where more finegrained control is desired. Therefore in addition to the `withStoryContext` HOC, access to the underlying provider and context is possible:

#### <StoryProvider

```js
import { StoryProvider } from '@alexanderjeurissen/use-storybook';

addDecorator((storyFn, storyContext) => {
  ...
  
  return (
    <StoryProvider>
      {storyFn()}
    </StoryProvider>
  );
});
```

This function signature is exactly what the `withStoryContext` hoc provides.

#### StoryContext

```js
import { StoryContext } from '@alexanderjeurissen/use-storybook';

addDecorator((storyFn, storyContext) => {
  ...
  
  return (
    <StoryContext.Provider value={storyFN, storyContext, ...}>
      {storyFn()}
    </StoryContext.Provider>
  );
});
```

This provider signature is exactly what the `<StoryProvider` component provides.
