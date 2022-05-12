# ✅ Todo App Example

This example apps takes the classic [Todo MVC app](https://todomvc.com/examples/typescript-react/#/) and adds functionality that enables users to perform actions in other apps.


When rendered, the example app looks like this:

![Screen Shot 2022-04-29 at 9 26 14 AM](https://user-images.githubusercontent.com/733804/165964045-9fa221aa-2d17-4610-b96d-9a96f8a1549e.png)


### 🪛 Installation

The Todo App example is built using react, so the React component is installed via `npm install @rollouthq/connect-react`.

Not using react? You can install via `@rollouthq/connect-widget`.


### 📄 Rendering the UI

All you need to do is [render the React component](https://github.com/PlaybookWorkflows/rollout-hq-docs/blob/55aeefbaae66e2f156d6d1d7509649dfebfed0f9/examples/todo-example-app/app.js#L95) and pass in a RolloutHQ token for authentication.

If you're using a different framework, you can import the `renderComponent` function instead. See the Vue example below:

```
<template>
  <div ref="automationsManager"></div>
</template>

<script>
  import { renderComponent, COMPONENTS } from @rollouthq/connect-component;

  export default {
    name: 'Automations Manager',
    props: ['rolloutHQToken'],
    mounted: function () {
      const options = {
        token: this.$props.rolloutHQToken,
      };
      renderComponent(this.$refs.automationsManager, COMPONENTS.AUTOMATIONS_MANAGER, options);
    },
  };
</script>
```


### 🧑‍🎨 Custom Styling
RolloutHQ exposes CSS classes that allow you to [style the embedded UI](https://github.com/PlaybookWorkflows/rollout-hq-docs/blob/main/examples/todo-example-app/rollouthqstyles.css) to match the look and feel of your app. If you're looking to get started event faster, you can also import and use our default theme.

