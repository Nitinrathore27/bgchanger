import { useState } from 'react'
function Change({Colors , setColor}) {
  return (
    <button onClick={() => setColor(Colors)}
              className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
              style={{backgroundColor : Colors}}
              >{Colors}
            </button>
  )
}
function App() {
  const colors = ['purple','olive', 'lime', 'green', 'fuchsia', 'maroon', 'aqua' , 'teal' , 'blue' , 'navy' , 'gray']
  const [color, setColor] = useState("white")

  return (
    <>
      <div className='w-full h-screen duration-200'
      style={{backgroundColor : color}}>
        <div className='fixed flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          {colors.map((color) => (
              <Change Colors={color} setColor={setColor} />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
