## < [Triggers](Triggers.md) - Create/Update Trigger
---
## Api Configuration

<br />

Allows you to configure your trigger to use either **Push Trigger** or **REST Hooks** patterns.
<p align="center">
  <img src="https://user-images.githubusercontent.com/37576329/170776344-a0c8a558-052d-438c-951a-d83b76f10177.png">
</p>

### Push Trigger

A Push trigger requires no further configuration. You can read more on how to send trigger events in the [API > Send Trigger Event](../../api/TriggerEvents.md) section.

<p align="center">
  <img src="https://user-images.githubusercontent.com/37576329/170776572-0d6e1a0c-fb38-44f3-833e-1f9a6275a827.png
">
</p>

### REST Hooks

The rest hook pattern allows you to configure **subscribe** and **unsubscribe** endpoints which we will send requests to each time an automation is created or deleted. More details on the pattern can be found [here](https://resthooks.org/).

Selecting this pattern will enable you to configure the following:

- Subscribe url request schema
- Unsubscribe url request schema
- Perform code

### **Url Request Schema**

1. Select an http method from the dropdown (e.g. `POST`)
2. Enter a request url where Rollout should send requests to (e.g. `https://yourapi.com/subscribe`)
3. Configure key value pairs for:
   - Params
   - Headers
   - Body (:information_source: Unavailable for `GET` | `HEAD` methods)
4. Configure options for:
   - Omitting empty parameters
   - Omitting empty body fields

<p align="center">
  <img src="https://user-images.githubusercontent.com/37576329/170776705-fe59c0a1-7c3a-41c4-93cc-db6b484d5204.png
">
</p>

### **Perform**

The perform function is executed every time Rollout receives a webhook request, making it an ideal place to perform any mapping transformations or implementing custom logic. (e.g. HMAC authentication).

The following [Perform Global Objects](../../api/PerformGlobalObjects.md) are available when executing custom code:

- `utils`
- `context`
- `env`

You can find detailed info of what each object holds and backwards zapier compatibility [here](../../api/PerformGlobalObjects.md).

> Note: Return value of the perform function must be the first element of an array

Default:

```javascript
return [bundle.cleanedRequest];
```

Mapping:

```javascript
const { payload } = bundle.cleanedRequest;

const mappedPayload = {
  task_name: payload.task_name,
};

return [mappedPayload];
```

HMAC Authentication:

```javascript
const { hmac, public_key, payload } = bundle.cleanedRequest;

const hmacToCompare = utils.crypto
  .createHmac("sha256", env.HMAC_SECRET)
  .update(payload)
  .digest("hex");

if (hmacToCompare != hmac) {
  throw new Error("Unauthorized");
}

return [mappedPayload];
```
