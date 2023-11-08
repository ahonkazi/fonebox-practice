import Link from 'next/link'
import React from 'react'
import '../header.scss'

const TopNav = () => {
    return (
        <div className='bg-Blue site-container text-center font-Inter text-white flex items-center justify-center py-2 font-normal'>
            <p className='text-sm'>Register for the all-new Automation Events 2023! <Link className='border-b font-semibold' href={''}>Register now</Link></p>
        </div>
    )
}

export default TopNav