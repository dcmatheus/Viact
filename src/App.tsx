import LogosReact from '~icons/logos/react'
import LogosVitejs from '~icons/logos/vitejs'

function App() {
  return (
    <div className="flex items-center justify-around h-screen p-2 bg-orange-400">
      <LogosReact className="text-6xl" />
      <h1 className="text-6xl font-bold text-white underline">App</h1>
      <LogosVitejs className="text-6xl" />
    </div>
  )
}

export default App
