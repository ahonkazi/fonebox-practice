import React from 'react'
import HeroImg from '../../_assets/hero-image.png'
import Image from 'next/image'
const RightImage = () => {
    return (
        <div className='hidden lg:block'>
            <Image className='w-[90%]' src={HeroImg} alt='Hero image' />
        </div>
    )
}

export default RightImage