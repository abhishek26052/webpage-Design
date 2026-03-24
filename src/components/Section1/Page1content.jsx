import React from 'react'
import Rightcontent from '../Section1/Rightcontent';
import Leftcontent from '../Section1/Leftcontent';

const Page1content = () => {
  
  return (
    <div className='flex  h-[87vh] mt-3 '>
      <Leftcontent/>
      <Rightcontent />
    </div>
  )
}

export default Page1content
