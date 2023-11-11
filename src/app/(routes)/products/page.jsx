import React from 'react'
import LayoutDefault, { LayoutSecondary } from '@/layout/LayoutDefault';
import Filter from './_components/Filter/Filter';
import ProductWrapper from './_components/ProductWrapper/ProductWrapper';
import FlashProducts from './_components/FlashProducts/FlashProducts';
import Blogs from './_components/Blogs/Blogs';
export default function Page() {
  return (
    <>
      <LayoutSecondary>
        <div className="site-container mt-page">
          <div className="flex gap-7 2xl:gap-[30px]">
            <Filter />
            <ProductWrapper />
          </div>
          <div className="">
            <FlashProducts />
          </div>
          <div className="">
            <Blogs />
          </div>
        </div>
      </LayoutSecondary>

    </>
  )
}

