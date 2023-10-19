import { useState } from "react"

export default function SliderComponent() {
    const [value, setValue] = useState(10)  // valeur initiale à 10

    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div className="text-proper-white w-[200px]">
            <p className="flex justify-between">
                <span>Character Length</span>
                <span className="text-green">{value}</span>
            </p>
            <input 
            type="range" 
            min="1" 
            max="20" 
            value={value} 
            onChange={handleChange}
            style={{ "--percent": `${(value / 20) * 100}%` }}
            className="slider" 
            />
        </div>
    )
}
