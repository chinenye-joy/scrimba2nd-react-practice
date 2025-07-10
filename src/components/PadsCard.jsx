import { useState } from "react"
import Pads from "./Pads"

export default function PadsCard() {
    const [pad, setPad] = useState(Pads)
    const buttonElements = Pads.map(pad  => (
        < button key={pad.id}></button>
    ))
    
    return (
        <main className="flex justify-center items-center">
            <div className="grid grid-cols-4 grid-rows-2 gap-2">
              
             <button className="h-30 w-30 rounded cursor-pointer border border-red-300">  {buttonElements}</button>
            </div>
        </main>
    )
}
