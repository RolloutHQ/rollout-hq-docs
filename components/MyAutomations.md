# MyAutomations

This component renders the list of user's automations and a button to add a new one.

This component relies on being wrapped in `RolloutConnectProvider` in order to provide token and other optional configuration.

## Props

| prop               | type                 | required | default | Description                                                                                                                            |
|--------------------|----------------------|----------|---------|---------------------|
| onCreateAutomation | () => void           | true     | -       | A callback to call when user clicks on the "New" button. Use this to navigate to a view which renders `AutomationCreator`.             |
| onEditAutomation   | (automation) => void | true     | -       | A callback to call when user intents to edit an existing automation. Use this to navigate to a view which renders  `AutomationEditor`. |

## Example

```tsx
import { RolloutConnectProvider, MyAutomations } from "@rollouthq/connect-react";

<RolloutConnectProvider token={token}>
  <MyAutomations
    onCreateAutomation={() => navigate("create")}
    onEditAutomation={(automation) => navigate(`${automation.id}/edit`)}
  />
</RolloutConnectProvider>
```