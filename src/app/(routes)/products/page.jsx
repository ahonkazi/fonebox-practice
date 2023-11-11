import React from 'react'
import LayoutDefault, { LayoutProducts } from '@/layout/LayoutDefault';
import Filter from './_components/Filter/Filter';
import ProductWrapper from './_components/ProductWrapper/ProductWrapper';
import FlashProducts from './_components/FlashProducts/FlashProducts';
import Blogs from './_components/Blogs/Blogs';
import { ProductContext } from '@/context/ProductContext';
export default function Page() {
  return (
    <>
      <LayoutProducts>
        <ProductContext>
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
        </ProductContext>
      </LayoutProducts>

    </>
  )
}

