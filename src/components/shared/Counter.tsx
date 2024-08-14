import { createSignal, type Component, type JSX } from "solid-js"

interface Props {
  initValue: number
  children?: JSX.Element
}

export const Counter: Component<Props> = (props) => {
  const [counter, setCounter] = createSignal(props.initValue)

  return (
    <>
      {/* <h1 class="text-5xl mt-5">Counter</h1> */}
      {props.children}
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