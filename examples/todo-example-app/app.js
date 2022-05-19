import React, { useState, useEffect } from "react";
import firebase from "firebase/compat/app";
import axios from "axios";
import { useNavigate } from "@reach/router";
import { Header } from "./header";
import { List } from "./list";
import { TodoContext } from "./todoContext";
import { AutomationsManager } from "@rollouthq/connect-react";

const INITIAL_TODOS = [
  {
    name: "Get groceries",
    completed: false,
    id: 0,
  },
  {
    name: "Integrate integrations",
    completed: true,
    id: 1,
  },
];

export function App({ firebaseIdToken }) {
  const [todos, setTodos] = useState(INITIAL_TODOS);
  const [rolloutHQToken, setRolloutHQToken] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isSignedIn) {
      navigate("/login");
    }
  }, [isSignedIn]);

  useEffect(() => {
    async function fetchRolloutHQToken() {
      // We generate the token on the server in order to keep
      // the ROLLOUT_CLIENT_SECRET secure. See generate-jwt for implementation.
      const token = await getRolloutHQToken(firebaseIdToken);
      setRolloutHQToken(token);
    }
    if (firebaseIdToken) {
      fetchRolloutHQToken();
    }
  });

  const updateTodo = (todo) => {
    const copy = Array.from(todos);
    const old = copy.find((t) => t.id === todo.id);
    old.name = todo.name;
    old.completed = todo.completed;
    setTodos(copy);
    if (todo.completed) {
      sendTaskCompletedEvent(rolloutHQToken, todo.name);
    }
  };

  const addTodo = (name) => {
    setTodos([...todos, { name, id: Date.now() }]);
    sendTaskCreatedEvent(rolloutHQToken, name);
  };

  const deleteTodo = (id) =>
    setTodos(Array.from(todos).filter((t) => t.id !== id));

  const header = isSignedIn && <Header />;
  const list = isSignedIn && todos.length && <List />;
  const signout = isSignedIn && (
    <button
      style={{
        padding: 5,
        borderRadius: "1px",
        border: "1px solid grey",
        backgroundColor: "white",
        cursor: "pointer",
      }}
      onClick={() => firebase.auth().signOut()}
    >
      Sign out
    </button>
  );

  // Render the Todo app with the RolloutHQ AutomationsManager component
  return (
    <div id="app">
      <section className="todoapp">
        <TodoContext.Provider
          value={{ todos, updateTodo, deleteTodo, addTodo }}
        >
          {header}
          {list}
        </TodoContext.Provider>
      </section>
      {rolloutHQToken && (
        <div className="my-automations-wrapper">
          <AutomationsManager token={rolloutHQToken} />
        </div>
      )}
      {signout}
    </div>
  );
}

// Send push trigger events to RolloutHQ
function sendTaskCreatedEvent(rolloutConnectToken, taskName) {
  axios.post(
    "https://app.rollouthq.com/api/trigger-event",
    { triggerKey: "task_created", payload: { task_name: taskName } },
    { Authorization: `Bearer ${rolloutConnectToken}` }
  );
}

function sendTaskCompletedEvent(rolloutConnectToken, taskName) {
  axios.post(
    "https://app.rollouthq.com/api/trigger-event",
    { triggerKey: "task_completed", payload: { task_name: taskName } },
    { Authorization: `Bearer ${rolloutConnectToken}` }
  );
}
