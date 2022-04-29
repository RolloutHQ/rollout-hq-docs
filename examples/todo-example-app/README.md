# ✅ Todo App Example

This example apps takes the classic Todo MVC app and adds functionality that enables users to perform actions in other apps.

Starting from this:

We get this:

### 🪛 Installation

The Todo App example is built using react, so the React component is installed via `npm install @rollouthq/connect-react`.

Not using react? You can install via `@rollouthq/connect-widget`.

### 📄 Rendering the UI

All we need to do is render the React component and pass in a RolloutHQ component for authentication.

If you're using another framework you can import the `renderWidget` function instead:

```
import { renderWidget, WIDGETS } from @rollouthq/connect-widget

renderWidget(WIDGETS.AUTOMATION_MANAGER, options);
```
