# AutomationsManager

This components allows end user to list, create and update his automations.
By default, it shows the list of active automations.
User can click on the "Add" button to create a new automation, or click an existing one to edit it.

## Props

| prop        | type     | required | default                       | Description                                  |
|-------------|----------|----------|-------------------------------|----------------------------------------------|
| `token`       | `string`   | `true`     |                               | Token to authenticate the end user.          |
| `apiBaseUrl`  | `string`   | `false`    | https://app.rollouthq.com/api | URL to the Rollout HQ api endpoint.          |
| `allowedApps` | `string[]` | `false`    | All apps                      | List of Apps user is allowed to choose from. See [RolloutConnectProvider](/components/RolloutConnectProvider.md) docs to see available values. |
| `onAutomationCreated` | | | | See [`AutomationCreator`](/components/AutomationCreator.md) |
| `onBeforeAutomationCreate` | | | | See [`AutomationCreator`](/components/AutomationCreator.md) |


## Example

```tsx
<AutomationsManager
  token="YOUR_TOKEN_HERE"
  allowedApps={["gmail", "googleCalendar"]}
/>
```