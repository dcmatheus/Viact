import LogosReact from '~icons/logos/react'
import LogosVitejs from '~icons/logos/vitejs'

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className="flex items-center justify-around bg-orange-400 h-screen flex-col">
      <div />
      <div className="flex items-center w-full justify-around text-6xl">
        <LogosReact />
        <h1 className="font-bold text-white underline">App</h1>
        <LogosVitejs />
      </div>
      <button
        className="btn bg-light-300 text-2xl"
        onClick={() => setCount(count + 1)}
      >
        Count: {count}
      </button>
    </div>
  )
}

export default App
