

export default function StatusComponent() {
  return (
    <div className="bg-beige-black text-proper-white p-2 w-[300px]">

        <div className="bg-hole-black flex justify-between p-2">
            <span className="uppercase text-beige-blue">strength</span>
            <span className="uppercase flex">too weak!
             <span className="h-7 w-2.5 block bg-tomato ml-2"></span>
             <span className="h-7 w-2.5 block border-2 ml-2"></span>
             <span className="h-7 w-2.5 block border-2 ml-2"></span>
             <span className="h-7 w-2.5 block border-2 ml-2"></span>
            </span>
        </div>

        <div className="bg-hole-black flex justify-between p-2 mt-2">
            <span className="uppercase text-beige-blue">strength</span>
            <span className="uppercase flex">weak
             <span className="h-7 w-2.5 block bg-orange ml-2"></span>
             <span className="h-7 w-2.5 block bg-orange ml-2"></span>
             <span className="h-7 w-2.5 block border-2 ml-2"></span>
             <span className="h-7 w-2.5 block border-2 ml-2"></span>
            </span>
        </div>

        <div className="bg-hole-black flex justify-between p-2 mt-2">
            <span className="uppercase text-beige-blue">strength</span>
            <span className="uppercase flex">medium
             <span className="h-7 w-2.5 block bg-yellow ml-2"></span>
             <span className="h-7 w-2.5 block bg-yellow ml-2"></span>
             <span className="h-7 w-2.5 block bg-yellow ml-2"></span>
             <span className="h-7 w-2.5 block border-2 ml-2"></span>
            </span>
        </div>

        <div className="bg-hole-black flex justify-between p-2 mt-2">
            <span className="uppercase text-beige-blue">strength</span>
            <span className="uppercase flex">strong
             <span className="h-7 w-2.5 block bg-green ml-2"></span>
             <span className="h-7 w-2.5 block bg-green ml-2"></span>
             <span className="h-7 w-2.5 block bg-green ml-2"></span>
             <span className="h-7 w-2.5 block bg-green ml-2"></span>
            </span>
        </div>

    </div>
  )
}
