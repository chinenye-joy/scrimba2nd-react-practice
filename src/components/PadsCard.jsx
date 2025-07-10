import { useState } from "react"
import PadsData from "./PadsData"
import Pad from "./Pad"

export default function PadsCard() {
  const [pads, setPads] = useState(PadsData)

  const buttonElements = pads.map(pad => (
< Pad key={pad.id} color={pad.color} on={pad.on} />
  ))

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="grid grid-cols-4 grid-rows-2 gap-2">
        {buttonElements}
      </div>
    </main>
  )
}
