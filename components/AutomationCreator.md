# AutomationCreator

This component renders a form with everything needed to set up a new automation.

This component relies on being wrapped in `RolloutConnectProvider` in order to provide token and other optional configuration.

## Props

| prop                | type                 | required | default | Description                                                                                         |
|---------------------|----------------------|----------|---------|-----------------------------------------------------------------------------------------------------|
| `onAutomationCreated` | `({ automation }) => void` | `true`     | | A callback to call after user successfully sets up an automation. You can use this to navigate away. |
| `onBeforeAutomationCreate` | `({ automationData }) => boolean \| { automationData }` | `false`     | | A callback to call before request to set up an automation is sent. You can use this to prevent the automation from being created (by returning `false`) or modify the `automationData` to attach `customData` or otherwise tweak the automation data. Can be `async`. |

## Example

```tsx
import { RolloutConnectProvider, AutomationCreator } from "@rollouthq/connect-react";

<RolloutConnectProvider token={token}>
  <AutomationCreator
    onAutomationCreated={() => navigate("/automations")}
    onBeforeAutomationCreate={({ automationData }) => {
      return {
        automationData: {
          ...automationData,
          customData: {
            arbitraryProp: "abc123"
          },
        },
      };
    }}
  />
</RolloutConnectProvider>
```