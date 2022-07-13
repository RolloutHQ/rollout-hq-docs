# AutomationEditor

This component renders a form used to update an existing automation.

This component relies on being wrapped in `RolloutConnectProvider` in order to provide token and other optional configuration.

## Props

| prop                | type                 | required | default | Description                                                                                          |
|---------------------|----------------------|----------|---------|----------------------------------|
| `automationId`        | `string`               | `true`     | -       | ID of the automation to edit.                                                                        |
| `onAutomationUpdated` | `(automation) => void` | `true`     | -       | A callback to call after user successfully updates an automation. You can use this to navigate away. |

## Example

```tsx
import { RolloutConnectProvider, AutomationEditor } from "@rollouthq/connect-react";

<RolloutConnectProvider token={token}>
  <AutomationEditor
    automationId="AUTOMATION_ID_TO_EDIT"
    onAutomationUpdated={() => navigate("/automations")}
  />
</RolloutConnectProvider>
```