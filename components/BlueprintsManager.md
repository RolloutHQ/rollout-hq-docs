# BlueprintsManager

This component allows an end user to activate or deactivate available blueprints.<br />
Selecting a blueprint will give the end user the ability to connect a relevant app account or configure additional information if any is required.

## Props

| prop       | type   | required | default                       | Description                         |
| ---------- | ------ | -------- | ----------------------------- | ----------------------------------- |
| token      | string | true     | -                             | Token to authenticate the end user. |
| apiBaseUrl | string | false    | https://app.rollouthq.com/api | URL to the Rollout HQ api endpoint. |

## Example

```tsx
<BlueprintsManager token="ROLLOUT_JWT_TOKEN_HERE" />
```
