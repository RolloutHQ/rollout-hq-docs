# BlueprintActivator

This component allows an end user to activate, deactivate and configure a specific blueprint.<br />

## Props

| prop        | type   | required | Description                                                                                               |
| ----------- | ------ | -------- | --------------------------------------------------------------------------------------------------------- |
| `blueprintId` | `string` | `true`     | A unique identifier for the blueprint. (Obtainable via the dashboard by selecting the relevant Blueprint) |

## Example

```tsx
<RolloutConnectProvider token={token}>
  <BlueprintActivator blueprintId="BLUEPRINT_ID_TO_ACTIVATE" />
</RolloutConnectProvider>
```
