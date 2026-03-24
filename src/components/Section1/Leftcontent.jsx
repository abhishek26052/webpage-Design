import React from 'react'
import Herosection from './Herosection'
import Arrow from './Arrow'

const Leftcontent = () => {
    return (
        <div className=' w-1/4 flex justify-between flex-col py-2.5 px-2 m-5 '>
            <Herosection/>
            <Arrow/>
        </div>
    )
}

export default Leftcontent
