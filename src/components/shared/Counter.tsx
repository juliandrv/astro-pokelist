import { createSignal } from "solid-js"

export const Counter = () => {
  const [counter, setCounter] = createSignal(10)

  return (
    <>
      <h1 class="text-5xl mt-5">Counter</h1>
      <h3 class="text-x my-4">Value: {counter()}</h3>

      <button onClick={() => setCounter(counter() - 1)} class="bg-blue-500 py-1 px-4 mr-2 rounded">
        -1
      </button>
      <button onclick={() => setCounter(counter() + 1)} class="bg-blue-500 py-1 px-4 mr-2 rounded">
        +1
      </button>
    </>
  )
}