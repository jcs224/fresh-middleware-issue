/** @jsx h */
import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";

interface CounterProps {
  start: number;
}

export default function Counter(props: CounterProps) {
  const [count, setCount] = useState(props.start);

  useEffect(() => {
    const event = new CustomEvent('logEvent', {
      detail: count
    })
    window.dispatchEvent(event)
  }, [count])

  const increaseCount = () => {
    setCount(count + 1)
  }

  const decreaseCount = () => {
    setCount(count - 1)
  }

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => decreaseCount()} disabled={!IS_BROWSER}>
        -1
      </button>
      <button onClick={() => increaseCount()} disabled={!IS_BROWSER}>
        +1
      </button>
    </div>
  );
}
