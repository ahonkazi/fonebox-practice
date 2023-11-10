import { SectionTitle } from '@/components/typography/Typography'
import React from 'react'
import ProductSlider from './ProductSlider'

const ProductsSection = () => {
  return (
    <section className='our-products site-container '>
      <SectionTitle title='Our Products' subTitle='Products' />
      <ProductSlider />
    </section>
  )
}

export default ProductsSection