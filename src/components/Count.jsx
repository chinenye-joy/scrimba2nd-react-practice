import React from 'react'

const Count = (props) => {
  return (
   <h2 className="bg-black text-white w-25 text-4xl rounded-2xl text-center">
            {props.number}
          </h2>
  )
}

export default Count