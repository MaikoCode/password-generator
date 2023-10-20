import CheckIcon from "../assets/images/icon-check.svg"

export default function CheckboxComponent() {
  return (
    <div className="bg-beige-black text-proper-white p-2 w-[300px] mt-4">
        <label htmlFor="check" className="container"><input type="checkbox" id="check" /><span className="checkmark">
            <img src={CheckIcon} alt="icon" className="absolute top-0.5 left-0.5" />
        </span>Include Uppercase Letters</label>
    </div>
  )
}
