# **Send Trigger Event**
Endpoint for sending trigger events to Rollout. The associated user is extracted from the JWT.

`POST` `/trigger-event`

## Body params
| Param | Type | Required | Description
| ----- | ---- | -------- | -----------
| `triggerKey` | `string` | `true` | The unique key specified for this trigger in the RolloutHQ dashbaord
| `payload` | `object` | `true` | The data fields configured in the RolloutHQ dashboard

## Success Response

```json
{
  "ok": true
}
```

## Errors

### Unauthorized
When authorization fails.<br />
Response code: `401`
```json
{
  "ok": false,
  // Some authorization error
  "error" : "Authorization header is required."
}
```

### Bad Request
When request data does not match schema.<br />
Response code: `400`
```json
{
  "ok": false,
  "error" : {
    // A zod error
  }
}
```
