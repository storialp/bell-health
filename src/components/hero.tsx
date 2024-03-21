import FreshLogo from './freshLogo'
import Carlotta from './carlotta'


export default function Hero() {

 return (
  <div className="bg-white flex h-full overflow-hidden">
   <header className="absolute inset-x-0 top-0 z-50">
    <div className="flex items-center justify-between p-6 lg:px-8" aria-label="Global">
     <div className="flex items-start">
      <a href="#" className="-m-1.5 p-1.5">
       <span className="sr-only">Fresh by Bell Food Group</span>
       <FreshLogo className="h-8 w-auto" />
      </a>
     </div>
     {/* <div className="-m-1.5 p-1.5 flex flex-col items-end">
      <span className="sr-only">Your Streak</span>
      <img src='https://utfs.io/f/69447acf-2915-445e-93b5-896a7e2ccce6-umijef.png' className="h-10 w-auto" alt='Streak count' />
     </div> */}
    </div>

   </header>

   <div className="relative isolate pt-14">
    <div className="mx-auto max-w-7xl px-6 py-6 sm:py-32 lg:flex lg:items-center lg:gap-x-10 lg:px-8 lg:py-40">
     <div className="mx-auto max-w-2xl lg:mx-0 lg:flex-auto">
      <h1 className="max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl">
       Welcome back Mario!
      </h1>
      <p className="mt-3 text-lg leading-8 text-gray-600">
       Today Carlotta is feeling...
      </p>
      <div className="w-full flex flex-row relative items-center">
       <div className="w-full bg-gray-200 rounded-full h-5">
        <div
         className="bg-green-600 h-5 rounded-full"
         style={{
          width: '80%',
         }}
        ></div>
       </div>
      </div>
      <div className='flex flex-row-reverse'>
       <h1 className="max-w-lg text-3xl font-bold tracking-tight text-gray-900 sm:text-6xl pt-2">
        Happy!
       </h1>
      </div>
     </div>
     <div className="mt-2 sm:mt-24 lg:mt-0 lg:flex-shrink-0 lg:flex-grow">
      <Carlotta className='h-64 w-auto mx-auto' />
     </div>
    </div>
   </div>
  </div>
 )
}
