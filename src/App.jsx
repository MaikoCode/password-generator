import Button from "./Components/Button"
import TextFieldComponent from "./Components/TextFieldComponent"
import SliderComponent from "./Components/SliderComponent"
import StatusComponent from "./Components/StatusComponent"
import CheckboxComponent from "./Components/CheckboxComponent"


function App() {
 

  return (
    <div className="bg-hole-black font-jetbrains-mono min-w-screen min-h-screen ">
      <TextFieldComponent />
      <Button /> 
      <SliderComponent />
      <StatusComponent />
      <CheckboxComponent />
    </div>
  )
}

export default App
