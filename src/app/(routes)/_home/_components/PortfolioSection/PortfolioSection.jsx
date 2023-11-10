import { SectionTitle } from '@/components/typography/Typography'
import React from 'react'
import PortfolioSlider from './PortfolioSlider'

const PortfolioSection = () => {
  return (
    <section className='portfolio-section site-container mt-section'>
      <SectionTitle subTitle='Portfolio' title='Redefining What’s Possible' mdNextLine='Possible and Achieving Results' responsive={true} mdTitle='Redefining What’s' nextLine={'and Achieving Results'} />
      <PortfolioSlider />

    </section>
  )
}

export default PortfolioSection