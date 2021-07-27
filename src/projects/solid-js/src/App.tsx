import { Component, createEffect, createSignal, Show, For } from "solid-js"

import logo from "./logo.svg"
import styles from "./App.module.css"
import Nested from "./nested"

const cats = [
  { id: "J---aiyznGQ", name: "Keyboard Cat" },
  { id: "z_AbfPXTKms", name: "Maru" },
  { id: "OUtn3pvWmpg", name: "Henri The Existential Cat" },
]

const App: Component = () => {
  const [count, setCount] = createSignal(0)

  // setInterval(() => setCount(count() + 1), 1000)

  createEffect(() => {
    console.log("The count is now", count())
  })

  const doubleCount = () => count() * 2

  return (
    <>
      <h1>This is a header</h1>
      <p>{count()}</p>
      <button onClick={() => setCount(count() + 1)}>Update count by 1</button>
      <p>{doubleCount()}</p>

      <Show when={count() < 4} fallback={() => <button>What is this </button>}>
        <p>Is that that?</p>
      </Show>

      <For each={cats}>{(cat, i) => <li>{cat.name}</li>}</For>
      <Nested />
    </>
  )
}

export default App
