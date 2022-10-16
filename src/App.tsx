import LogosReact from '~icons/logos/react'
import LogosVitejs from '~icons/logos/vitejs'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex h-screen flex-col items-center justify-around bg-orange-400 ">
      <div />
      <div className="flex w-full items-center justify-around text-6xl">
        <LogosReact />
        <h1 className="font-bold text-white underline">App</h1>
        <LogosVitejs />
      </div>
      <button
        type="button"
        className="btn bg-light-300 p-2 text-2xl"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  )
}

export default App
