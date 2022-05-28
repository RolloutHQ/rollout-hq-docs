## < [Triggers](Triggers.md) -  Create/Update Trigger
---

## Data

<br />

Allows you to configure the keys which will be available to users when using variable referencing in automation forms. <br />

<br />

> **Push Triggers**:
> <br/><br />
> When using a [Push Trigger](../triggers/Triggers-Api-Configuration.md#push-trigger) type, each key represents an `API` parameter which will be sent in the `payload` object as described in [Send Trigger Event](../../api/trigger-event.md)


<br />

> **REST Hooks**:
> <br/><br />
> When using a [REST Hook](../triggers/Triggers-Api-Configuration.md#push-trigger) trigger type, each key represents parameters which must be returned within the first object of an array, as seen in the "Mapping" examples of the REST hooks [perform section](../triggers/Triggers-Api-Configuration.md#perform)

<br />

| label | required | unique | Description                                                               |
| ----- | -------- | ------ | ------------------------------------------------------------------------- |
| Key   | true     | true   | Unique identifier which your API will use to reference this field         |
| Label | true     |        | Label shown to user when selecting variable reference (via the `@` menu). |

<br />

<p align="center">
  <img src="https://user-images.githubusercontent.com/37576329/170776151-f34a7e4e-dc70-4f9f-9ea1-1f9fc018c2c9.png">
</p>
