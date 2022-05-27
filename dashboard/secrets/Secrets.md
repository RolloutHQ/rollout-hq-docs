## < [Dashboard](../README.md) - Secrets

---

This view gives you access to:

- [Client ID](#client-id)
- [Client Secret](#client-secret)
- [Environment Variables](#environment-variables)

### Client ID

---

The client ID should be set as the `iss` claim when generating a Rollout JWT token.

<br />

### Client Secret

---

The client secret should be used when signing a Rollout JWT token.

This view also allows you to rotate a client secret.

> Note: a newly generated secret will immediately be applied when verifying JWTs, you should account for this when sending webhooks of a [Push Trigger](../../dashboard/triggers/Triggers-Api-Configuration.md#push-trigger) type.

🚨 Your client secret is used when validating a signed JWT and gives access to your project's services and user automations. Keep it confidential and never store it in a public repository.

<br />

### Environment Variables

---

Environemnt variables can be set to be referenced when executing [REST Hook](../../dashboard/triggers/Triggers-Api-Configuration.md#rest-hooks) triggers as seen in the [Perform](../../dashboard//triggers/Triggers-Api-Configuration.md#perform) examples.

> Note: created and updated environment variables will take immediate effect; you should account for this when sending webhooks of a [REST Hook](../../dashboard/triggers/Triggers-Api-Configuration.md#rest-hooks) type

<br />
<p align="center">
  <img src="https://user-images.githubusercontent.com/37576329/170776956-9c209a8c-6962-47a3-bb4b-49c4254e8c9b.png" />
">
</p>
