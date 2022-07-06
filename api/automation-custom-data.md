# Automation Custom Data

The `customData` property on `Automation` can be used to attach any arbitrary data for later use for things like filtering, grouping and keeping track of relations in your application.

`customData` can be set when creating (or updating) an `Automation` via API, or in the `onBeforeAutomationCreate` callback property of [`AutomationsManager`](/components/AutomationsManager.md) or [`AutomationCreator`](/components/AutomationCreator.md).