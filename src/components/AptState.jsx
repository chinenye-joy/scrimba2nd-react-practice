import React from 'react'

const AptState = () => {
  const [result, setResult] = React.useState("yes")
  const handleClick = () => setResult("Definitely")
 
  return (
  <main className='p-6'>
    <h1>Is state important?</h1>
    <button className='p-3 bg-blue-600 rounded-3xl text-white' onClick={handleClick}>{result}</button>
  </main>
  
  )
}

export default AptState