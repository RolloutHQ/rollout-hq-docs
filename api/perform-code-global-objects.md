## Perform Global Objects

---

The perform code blocks found in API configuration interfaces allow the user to perform custom mapping, additional Node.js logic like HMAC authentication checks and/or any additional HTTP requests.

In order to do so a number of global objects are available in the execution context of the perform code block.

- [`utils` Object](#utils-object)
  * [`utils.crypto`](#utilscrypto)
  * [`utils.fetch`](#utilsfetch)
- [`context` Object](#context-object)
  * [`context.automation` (object)](#contextautomation-object)
  * [`context.targetUrl` (string)](#contexttargeturl-string)
  * [`context.cleanedRequest` (object)](#contextcleanedrequest-object)
  * [`context.rawRequest` (object)](#contextrawrequest-object)
- [`env` Object](#env-object)
  * [Zapier Compatibility](#zapier-compatibility)
- [`inputs` Object](#inputs-object)
---

## `utils` Object

---

### `utils.crypto`

<br />

Provide cryptographic functionality which includes a set of wrappers for OpenSSL's hash, HMAC, cipher, deciper, sign and verify functions.

Usage:

```tsx
const stringToHash = "rollout";
const hash = crypto.createHash("md5").update(stringToHash).digest("hex");
```

<br />

### `utils.fetch`

HTTP/1.1 client.

Usage:

```javascript
const result = await utils.fetch(url, options);
```

<br />

## `context` Object

---

### `context.automation` (object)

`Automation` object related to execution. See [Automation docs](/api/Automation.md).

<br />

### `context.targetUrl` (string)

URL of webhook belonging to automation to execute.

<br />

### `context.cleanedRequest` (object)

Parsed webhook request:

| property    | type   | Description              |
| ----------- | ------ | ------------------------ |
| method      | string | Webhook http method.     |
| querystring | object | Query parameters object. |
| headers     | object | Headers object.          |
| content     | object | Body object.             |

<br />

### `context.rawRequest` (object)

Similar to `cleanedRequest` but with some unparsed properties.

Headers other than `Content-Length` and `Content-Type` will be prefixed with `Http-`

| property    | type   | Description                                 |
| ----------- | ------ | ------------------------------------------- |
| method      | string | Webhook http method.                        |
| querystring | string | Raw query string.                           |
| headers     | object | Headers object, see note above re: `Http-`. |
| content     | string | JSON string of body.                        |

<br />

## `env` Object

---

The `env` object holds any environment variables you have configured under the [Configuration](../dashboard/configuration/Configuration.md) dashboard view.

> :information_source: `ROLLOUT_CLIENT_ID` and `ROLLOUT_CLIENT_SECRET` are reserved and will match the information found in the [Configuration](../dashboard/configuration/Configuration.md) page. 

<br />

---

### Zapier Compatibility

The following are also available with some limited compatibility

| Variable | Notes                                                      |
| -------- | ---------------------------------------------------------- |
| z        | Supports a `hash` and `request` method similar to Zapier's |
| bundle   | Points to the `context` object mentioned above             |


<br />

## `inputs` Object

---

The `inputs` object is available when configuring an action, and maps to a record of existing action keys in the data tab, along with whatever values a user assigned.


For example, an action configured with the following inputs:
- `task_name`
- `task_description`

will make an `inputs` object available with the following shape:

```javascript
{
  task_name: "some user-assigned value",
  task_description: "another user-assigned value"
}

console.debug(inputs.task_name); // "some user-assigned value"
```
