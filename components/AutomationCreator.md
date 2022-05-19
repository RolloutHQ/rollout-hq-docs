# AutomationCreator

This component renders a form with everything needed to set up a new automation.

This component relies on being wrapped in `RolloutConnectProvider` in order to provide token and other optional configuration.

## Props

| prop                | type                 | required | default | Description                                                                                         |
|---------------------|----------------------|----------|---------|-----------------------------------------------------------------------------------------------------|
| onAutomationCreated | (automation) => void | true     | -       | A callback to call after user successfully sets up an automation. You can use this to navigate away. |

## Example

```tsx
import { RolloutConnectProvider, AutomationCreator } from "@rollouthq/connect-react";

<RolloutConnectProvider token={token}>
  <AutomationCreator
    onAutomationCreated={() => navigate("/automations")}
  />
</RolloutConnectProvider>
```