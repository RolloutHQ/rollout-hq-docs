# Automation

An `Automation` specifies an operation to execute in an app (`Action`) when an a certain event (`Trigger`) occurs, as well as how to map data from the `Trigger` as input to the `Action`. `Automations` can either be configured directly by the user through the embedded Rollout UI or created and managed on their behalf by Rollout Partners using the API.

### Automation object

| Property | Type    | Description                                                                                                                               |
| -------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| id       | string  | The `Automation's` unqiue identifer                                                                                                       |
| active   | boolean | When true, the `Automation` is "on" and will execute upon the receipt of new trigger events. When false, the Automation will not execute. |
| name     | string  | User-facing name of the `Automation`                                                                                                      |
| trigger  | Trigger | Specifies the event that causes this `Automation` to execute                                                                              |
| action   | Action  | Operation to perform when the `Automation` is executed                                                                                    |

<br />

## Trigger

An `Automation's` `Trigger` specifies the event that causes an `Automation` to execute. There are two kinds of `Triggers`: those maintained by Rollout that specify events in Third Party apps, as well as those defined and maintained by Rollout Partners, which specify events in the Partner's app.

### Partner Trigger object

| Property  | Type                                 | Description                                             |
| --------- | ------------------------------------ | ------------------------------------------------------- |
| type      | "customerResthook" \| "customerPush" | Is this `Trigger` a Push or RestHook Partner `Trigger`? |
| triggerId | string                               | The `Trigger's` unique ID                               |

### Third Party Trigger object

| Property     | Type         | Description                                                                                               |
| ------------ | ------------ | --------------------------------------------------------------------------------------------------------- |
| type         | "thirdParty" | Specifies this `Trigger` as a Third Party `Trigger`                                                       |
| appSlug      | string       | Unique id for the Third Party App the `Trigger` belongs to                                                |
| triggerSlug  | string       | The `Trigger's` identiifer. Unique among its app's `Triggers`                                             |
| inputParams  | object       | Values entered by the user used for filtering `Trigger` events to listen to. E.g. which folder or project |
| credentialId | string       | Unqiue id of the user credential associated with this `Trigger`                                           |

<br />

## Action

An `Automations` action specifies the operation to be performed when the `Automation` is executed. Ther are two kinds of `Actions`: those maintained by Rollout that specify operations in Third Party apps, as well as those defined and maintained by Rollout Partners, which specify operations that can be performed in the Partner's app.

### Partner Action object

| Property    | Type       | Description                                                       |
| ----------- | ---------- | ----------------------------------------------------------------- |
| type        | "customer" | Specifies this `Action` as a Partner `Action`                     |
| actionId    | string     | The `Action's` unique id                                          |
| inputParams | object     | User input that specifies the values of the `Action's` parameters |

### Third Party Action object

| Property     | Type         | Description                                                       |
| ------------ | ------------ | ----------------------------------------------------------------- |
| type         | "thirdParty" | Specifies this `Action` as a Third Party `action`                 |
| appSlug      | string       | Unique id for the Third Party App the `Action` belongs to         |
| actionSlug   | string       | The `Action's` identiifer. Unique among its app's `Actions`       |
| inputParams  | object       | User input that specifies the values of the `Action's` parameters |
| credentialId | string       | Unqiue id of the user credential associated with this `Action`    |

## Custom Data

See [Custom Data docs](/api/automation-custom-data.md).
