# 🚀 Quick Start Guide

### 🌍 Overview
RolloutHQ provides a highly customizable embedded UI that allows your users to authenticate with the tools they use and specify how to connect them to your app. Through the embedded UI, your users can connect `Triggers`, events that occur in one app, to `Actions`, operations that can be performed in another app.

In the example below, the user is configuring an automastion so that every time they complete a task (`Trigger`) in their favorite todo app, a Slack message is sent (`Action`):

<p align="center">
<img width="552" alt="Screen Shot 2022-05-19 at 8 13 34 AM" src="https://user-images.githubusercontent.com/733804/169302148-21a92cec-04c9-4e1e-ab06-836f7043855b.png">
</p>


This guide will help you get up and running with a simple RolloutHQ implementation that gives your users access to dozens of integrations in four steps:
1. [Authenticate via a signed JWT](#-authentication)
2. [Install and render the RolloutHQ embedded UI](#-rendering-the-embedded-ui)
3. [Define your triggers](#-defining-triggers) 
4. [Start sending data to RolloutHQ](#-sending-trigger-events-to-rollouthq)


### 🔐 Authentication
Authentication with RolloutHQ is achieved by means of a privately signed JWT. In order to generate the signed JWT, you'll need your `Client Id` and `Client Secret` which can be found under [Credentials](https://app.rollouthq.com/dashboard/credentials) in the RolloutHQ dashboard:
<img width="1200" alt="Screen Shot 2022-05-18 at 5 22 33 PM" src="https://user-images.githubusercontent.com/733804/169299253-0e347bc1-0f8a-4612-a900-aea8ff050b3a.png">


The `iss` claim of the token is your Client Id, while the `sub` claim is a unique, persistent identifer that specifies the current user. See the JWT generation [example code](./examples/generate-jwt.js).


### 🎨 Rendering the Embedded UI
Now that you can generate a JWT to authenticate the current user, you're ready to render the embedded UI. See the [Todo Example App](./examples/todo-example-app/README.md#✅-todo-app-example) for details on rendering and styling RolloutHQ's embedded UI.

A wide range of user experiences are possible, from integrations that you define ahead of time and and just require the user to authenticate, to UI that allows users to map trigger data to the app and action of their choosing. The Todo Example App uses the `AutomationsManager` component, which provides a fully encapsulated experience that allows users create and edit integrations from a single place.

### 🧑‍💻 Defining Triggers
`Triggers` are the types of events emitted by your app that can be used as input to `Actions` in other apps. For an event booking app, this might correspond to "New Event Booked"; for a todo app, this might correspond to "Task Created" or "Task Completed". You can optionally provide a callback url where RolloutHQ will send the results `Actions` executed as a result of that `Trigger`. 

 `Triggers` are defined in the RolloutHQ dashboard under [Triggers](https://app.rollouthq.com/dashboard/triggers):
<img width="1251" alt="Screen Shot 2022-05-18 at 5 46 35 PM" src="https://user-images.githubusercontent.com/733804/169299481-38046b03-a3e2-4104-a5f4-6bd6535fed0d.png">


### 🤖 Sending Trigger Events to RolloutHQ
The final step is to start sending `Trigger` events to Rollout, so that we can execute `Actions` on behalf of your users.

There are two ways to send data to RolloutHQ:
1. `Push Triggers` are sent to Rollout's `trigger-event` API endpoint from your app when an instance of your trigger occurs. The Todo Example [app uses `Push Triggers`](./examples/todo-example-app/app.js). 
2. `Rest Hook Triggers` (Coming Soon) implement [Rest Hook patterns](https://resthooks.org/). If you've implemented a Zapier integration, you can configure RolloutHQ to leverage your existing rest hook triggers and send the same events to both Zapier and RolloutHQ.
