import React from 'react'
import Page from '../assests/no.png'

export const PageNotFound = () => {
  return (
    <main>
      <section className='flex flex-col justify-center px-2'>
        <div className='flex flex-col items-center my-4'>
          <h1 className='text-7xl text-gray-700 font-bold my-10 dark:text-white'>404! OOPS</h1>
          <img className='rounded' src={Page} alt='404'/>
        </div>
        <div>
        </div>
      </section>
    </main>
  )
}
