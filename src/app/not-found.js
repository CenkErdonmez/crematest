import Link from 'next/link'
import { getCookie } from '@/utilities/cookie-utils'
import { notFoundData } from '@/utilities/constants';
export default function NotFound() {
    const lang = getCookie("lang").value;



  return (
    <main className="mx-auto bg-black h-screen w-full flex items-center justify-center ">
     <div className='flex flex-col gap-3'>
     <h2 className='text-white font-bold text-xl'>{lang === "en-US" ? notFoundData.title.en : notFoundData.title.tr}</h2>
      <p className='text-md font-bold text-white'>{lang === "en-US" ? notFoundData.desc.en : notFoundData.desc.tr}</p>
      <Link className='border flex items-center justify-center py-2 rounded hover:opacity-70 font-bold text-lg bg-white ' href="/">{lang === "en-US" ? notFoundData.button.en : notFoundData.button.tr}</Link>
     </div>
    </main>
  )
}