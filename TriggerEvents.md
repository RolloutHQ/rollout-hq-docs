## **Send Trigger Event**

Endpoint for sending trigger events to Rollout. The associated user is extracted from the JWT.

- **URL**
  /trigger-event

- **Method:**
  `POST`

- **Data Params**

**Required:**
| Param | Type | Description |
| ----- | ---- | ----------- |
| triggerKey | string | The unique key specified for this trigger in the RolloutHQ dashbaord |
| payload | object | The data fields configured in the RolloutHQ dashboard |

- **Success Response:**

  <_What should the status code be on success and is there any returned data? This is useful when people need to to know what their callbacks should expect!_>

  - **Code:** 200 <br />
    **Content:** `"OK"`

- **Error Response:**

  - **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "Authorization header is required." }`
