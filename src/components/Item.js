import React, { useState } from 'react'


function Item({ data }) {
  const [punchline, setPunchline] = useState(false)
  return (
    <div 
    onClick={() => setPunchline(!punchline)}
    className='shadow-md bg-white text-center'>
      <p className='text-2xl p-10'>{data.setup}</p>
      {punchline ? <p className='text-xl p-10'>{data.punchline}</p> : null}
    </div>
  )
}

export default Item