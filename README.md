# 🚀 Quick Start Guide

### 🌍 Overview
RolloutHQ provides highly customizable, embedded UI that allows your users to authenticate with the tools they use and specify how to connect them to your app. Through the RolloutHQ UI, users can connect `Triggers`, events that occur in one app, to `Actions`, operations that can be performed in another app.

In the example below, the user is configuring an integration so that every time they complete a task (`Trigger`) in their favorite todo app, a Slack message is sent (`Action`):
![Screen Shot 2022-04-28 at 8 55 59 PM](https://user-images.githubusercontent.com/733804/165949909-b672b228-f7bc-4273-99dd-7c318b38ccdc.png)


This guide will help you get up and running with a simple RolloutHQ implementation that gives your users access to 100s of integrations with about an hour of setup! 


### 🔐 Authentication
Authentication with RolloutHQ is via JWT. In order to generate a JWT, you'll need your `Client Id` and and `Client Secret` which can be found under Settings > Security in the RolloutHQ dashboard:

<img width="1308" alt="Screen Shot 2022-04-28 at 7 45 13 PM" src="https://user-images.githubusercontent.com/733804/165869386-1d7b584f-daa2-497e-857d-e9514063ee68.png">

The `iss` claim of the token is your Client Id, while the `sub` claim is a unique, persistent identifer that specifies the current user. 

See the JWT generation code example (link to code example).


### 🎨 Rendering the Embedded UI
Now that you can generate a JWT to authenticate the current user, you're ready to render the embedded UI. See the Todo Example App (link) for details on rendering and styling RolloutHQ's UI.

A wide range of user experiences are possible, from integrations that you define ahead of time and and just require the user to authenticate, to UI that allows users to map trigger data to the app and action of their choosing. The Todo Example App uses the `AutomationsManager` component, which provides a fully encapsulated experience that allows create and edit integrations from a single place.

### 🧑‍💻 Defining Triggers
`Triggers` are the types of events emitted by your app that can be used as input to `Actions` in other apps. For a booking app, this might correspond to "New Event Booked"; for a todo app, this might correspond to "Task Created" or "Task Completed". You can optionally provide a callback url where RolloutHQ will send the results `Actions` executed as a result of that `Trigger`. 

 `Triggers` are defined in the RolloutHQ dashboard under "My Triggers and Actions":

<img width="1308" alt="Screen Shot 2022-04-28 at 8 11 28 PM" src="https://user-images.githubusercontent.com/733804/165873800-4c57c900-5ca7-44f5-9582-72f953c6dd0f.png">

<img width="1308" alt="Screen Shot 2022-04-28 at 8 12 25 PM" src="https://user-images.githubusercontent.com/733804/165873828-8eb79b29-11e9-4dac-8db0-4ad82b8e263b.png">


### 🤖 Sending Trigger Events to RolloutHQ
The final step is to start sending `Trigger` events to RolloutHQ, so that we can execute `Actions` on behalf of your users.

There are two ways to send data to RolloutHQ:
1. `Push Triggers` are sent to RolloutHQ's `trigger-event` API endpoint from your app when an instance of your trigger occurs. See the todo app for an example (link to example push trigger). 
2. `Rest Hook Triggers` implement the [Rest Hook patterns](https://resthooks.org/). If you've implemented a Zapier integration, you can configure RolloutHQ to leverage your existing rest hook triggers and send the same events to both Zapier and RolloutHQ.
