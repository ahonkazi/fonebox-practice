import React from 'react'
import HeroImg from '../../_assets/hero-image.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
const RightImage = () => {
    return (
        <motion.div transition={{ delay: 2 }} initial={{ y: '100%' }} animate={{ y: 0 }} className='hidden lg:block'>
            <Image className='w-[90%]' src={HeroImg} alt='Hero image' />
        </motion.div>
    )
}

export default RightImage