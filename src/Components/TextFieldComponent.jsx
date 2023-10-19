import { ReactSVG } from 'react-svg';
import { useRef } from "react"
import IconCopy from "../assets/images/icon-copy.svg"


export default function TextFieldComponent() {
  const inputRef = useRef(null)

  const handleCopyClick = () => {
    const inputValue = inputRef.current.value;
    navigator.clipboard.writeText(inputValue).then(() => {
      console.log("Texte copié avec succes !")
    }).catch((err) => {
      console.log("Erreur lors de la copie", err)
    })
  }

  return (
    <div className="bg-beige-black text-proper-white flex justify-between w-[300px] p-4">
        <input  ref={inputRef} type="text" className='bg-beige-black outline-none
        placeholder:text-proper-white' placeholder='PTx1f5DaFX' />
        <ReactSVG  
        onClick={handleCopyClick}
        src={IconCopy} className='cursor-pointer active:custom-icon' />
    </div>
  )
}
