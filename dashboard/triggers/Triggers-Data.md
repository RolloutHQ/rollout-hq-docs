## < [Triggers](Triggers.md) -  Create/Update Trigger
---

## Data

<br />

Allows you to configure the keys which will be available to users when using variable referencing in automation forms. <br />

<br />

| label | required | unique | Description                                                               |
| ----- | -------- | ------ | ------------------------------------------------------------------------- |
| Key   | true     | true   | Unique identifier which your API will use to reference this field         |
| Label | true     |        | Label shown to user when selecting variable reference (via the `@` menu). |


<br />

> **Push Triggers**:
> <br/><br />
> When using a [Push Trigger](../triggers/Triggers-Api-Configuration.md#push-trigger) type, each key represents an `API` parameter which will be sent in the `payload` object as described in [Send Trigger Event](../../api/trigger-event.md)
>
 <br />

<br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/37576329/170776572-0d6e1a0c-fb38-44f3-833e-1f9a6275a827.png">
</p>

<br />

> **REST Hooks**:
> <br/><br />
> When using a [REST Hook](../triggers/Triggers-Api-Configuration.md#push-trigger) trigger type, each key represents parameters which must be returned within the first object of an array, as seen in the "Mapping" examples of the REST hooks [perform section](../triggers/Triggers-Api-Configuration.md#perform):
>
>
>```javascript
>const { payload } = bundle.cleanedRequest;
>
>const mappedPayload = {
  >task_name: payload.task_name,
>};
>
>return [mappedPayload];
>```
><br />



