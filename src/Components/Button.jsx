import IconArrow from "../assets/images/icon-arrow-right.svg"
import { ReactSVG } from 'react-svg';

export default function Button() {
  return (
    <button className="bg-green hover:bg-transparent hover:text-green  flex justify-center content-center p-4  border-2 border-green
    hover:custom-button">
        <span className="uppercase">generate</span>
        <span>
        <ReactSVG className="pl-3 pt-[5px] icon-arrow" src={IconArrow} alt="icon" />
        </span>
    </button>
  )
}
