import { useState } from 'react';
import Posts from './Post';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Posts />
    </>
  )
}

export default App
