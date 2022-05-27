## Perform Global Objects

---

The perform code blocks found in the perform section of a REST Hook trigger configuration allows the user to perform custom mapping, and additional nodejs logic like HMAC authentication checks.

In order to do so a number of global objects are available in the execution context of the perform code block.

## `utils` Object

---

### `utils.crypto`

<br />

Provide cryptographic functionality which includes a set of wrappers for OpenSSL's hash, HMAC, cipher, deciper, sign and verify functions.

Usage:

```javascript
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

<br />

### `context.targetUrl` (string)

Url of webhook belonging to automation to execute.

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

The `env` object holds any environment variables you have configured under the [Secrets](../dashboard/secrets/Index.md) dashboard view.

<br />

---

### Zapier Compatibility

The following are also available with some limited compatibility

| Variable | Notes                                                      |
| -------- | ---------------------------------------------------------- |
| z        | Supports a `hash` and `request` method similar to Zapier's |
| bundle   | Points to the `context` object mentioned above             |
