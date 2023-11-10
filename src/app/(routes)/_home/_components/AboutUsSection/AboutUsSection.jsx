import React from 'react'
import AboutUsLeft from './AboutUsLeft'
import AboutUsRight from './AboutUsRight'

const AboutUsSection = () => {
    return (
        <section className='about site-container mt-section'>
            <div className="flex items-center gap-10 flex-col lg:flex-row">
                <AboutUsLeft />
                <AboutUsRight />
            </div>

        </section>
    )
}

export default AboutUsSection