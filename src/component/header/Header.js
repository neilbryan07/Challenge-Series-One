import  React , { useState } from 'react'


export function Header() {
  return (
    <div className="mt-6">
      
      <div className="flex justify-center border-2 border-orange-600 rounded-lg">

        <div className='flex items-center flex-col'>
          <h1 className="text-slate-100 text-xl p-2 font-black">Challenge Series 01</h1>
          <h1 className="text-slate-100 text-3xl p-2 font-black">TODO LIST</h1>
          <h3 className='text-slate-100 font-medium p-2'>React.js + Hooks</h3>
        </div>

      </div>

    </div>
  );
}