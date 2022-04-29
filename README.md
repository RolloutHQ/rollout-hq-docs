# 🚀 Quick Start Guide
RolloutHQ provides highly customizable, embedded UI that allows your users to authenticate with the tools they use and specify how to connect them to your app.

This guide will help you get up and running with a simple RolloutHQ implementation that gives your users access to 100s of integrations with about an hour of setup! 


### 🔐 Authentication
Authentication with RolloutHQ is via JWT. In order to generate a JWT, you'll need your `Client Id` and and `Client Secret` which can be found under Settings > Security in the RolloutHQ dashboard:

<img width="1308" alt="Screen Shot 2022-04-28 at 7 45 13 PM" src="https://user-images.githubusercontent.com/733804/165869386-1d7b584f-daa2-497e-857d-e9514063ee68.png">

The `iss` claim of the token is your Client Id, while the `sub` claim is a unique, persistent identifer that specifies the current user. 

See the JWT generation code example (link to code example).


### 🧑‍💻 Defining Triggers
Triggers are the types of events emitted by your app that users can map to actions in other apps. For a booking app, this might correspond to "New Event Booked"; for a todo app, this might correspond to "Task Created" or "Task Completed". You can define triggers in the RolloutHQ dashboard under "My Triggers and Actions":

<img width="1308" alt="Screen Shot 2022-04-28 at 8 11 28 PM" src="https://user-images.githubusercontent.com/733804/165873800-4c57c900-5ca7-44f5-9582-72f953c6dd0f.png">

<img width="1308" alt="Screen Shot 2022-04-28 at 8 12 25 PM" src="https://user-images.githubusercontent.com/733804/165873828-8eb79b29-11e9-4dac-8db0-4ad82b8e263b.png">

A trigger's output data are the values that users can pass along to other apps:
![Screen Shot 2022-04-28 at 8 55 59 PM](https://user-images.githubusercontent.com/733804/165874130-f17083f4-f377-4763-8777-18aced7e02b2.png)


### 🤖 Sending Trigger Events to RolloutHQ
There are two ways to send data to RolloutHQ:
1. `Push Triggers` are sent to RolloutHQ's `trigger-event` API endpoint from your app when an instance of your trigger occurs. See the todo app for an example (link to example push trigger). 
2. `Rest Hook Triggers` implement the [Rest Hook patterns](https://resthooks.org/). If you've implemented a Zapier integration, you can configure RolloutHQ to leverage your existing rest hook triggers and send the same events to both Zapier and RolloutHQ.


### 🎨 Rendering the Embedded UI
RolloutHQ provides components that enable a wide range of user experiences, from predefined integrations that just require the user to authenticate to UI that allows users to map trigger data to the app and action of their choosing. The example todo app (link to todo app README) uses the `AutomationsManager` component, which provides a fully encapsulated experience that allows create and edit the integrations of their choosing.

