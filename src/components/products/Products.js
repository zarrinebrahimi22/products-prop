import React from 'react'

export default function Products(props) {
  return (
    <div>
        <div  className='single-box bg-gray-300 rounded-md  h-96 w-72 flex flex-col justify-between '>
            <div  className='flex items-center justify-center w-full'>
            <img src={props.image} className="w-44 h-40 shrink-0" />
            </div>
            <div className='px-4'>
              <h1 className='text-3xl'>{props.title}</h1>
                <p  className='mt-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. ducimus vel eaque!</p>
                <h2 className='mt-4 font-bold text-xl text-orange-600'>{props.price}</h2> 
            </div>
            <div  className='bg-orange-400  w-full  text-center py-1 tracking-wide font-bold text-gray-950  cursor-pointer'>Add to cart</div>
        </div>
       
    </div>
  )
}
