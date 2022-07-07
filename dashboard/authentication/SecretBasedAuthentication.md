## < [Dashboard](../README.md) < [Authentication](./Authentication.md) - Secret Based Authentication

---

You can select this method if your application has the ability to access and act upon user data with an elevated access pattern such as a [Client Credential](https://datatracker.ietf.org/doc/html/rfc6749#section-1.3.4) flow.

No further configuration is required on the Authentication dashboard, and any relevant environment variable secrets can be updated on the [Configuration - Environment Variables](../configuration/Configuration.md#environment-variables) page.

> Environment variables are available in all execution contexts in the {{env}} object, as shown on the [Perform Global Objects - Env](../../api/perform-code-global-objects.md#env-object) section.
