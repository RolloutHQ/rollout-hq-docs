# MyBlueprints

This component renders the list of a user's available blueprints.

This component relies on being wrapped in `RolloutConnectProvider` in order to provide token and other optional configuration.

## Props

| prop                 | type                | required | Description                                                                                                                                                           |
| -------------------- | ------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `onOpenActivationForm` | `(blueprint) => void` | `true`     | A callback to call when a user intents to activate, deactivate or configure an existing blueprint. Use this to navigate to a view which renders `BlueprintActivator`. |

## Example

```tsx
import { RolloutConnectProvider, MyBlueprints } from "@rollouthq/connect-react";

<RolloutConnectProvider token={token}>
  <MyBlueprints
    onOpenActivationForm={(bp) => {
      navigate(`/blueprints/${bp.id}/activate`);
    }}
  />
</RolloutConnectProvider>;
```
