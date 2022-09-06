import tw from 'twin.macro'

const Base = tw.div`bg-black`

function App() {
  return (
    <Base>
      <h1 tw="text-3xl text-white font-bold underline">App</h1>
    </Base>
  )
}

export default App
