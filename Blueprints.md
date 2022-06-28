# Blueprints

Blueprints allow Rollout partners to create and manage pre-configured Automations on behalf of their users. Rather than requiring the user to map trigger data to action inputs, Blueprints enable Rollout partners to perfom this mapping behind the secnes and to provide simpler user experiences. The user just has to "activate" the Blueprint by providing a credential and selecting any inputs that depend on their credential (e.g. project, folder, contact).

<br />

## Creating Blueprints

Blueprints are created through the [Rollout Dashboard](./dashboard/blueprints/Blueprints.md). Once you've published the Blueprint, you can copy it's id for use in the API or Blueprint components.

<br />

## Activating Blueprints

Blueprints can be activated through Rollout's embedded UI. The [`BlueprintsAcitvator` component](./components/BlueprintActivator.md) allows your users to activate or deactivate a Blueprint, while the [`MyBlueprints` component](./components/MyBlueprints.md) lists all your app's avaiable Blueprints so that your users can select which to activate.

Alternatively, you can build you own user experience and activate a Blueprint Automation on the user's behalf via the [API](https://app.rollouthq.com/api-docs/#/blueprints/post_blueprints__blueprintId__automation).

<br />

## Triggering Blueprint Automations

You can configure your Blueprints to be triggered through the same channels as regular user Automations: through Resthook or Push triggers you've configured for your app or third-party triggers.

Blueprints also support a special kind of trigger called `Direct Invocation`, which is useful for cases where the user triggers the Automation by e.g. clicking a button and you want to return data synchronously rather than waiting for a callback from Rollout. See the [API](https://app.rollouthq.com/api-docs/#/blueprints/post_blueprints__blueprintId__invoke) for details.
