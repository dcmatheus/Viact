import tw from 'twin.macro'
import LogosReact from '~icons/logos/react'
import LogosVitejs from '~icons/logos/vitejs'
const Base = tw.div`bg-blue-900 flex`

function App() {
  return (
    <Base>
      <h1 tw="text-3xl text-white font-bold underline">App</h1>
      <LogosReact className="text-4xl" />
      <LogosVitejs className="text-4xl" />
    </Base>
  )
}

export default App
