# RolloutConnectProvider

Rollout Connect components require certain context to be provided via `RolloutConnectProvider`.
You can put this at the root of your React tree, or just wrap any component that requires it.

## Props

| prop        | type     | required | default | Description                                  |
|-------------|----------|----------|---------|----------------------------------------------|
| token       | string   | true     | -       | Token to authenticate the end user.          |
| apiBaseUrl  | string   | false    | -       | URL to the Rollout HQ api endpoint.          |
| allowedApps | string[] | false    | -       | List of Apps user is allowed to choose from. |

## Allowed Apps

By default, all Apps supported by Rollout HQ are available.
You can specify the list of allowed apps via the `allowedApps` prop.

This is the list of currently supported apps slugs:
```
asana
clickup
discord
freshsales
freshservice
gmail
googleCalendar
googleDocs
googleSheets
hubspot
jiraSoftwareCloud
klaviyo
mailchimp
monday
msTeams
pipedrive
quickbooksOnline
salesforce
slack
trello
twilio
zendesk
zoom
```

## Example

```tsx
import { RolloutConnectProvider, AutomationEditor } from "@rollouthq/connect-react";

// At the root of your app
<RolloutConnectProvider token={token}>
  {/* Your app */}
</RolloutConnectProvider>
```