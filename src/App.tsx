import { useState } from 'react'
import _modes from './modes.json'

// type Equal<T, U> = (<G>() => G extends T ? 1: 2) extends (<G>() => G extends U ? 1: 2) ? true: false
// type Expect<T extends U, U extends boolean> = true

export default function App() {
  const modes: Mode[] = _modes;
  const [mode, setMode] = useState<Mode>(modes[1]);

  return <>
    <div className='w-screen h-screen relative overflow-x-hidden overflow-y-visible bg-slate-500 flex justify-center'>
      <div className='w-5/6 min-h-full h-fit bg-sky-950 flex flex-col items-center'>
        <header className='w-5/6 h-32 border-b-black border-b-2 flexer text-3xl text-sky-400'>
          <h1 className='tracking-wider'>AR : Valóság++</h1>
        </header>
        <main className='w-full h-full flex flex-col items-center mt-16'>
          <div className='w-full h-24 flex justify-evenly items-center'>
            {modes.map(i => <>
              <img onClick={() => setMode(i)} src={i.url} alt="" className='w-[25%] cursor-pointer duration-300 hover:opacity-75' 
                style={mode.url === i.url ? { borderColor: '#146C94', borderWidth: '2px', scale: '1.3' }: {}}
              />
            </>)}
          </div>
          <div className='w-[35%] h-8 border-b-black border-b-2 mt-16' />
          <article className='w-5/6 h-fit text-sky-400 text-center mt-16 tracking-widest'>
            {mode.description}
          </article>
          <iframe className='my-20' width="50%" height="300" src="https://www.youtube.com/embed/PyrQAd54b1k" title="Chainsaw Man OP - KICK BACK - Fingerstyle Guitar Cover" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </main>
      </div>
    </div>
  </>
}